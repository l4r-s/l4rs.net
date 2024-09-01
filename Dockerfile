##
# Builder
##
FROM node:20.10-alpine AS builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production yarn build

##
# Production
##
FROM node:20.10-alpine AS production

# Add a user and set permissions
RUN addgroup -S -g 1001 app && adduser -S -u 1001 -G app app
USER app

WORKDIR /app
COPY --from=builder --chown=app:app /app/.next/standalone ./
COPY --from=builder --chown=app:app /app/public ./public
COPY --from=builder --chown=app:app /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
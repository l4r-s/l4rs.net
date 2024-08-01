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
# RUN mkdir -p /sharp \
#     && yarn add sharp --modules-folder /sharp

WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
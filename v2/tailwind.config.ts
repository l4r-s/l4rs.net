// Import the required modules at the beginning of the file
import { Config } from "tailwindcss";

// Export your configuration as a default export
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'right': '4px 0 8px -2px rgba(0, 0, 0, 0.1)',
      },
      width: {
        "120": "30rem",
        "150": "37.5rem",
      },
      height: {
        "120": "30rem",
        "150": "37.5rem",
      },
      keyframes: {
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "fade-out-10s": "fadeOut 1s ease-out 10s forwards",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
    fontFamily: {
      body: ["'DM Sans'", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          primary: "#0369a1",
          secondary: "#e0bc00",
          accent: "#00ae8d",
          neutral: "#181818",
          "base-100": "#fff",
          info: "#0ea5e9",
          success: "#00985a",
          warning: "#da8900",
          error: "#ef0052",
          "--rounded-box": "0.25rem",
          "--rounded-btn": "0.25rem",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

export default config;

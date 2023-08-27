import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black25: "#252525",
        dark: "#f8be6a",
        light: "#558ec3",
        red: "#FF0000",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1s infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;

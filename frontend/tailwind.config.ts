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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;

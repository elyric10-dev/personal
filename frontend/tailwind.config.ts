import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black25: "#252525",
        theme: "var(--text-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;

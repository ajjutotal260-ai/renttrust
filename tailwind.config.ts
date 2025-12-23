import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F4FD8",
        secondary: "#0FB9B1",
        accent: "#F4A261",
        background: "#F7F9FC",
        border: "#E6EAF2",
        textPrimary: "#1E293B",
        textSecondary: "#64748B",
      },
    },
  },
  plugins: [],
};

export default config;

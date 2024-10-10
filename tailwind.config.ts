import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // 手動でダークモードを切り替える
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        chartColors: {
          primary: '#fff dark:text-white',  // Tailwindテーマカラーに対応
          secondary: '#36a2eb',
        },
      },
    },
  },
  plugins: [],
};

export default config;

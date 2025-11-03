/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Estos nombres CREAN las clases: bg-primary, text-secondary, etc.
        primary: "#8B0000",
        secondary: "#FFD700",
        accent: "#006400",
        background: "#F9F9F9",
        text: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
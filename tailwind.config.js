/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mahjong: {
          turquoise: "#40E0D0", // Main turquoise from logo
          cream: "#FAF3E0", // Cream background
          red: "#FF4500", // Accent red from lanterns
          gold: "#FFD700", // Gold from dragons
          text: "#333333", // Dark text
          "text-light": "#666666", // Secondary text
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./js/**/*.js"
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#5AB9EA",
          blue2: "#4AA8D6",
          green: "#25D366",
          dark: "#0a192f",
        }
      },

      boxShadow: {
        "xl-soft": "0 8px 22px rgba(0,0,0,0.08)",
        "2xl-soft": "0 14px 32px rgba(0,0,0,0.22)",
      },

      animation: {
        glowPulseLight: "glowPulseLight 4s ease-in-out infinite",
        lineFlow: "lineFlow 3s linear infinite",
      },

      keyframes: {
        glowPulseLight: {
          "0%": { boxShadow: "0 0 10px rgba(90,185,234,0.12)" },
          "50%": { boxShadow: "0 0 22px rgba(90,185,234,0.28)" },
          "100%": { boxShadow: "0 0 10px rgba(90,185,234,0.12)" }
        },
        lineFlow: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        }
      }
    }
  },

  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js, ts , tsx , ts}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#318963",
        customBeige: "#F7E1C0",
        borderGreen: "#34996B",
        lightBeige : "#FDFAF5",
        bgGreen : "#ECF4F0"
      },
      width: {
        26: "26rem",
        30: "30rem",
      },
      spacing: {
        53: "12.75rem",
        30: "7.5rem",
        15: "3.75rem",
        81: "20rem",
      },
      keyframes: {
        circle: {
          "0%, 55%, 100%": { transform: "rotate(0deg)" },
          "3%": { transform: "rotate(-95deg)" },
          "5%, 50%": { transform: "rotate(-90deg)" },
          "53%": { transform: "rotate(5deg)" },
        },
        fadeInOutRight: {
          "0%, 45%, 100%": {
            opacity: "0",
            transform: "translateX(-5rem) scale(1)",
          },
          "3%, 40%": { opacity: "1", transform: "translateX(0) scale(1)" },
          "25%": { opacity: "1", transform: "translateX(0) scale(.9)" },
        },
        fadeInOutLeft: {
          "0%, 45%, 100%": {
            opacity: "0",
            transform: "translateX(5rem) scale(1)",
          },
          "3%, 40%": { opacity: "1", transform: "translateX(0) scale(1)" },
          "25%": { opacity: "1", transform: "translateX(0) scale(.9)" },
        },
        fadeInOutRight2: {
          "0%, 50%, 95%, 100%": {
            opacity: "0",
            transform: "translateX(-5rem) scale(1)",
          },
          "53%, 90%": { opacity: "1", transform: "translateX(0) scale(1)" },
          "75%": { opacity: "1", transform: "translateX(0) scale(.9)" },
        },
        fadeInOutLeft2: {
          "0%, 50%, 95%, 100%": {
            opacity: "0",
            transform: "translateX(5rem) scale(1)",
          },
          "53%, 90%": { opacity: "1", transform: "translateX(0) scale(1)" },
          "75%": { opacity: "1", transform: "translateX(0) scale(.9)" },
        },
      },
      animation: {
        circle: "circle 10s linear infinite",
        fadeInOutRight: "fadeInOutRight 10s linear infinite",
        fadeInOutLeft: "fadeInOutLeft 10s linear infinite",
        fadeInOutRight2: "fadeInOutRight2 10s linear infinite",
        fadeInOutLeft2: "fadeInOutLeft2 10s linear infinite",
      },
    },
  },
  plugins: [],
};

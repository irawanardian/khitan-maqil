/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
        script: ['Courgette', 'cursive'],
      },
      animation: {
        wave: "waveMove 8s infinite ease-in-out",
        wave2: "waveMove2 10s infinite ease-in-out",
        "bubble-slow": "floatBubble 8s infinite ease-in-out",
        "bubble-medium": "floatBubble 5s infinite ease-in-out",
        "bubble-fast": "floatBubble 3s infinite ease-in-out",
        twinkle: "sparkle 1.8s infinite alternate",
        drift: "gentleDrift 12s infinite ease-in-out",
        ripple: "ripple 1s ease-out", // ✨ efek riak
      },
      keyframes: {
        waveMove: {
          "0%,100%": { transform: "translateX(0) scaleY(1)" },
          "50%": { transform: "translateX(-25px) scaleY(1.05)" },
        },
        waveMove2: {
          "0%,100%": { transform: "translateX(0) scaleY(1)" },
          "50%": { transform: "translateX(20px) scaleY(0.97)" },
        },
        floatBubble: {
          "0%,100%": { transform: "translateY(0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translateY(-25px) scale(1.1)", opacity: "0.8" },
        },
        sparkle: {
          "0%": { opacity: "0.2", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1.3)" },
        },
        gentleDrift: {
          "0%,100%": { transform: "translate(0,0) rotate(0deg)" },
          "33%": { transform: "translate(8px,-12px) rotate(3deg)" },
          "66%": { transform: "translate(-6px,-8px) rotate(-2deg)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: 0.5 },
          "100%": { transform: "scale(4)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
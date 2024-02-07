export default {
  animation: {
    "fade-in": "fade-in 0.6s ease-in both",
    "fade-out": "fade-out 0.6s ease-out both",
  },
  keyframes: {
    "fade-in": {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    "fade-out": {
      "0%": { opacity: "1" },
      "100%": { opacity: "0" },
    },
  },
};

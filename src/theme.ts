export default {
  animation: {
    "fade-in": "fade-in .6s ease-in both",
    "fade-out": "fade-out .6s ease-out both",
    "blurred-fade-in": "blurred-fade-in .6s ease-in-out both",
    "blurred-fade-out": "blurred-fade-out .6s ease-in-out both",
    "slide-in-top": "slide-in-top .6s ease-out both",
    "slide-out-top": "slide-out-top .6s ease-out both",
    "slide-in-bottom": "slide-in-bottom .6s ease-out both",
    "slide-out-bottom": "slide-out-bottom .6s ease-out both",
    "slide-in-left": "slide-in-left .6s ease-out both",
    "slide-out-left": "slide-out-left .6s ease-out both",
    "slide-in-right": "slide-in-right .6s ease-out both",
    "slide-out-right": "slide-out-right .6s ease-out both",
    "fade-slide-in-top": "fade-slide-in-top .6s ease-out both",
    "fade-slide-out-top": "fade-slide-out-top .6s ease-out both",
    "fade-slide-in-bottom": "fade-slide-in-bottom .6s ease-out both",
    "fade-slide-out-bottom": "fade-slide-out-bottom .6s ease-out both",
    "fade-slide-in-left": "fade-slide-in-left .6s ease-out both",
    "fade-slide-out-left": "fade-slide-out-left .6s ease-out both",
    "fade-slide-in-right": "fade-slide-in-right .6s ease-out both",
    "fade-slide-out-right": "fade-slide-out-right .6s ease-out both",
    "vibrate-x": "vibrate-x .3s linear both",
    "vibrate-y": "vibrate-y .3s linear both",
    "sponge-x": "sponge-x .6s ease-in-out both",
    "sponge-y": "sponge-y .6s ease-in-out both",
    "zoom-in": "zoom-in .6s ease-out both",
    "zoom-out": "zoom-out .4s ease-out both",
    "swing-down": "swing-down .6s ease-in-out both",
    "rotate-45": "rotate-45 .6s linear both",
    "rotate-90": "rotate-90 .6s linear both",
    "rotate-180": "rotate-180 .6s linear both",
    "rotate-360": "rotate-360 .6s linear both",
    jump: "jump .5s ease-in-out both",
    "flip-vertical": "flip-vertical .6s linear both",
    "flip-x-in": "flip-x-in .6s linear both",
    "flip-x-out": "flip-x-out .6s linear both",
    "flip-horizontal": "flip-horizontal .6s linear both",
    "flip-horizontal-reset": "flip-horizontal-reset .6s linear both",
    "roll-r": "roll-r .6s linear both",
    pop: "pop .4s ease both",
    "roll-l": "roll-l .6s linear both",
    "fade-roll-l-in": "fade-roll-l-in .6s linear both",
    "fade-roll-l-out": "fade-roll-l-out .6s linear both",
    like: "like .5s ease both",
    "fade-roll-r-in": "fade-roll-r-in .6s linear both",
    "fade-roll-r-out": "fade-roll-r-out .6s linear both",
    "like-alternative": "like-alternative .5s ease both",
    skew: "skew .6s ease both",
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

    "blurred-fade-in": {
      "0%": {
        filter: "blur(5px)",
        opacity: "0",
      },
      "100%": {
        filter: "blur(0px)",
        opacity: "1",
      },
    },
    "blurred-fade-out": {
      "0%": {
        filter: "blur(0px)",
        opacity: "1",
      },
      "100%": {
        filter: "blur(5px)",
        opacity: "0",
      },
    },

    "slide-in-top": {
      "0%": {
        transform: "translateY(-20%)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },

    "slide-out-top": {
      "0%": {
        transform: "translateY(0)",
      },
      "100%": {
        transform: "translateY(-20%)",
      },
    },

    "slide-in-bottom": {
      "0%": {
        transform: "translateY(20%)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },

    "slide-out-bottom": {
      "0%": {
        transform: "translateY(0)",
      },
      "100%": {
        transform: "translateY(20%)",
      },
    },

    "slide-in-left": {
      "0%": {
        transform: "translateX(-20%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },

    "slide-out-left": {
      "0%": {
        transform: "translateX(0)",
      },
      "100%": {
        transform: "translateX(-20%)",
      },
    },
    "slide-in-right": {
      "0%": {
        transform: "translateX(20%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },

    "slide-out-right": {
      "0%": {
        transform: "translateX(0)",
      },
      "100%": {
        transform: "translateX(20%)",
      },
    },

    "fade-slide-in-top": {
      "0%": {
        opacity: "0",
        transform: "translateY(-20%)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },

    "fade-slide-out-top": {
      "0%": {
        opacity: "1",
        transform: "translateY(0)",
      },
      "100%": {
        opacity: "0",
        transform: "translateY(-20%)",
      },
    },

    "fade-slide-in-bottom": {
      "0%": {
        opacity: "0",
        transform: "translateY(20%)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },

    "fade-slide-out-bottom": {
      "0%": {
        opacity: "1",
        transform: "translateY(0)",
      },
      "100%": {
        opacity: "0",
        transform: "translateY(20%)",
      },
    },

    "fade-slide-in-left": {
      "0%": {
        opacity: "0",
        transform: "translateX(-20%)",
      },
      "100%": {
        opacity: "1",
        transform: "translateX(0)",
      },
    },

    "fade-slide-out-left": {
      "0%": {
        opacity: "1",
        transform: "translateX(0)",
      },
      "100%": {
        opacity: "0",
        transform: "translateX(-20%)",
      },
    },
    "fade-slide-in-right": {
      "0%": {
        opacity: "0",
        transform: "translateX(20%)",
      },
      "100%": {
        opacity: "1",
        transform: "translateX(0)",
      },
    },

    "fade-slide-out-right": {
      "0%": {
        opacity: "1",
        transform: "translateX(0)",
      },
      "100%": {
        opacity: "0",
        transform: "translateX(20%)",
      },
    },

    "vibrate-x": {
      "0%, 100%": {
        transform: "translateX(0)",
      },
      "25%, 65%": {
        transform: "translateX(5%)",
      },
      "40%": {
        transform: "translateX(-5%)",
      },
    },

    "vibrate-y": {
      "0%, 100%": {
        transform: "translateY(0)",
      },
      "25%, 65%": {
        transform: "translateY(5%)",
      },
      "40%": {
        transform: "translateY(-5%)",
      },
    },
    "sponge-x": {
      "0%, 100%": { transform: "scale(1, 1)" },
      "50%": { transform: "scale(1.1, 0.9)" },
    },
    "sponge-y": {
      "0%, 100%": { transform: "scale(1, 1)" },
      "50%": { transform: "scale(0.9, 1.1)" },
    },

    "zoom-in": {
      "0%": { opacity: "0", transform: "scale(1)" },
      "100%": { opacity: "1", transform: "scale(1.1)" },
    },
    "zoom-out": {
      "0%": { opacity: "1", transform: "scale(1.1)" },
      "100%": { opacity: "0", transform: "scale(.5)" },
    },
    "swing-down": {
      "0%": {
        opacity: "0",
        transform: "translateX(-10%) translateY(-20%)",
      },
      "100%": {
        opacity: "1",
        transform: "translateX(0), translateY(0)",
      },
    },
    "rotate-45": {
      "0%": { transform: "rotate(0)" },
      "100%": { transform: "rotate(45deg)" },
    },
    "rotate-90": {
      "0%": { transform: "rotate(0)" },
      "100%": { transform: "rotate(90deg)" },
    },

    "rotate-180": {
      "0%": { transform: "rotate(0)" },
      "100%": { transform: "rotate(180deg)" },
    },

    "rotate-360": {
      "0%": { transform: "rotate(0)" },
      "100%": { transform: "rotate(360deg)" },
    },
    jump: {
      "0%": { transform: "translateY(-20%)" },
      "60%, 100%": { transform: "translateY(0)" },
      "90%": { transform: "translateY(-8%)" },
    },

    pop: {
      "0%": { opacity: "1", transform: "scale(1)" },
      "100%": { opacity: "0", transform: "scale(.5)" },
    },
    "flip-horizontal": {
      "0%": { transform: "rotateY(0deg)" },
      "100%": { transform: "rotateY(180deg)" },
    },
    "flip-x-in": {
      "0%": { transform: "rotateY(180deg)", opacity: "0" },
      "100%": { transform: "rotateY(0deg)", opacity: "1" },
    },
    "flip-horizontal-reset": {
      "0%": { transform: "rotateY(180deg)" },
      "100%": { transform: "rotateY(0deg)" },
    },
    "flip-vertical": {
      "0%": { transform: "rotateX(0deg)" },
      "100%": { transform: "rotateX(180deg)" },
    },
    "flip-x-out": {
      "0%": { transform: "rotateY(0deg)", opacity: "1" },
      "100%": { transform: "rotateY(180deg)", opacity: "0" },
    },

    "roll-l": {
      "0%": { transform: "rotate(0)", opacity: "1" },
      "50%": { transform: "rotate(-45deg) translateY(-10px)" },
      "100%": { transform: "rotate(-180deg) translateX(40px)" },
    },
    "roll-r": {
      "0%": { transform: "rotate(0)", opacity: "1" },
      "50%": { transform: "rotate(45deg) translateY(-30px) " },
      "100%": { transform: "rotate(180deg) translateX(-40px)" },
    },
    "fade-roll-l-in": {
      "100%": { transform: "rotate(0)", opacity: "1" },
      "50%": { transform: "rotate(-45deg) translateY(-30px) " },
      "0%": { transform: "rotate(-180deg) translateX(40px)", opacity: "0" },
    },
    "fade-roll-l-out": {
      "0%": { transform: "rotate(0)", opacity: "1" },
      "50%": { transform: "rotate(-45deg) translateY(-30px)" },
      "100%": { transform: "rotate(-180deg) translateX(40px)", opacity: "0" },
    },

    "fade-roll-r-in": {
      "100%": { transform: "rotate(0)", opacity: "1" },
      "50%": { transform: "rotate(45deg) translateY(-30px)" },
      "0%": { transform: "rotate(180deg) translateX(-40px)", opacity: "0" },
    },
    "fade-roll-r-out": {
      "0%": { transform: "rotate(0)", opacity: "1" },
      "50%": { transform: "rotate(45deg) translateY(-30px)" },
      "100%": { transform: "rotate(180deg) translateX(-40px)", opacity: "0" },
    },

    like: {
      "0%": { transform: "scale(1)" },
      "25%": { transform: "scale(1.1)" },
      "50%": { transform: "scale(1)" },
      "75%": { transform: "scale(0.9)" },
      "100%": { transform: "scale(1)" },
    },
    "like-alternative": {
      "0%": { transform: "scale(1)" },
      "25%": { transform: "scale(0.9)" },
      "50%": { transform: "scale(1.1)" },
      "75%": { transform: "scale(0.9)" },
      "100%": { transform: "scale(1)" },
    },
    skew: {
      "0%": { transform: "rotateX(0deg) skewX(0deg)" },
      "100%": { transform: "rotateX(30deg) skewX(20deg)" },
    },
  },
  animationDelay: {
    none: 0,
    100: "100ms",
    150: "150ms",
    200: "200ms",
    250: "250ms",
    300: "300ms",
    400: "400ms",
    500: "500ms",
    700: "700ms",
    1000: "1000ms",
  },
  animationDuration: {
    none: 0,
    100: "100ms",
    150: "150ms",
    200: "200ms",
    250: "250ms",
    300: "300ms",
    400: "400ms",
    500: "500ms",
    700: "700ms",
    1000: "1000ms",
  },
  animationIterationCount: {
    none: "0",
    once: "1",
    twice: "2",
    infinite: "infinite",
  },
  animationFillMode: {
    none: "none",
    forwards: "forwards",
    backwards: "backwards",
    both: "both",
  },
};

import createPlugin from "tailwindcss/plugin";
import type { Config, PluginAPI, PluginCreator } from "tailwindcss/types/config";
import theme from "./theme";

const pluginCreator: PluginCreator = (api: PluginAPI) => {
  const { theme, matchUtilities, addUtilities } = api;

  const utils = {
    "animate-delay": { css: "animation-delay", values: theme("animationDelay") },
    "animate-duration": { css: "animation-duration", values: theme("animationDuration") },
    "animate-iteration-count": { css: "animation-iteration-count", values: theme("animationIterationCount") },
    "animate-fill-mode": { css: "animation-fill-mode", values: theme("animationFillMode") },
  };

  Object.entries(utils).forEach(([name, { css, values }]) => {
    matchUtilities({ [name]: (value) => ({ [css]: value }) }, { values });
  });

  addUtilities({
    ".animate-ease": {
      "animation-timing-function": "ease",
    },
    ".animate-ease-in": {
      "animation-timing-function": "ease-in",
    },
    ".animate-ease-out": {
      "animation-timing-function": "ease-out",
    },
    ".animate-ease-in-out": {
      "animation-timing-function": "ease-in-out",
    },
    ".animate-linear": {
      "animation-timing-function": "linear",
    },
    ".animate-direction-normal": {
      "animation-direction": "normal",
    },
    ".animate-direction-reverse": {
      "animation-direction": "reverse",
    },
    ".animate-direction-alternate": {
      "animation-direction": "alternate",
    },
    ".animate-direction-alternate-reverse": {
      "animation-direction": "alternate-reverse",
    },
  });
};

const pluginConfig: Partial<Config | undefined> = { theme };
export default createPlugin(pluginCreator, pluginConfig);

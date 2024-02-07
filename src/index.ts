import createPlugin from "tailwindcss/plugin";
<<<<<<< HEAD
import type { Config, PluginAPI, PluginCreator } from "tailwindcss/types/config";
=======
import { Config, PluginAPI, PluginCreator } from "tailwindcss/types/config";
>>>>>>> b8b79af6d109dbc721858673b0a296788dad0b2a
import theme from "./theme";

const pluginCreator: PluginCreator = (api: PluginAPI) => {
  const { theme, matchUtilities, addUtilities } = api;

  const utils = {
    "animate-delay": { css: "animation-delay", values: theme("animationDelay") },
    "animate-duration": { css: "animation-duration", values: theme("animationDuration") },
  };

  Object.entries(utils).forEach(([name, { css, values }]) => {
<<<<<<< HEAD
    matchUtilities({ [name]: (value) => ({ [css]: value }) }, { values });
=======
    matchUtilities({ [name]: (value) => ({ css: value }) }, { values });
>>>>>>> b8b79af6d109dbc721858673b0a296788dad0b2a
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
  });
};

const pluginConfig: Partial<Config | undefined> = { theme };
export default createPlugin(pluginCreator, pluginConfig);

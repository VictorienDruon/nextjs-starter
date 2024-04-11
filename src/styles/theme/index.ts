import { definePreset } from "@pandacss/dev";
import { breakpoints } from "./breakpoints";
import { keyframes } from "./keyframes";
import { semanticTokens } from "./semantic-tokens";
import { tokens } from "./tokens";
import { textStyles } from "./text-styles";
import { conditions } from "./conditions";
import { globalCss } from "./global-css";

export const theme = definePreset({
	theme: {
		breakpoints,
		keyframes,
		semanticTokens,
		tokens,
		textStyles,
	},
	conditions,
	globalCss,
});

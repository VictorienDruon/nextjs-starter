import { breakpoints } from "./breakpoints";
import { keyframes } from "./keyframes";
import { semanticTokens } from "./semantic-tokens";
import { tokens } from "./tokens";
import { textStyles } from "./text-styles";
import { conditions } from "./conditions";
import { globalCss } from "./global-css";

import { definePreset } from "@pandacss/dev";

export default definePreset({
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

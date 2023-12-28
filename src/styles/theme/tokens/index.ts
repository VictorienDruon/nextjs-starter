import { borders } from "./borders";
import { colors } from "./colors";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { spacing } from "./spacing";
import {
	fontSizes,
	fontWeights,
	letterSpacings,
	lineHeights,
	fonts,
} from "./typography";
import { zIndex } from "./z-index";

import { defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
	borders,
	colors,
	radii,
	sizes,
	spacing,
	fontSizes,
	fontWeights,
	letterSpacings,
	lineHeights,
	fonts,
	zIndex,
});

import { defineTokens } from "@pandacss/dev";
import { animations } from "./animations";
import { aspectRatios } from "./aspect-ratios";
import { blurs } from "./blurs";
import { borders } from "./borders";
import { colors } from "./colors";
import { durations } from "./durations";
import { easings } from "./easings";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { sizes } from "./sizes";
import { spacing } from "./spacing";
import {
	fonts,
	fontSizes,
	fontWeights,
	letterSpacings,
	lineHeights,
} from "./typography";
import { zIndex } from "./z-index";

export const tokens = defineTokens({
	animations,
	aspectRatios,
	blurs,
	borders,
	colors,
	durations,
	easings,
	radii,
	shadows,
	sizes,
	spacing,
	fonts,
	fontSizes,
	fontWeights,
	letterSpacings,
	lineHeights,
	zIndex,
});

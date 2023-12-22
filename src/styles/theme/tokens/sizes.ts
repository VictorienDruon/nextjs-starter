import { Tokens } from "@pandacss/dev";
import { spacing } from "./spacing";

const largeSizes: Tokens["sizes"] = {
	xs: { value: "16rem" },
	sm: { value: "20rem" },
	md: { value: "24rem" },
	lg: { value: "32rem" },
	xl: { value: "36rem" },
	"2xl": { value: "42rem" },
	"4xl": { value: "48rem" },
	"6xl": { value: "72rem" },
	"7xl": { value: "80rem" },
	"8xl": { value: "90rem" },
};

export const sizes: Tokens["sizes"] = {
	...spacing,
	...largeSizes,
	full: { value: "100%" },
	min: { value: "min-content" },
	max: { value: "max-content" },
	fit: { value: "fit-content" },
};

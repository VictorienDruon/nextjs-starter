import { GlobalStyleObject } from "@pandacss/dev";

export const globalCss: GlobalStyleObject = {
	html: {
		lineHeight: 1.5,
		MozOsxFontSmoothing: "grayscale",
		textRendering: "optimizeLegibility",
		WebkitFontSmoothing: "antialiased",
		WebkitTextSizeAdjust: "100%",
	},
	body: {
		background: "bg.default",
		color: "fg.default",
		_dark: { colorScheme: "dark" },
		userSelect: "none",
	},
	"*, *::before, *::after": {
		borderColor: "border.default",
		borderStyle: "solid",
		boxSizing: "border-box",
	},
	"*::placeholder": {
		opacity: 1,
		color: "fg.subtle",
	},
	"*::selection": {
		bg: "focusRing",
	},
	".border, .border-t, .border-r, .border-b, .border-l, hr": {
		borderColor: "border.default",
	},
};

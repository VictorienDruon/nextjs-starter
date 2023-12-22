import { cva } from "@styled-system/css";

export const link = cva({
	base: {
		alignItems: "center",
		color: "fg.default",
		cursor: "pointer",
		display: "inline-flex",
		fontWeight: "medium",
		textDecoration: "underline 0.1em transparent",
		textUnderlineOffset: "0.125em",
		transitionDuration: "normal",
		transitionProperty: "text-decoration-color",
		transitionTimingFunction: "default",
		_hover: { textDecorationColor: "accent.10" },
	},
});

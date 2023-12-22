import { cva } from "@styled-system/css";

export const icon = cva({
	base: {
		color: "currentcolor",
		display: "inline-block",
		flexShrink: "0",
		verticalAlign: "middle",
		lineHeight: "1em",
	},
});

import { CssKeyframes } from "@pandacss/dev";

export const keyframes: CssKeyframes = {
	spin: {
		"0%": { transform: "rotate(0deg)" },
		"100%": { transform: "rotate(360deg)" },
	},
	ping: {
		"0%": { transform: "scale(1)", opacity: "1" },
		"75%, 100%": { transform: "scale(2)", opacity: "0" },
	},
	pulse: {
		"0%, 100%": { opacity: "1" },
		"50%": { opacity: ".5" },
	},
	bounce: {
		"0%, 100%": {
			transform: "translateY(-25%)",
			animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
		},
		"50%": {
			transform: "translateY(0)",
			animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
		},
	},
	fadeIn: {
		"0%": { opacity: "0", transform: "translateY(-4px)" },
		"100%": { opacity: "1", transform: "translateY(0)" },
	},
	fadeOut: {
		"0%": { opacity: "1", transform: "translateY(0)" },
		"100%": { opacity: "0", transform: "translateY(-4px)" },
	},
	slideInFromBottom: {
		"0%": { opacity: "0", transform: "translateY(4px)" },
		"100%": { opacity: "1", transform: "translateY(0)" },
	},
	slideOutToBottom: {
		"0%": { opacity: "1", transform: "translateY(0)" },
		"100%": { opacity: "0", transform: "translateY(4px)" },
	},
};

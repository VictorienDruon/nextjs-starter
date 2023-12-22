import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
	stories: [
		"../src/components/ui/*/doc.mdx",
		"../src/components/ui/*/stories.@(ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	webpackFinal: async (config) => {
		if (!config.resolve) return config;
		config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
		config.resolve.alias = {
			...config.resolve.alias,
			"@styled-system": path.resolve(__dirname, "../styled-system"),
			"@/utils": path.resolve(__dirname, "../src/utils"),
		};

		return config;
	},
};
export default config;

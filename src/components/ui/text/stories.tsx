import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";
import { Stack } from "@styled-system/jsx";

const SIZES_OPTIONS = [
	"2xs",
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"2xl",
	"3xl",
	"4xl",
] as const;

const meta: Meta<typeof Text> = {
	title: "UI/Typography/Text",
	component: Text,
	args: { children: "Hello World" },
	parameters: { controls: { include: ["as", "textStyle"] } },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	parameters: { layout: "centered" },
	args: { children: "Hello World" },
};

export const Sizes: Story = {
	parameters: { controls: { exclude: ["size"] } },
	render: (props) => (
		<Stack alignItems={"flex-start"}>
			{SIZES_OPTIONS.map((textStyle) => (
				<Text key={textStyle} textStyle={textStyle} {...props} />
			))}
		</Stack>
	),
};

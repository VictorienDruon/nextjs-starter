import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from ".";
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

const meta: Meta<typeof Heading> = {
	title: "UI/Typography/Heading",
	component: Heading,
	args: { children: "Hello World" },
	parameters: { controls: { include: ["as", "textStyle"] } },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
	parameters: { layout: "centered" },
	args: { as: "h1", children: "Hello World" },
};

export const Sizes: Story = {
	parameters: { controls: { exclude: ["size"] } },
	render: (props) => (
		<Stack alignItems={"flex-start"}>
			{SIZES_OPTIONS.map((textStyle) => (
				<Heading key={textStyle} textStyle={textStyle} {...props} />
			))}
		</Stack>
	),
};

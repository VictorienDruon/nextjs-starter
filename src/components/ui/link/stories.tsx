import type { Meta, StoryObj } from "@storybook/react";
import { Link, type LinkProps } from ".";

const meta: Meta<LinkProps> = {
	title: "UI/Link",
	component: Link,
	parameters: { controls: { include: ["href", "children"] } },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
	parameters: { layout: "centered" },
	args: { children: "Hello World", href: "#" },
};

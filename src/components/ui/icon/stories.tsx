import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from ".";

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  parameters: { controls: { include: ["size", "name", "color"] } },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  parameters: { layout: "centered" },
  args: { size: "32", name: "Activity", color: "accent.10" },
};

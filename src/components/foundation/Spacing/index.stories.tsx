import { Meta, StoryObj } from "@storybook/react";
import Spacing from ".";

const meta = {
  title: "Foundation/Spacing",
  component: Spacing,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

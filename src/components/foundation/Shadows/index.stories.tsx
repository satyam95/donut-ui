import { Meta, StoryObj } from "@storybook/react";
import Shadows from ".";

const meta = {
  title: "Foundation/Shadows",
  component: Shadows,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Shadows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import { Meta, StoryObj } from "@storybook/react";
import Radii from ".";

const meta = {
  title: "Foundation/Radii",
  component: Radii,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radii>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

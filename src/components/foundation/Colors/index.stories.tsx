import { Meta, StoryObj } from "@storybook/react";
import Colors from ".";

const meta = {
  title: "Foundation/Colors",
  component: Colors,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Colors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
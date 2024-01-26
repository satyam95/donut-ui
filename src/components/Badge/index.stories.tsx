import { Meta, StoryObj } from "@storybook/react";
import Badge from ".";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "solid",
    colorScheme: "default",
    size: "base",
    children: "Default",
  },
};

export const Solid: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Badge colorScheme="default" variant="solid">
          Default
        </Badge>
        <Badge colorScheme="green" variant="solid">
          Green
        </Badge>
        <Badge colorScheme="orange" variant="solid">
          Orange
        </Badge>
        <Badge colorScheme="red" variant="solid">
          Red
        </Badge>
        <Badge colorScheme="purple" variant="solid">
          Purple
        </Badge>
      </div>
    );
  },
};

export const Outline: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Badge colorScheme="default" variant="outline">
          Default
        </Badge>
        <Badge colorScheme="green" variant="outline">
          Green
        </Badge>
        <Badge colorScheme="orange" variant="outline">
          Orange
        </Badge>
        <Badge colorScheme="red" variant="outline">
          Red
        </Badge>
        <Badge colorScheme="purple" variant="outline">
          Purple
        </Badge>
      </div>
    );
  },
};

export const Subtle: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Badge colorScheme="default" variant="subtle">
          Default
        </Badge>
        <Badge colorScheme="green" variant="subtle">
          Green
        </Badge>
        <Badge colorScheme="orange" variant="subtle">
          Orange
        </Badge>
        <Badge colorScheme="red" variant="subtle">
          Red
        </Badge>
        <Badge colorScheme="purple" variant="subtle">
          Purple
        </Badge>
      </div>
    );
  },
};

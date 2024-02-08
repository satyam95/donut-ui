import type { Meta, StoryObj } from "@storybook/react";
import { IoIosConstruct } from "react-icons/io";
import IconButton from ".";

const meta = {
  title: "Atoms/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <IoIosConstruct />,
    variant: "solid",
    size: "lg",
    colorScheme: "teal",
    isRounded: false,
  },
};

export const Size: Story = {
  args: {
    icon: <IoIosConstruct />,
    variant: "solid",
    colorScheme: "teal",
    isRounded: false,
  },

  render: (args) => {
    return (
      <div className="flex gap-4 items-center">
        <IconButton {...args} size="lg" />
        <IconButton {...args} size="md" />
        <IconButton {...args} size="sm" />
        <IconButton {...args} size="xs" />
      </div>
    );
  },
};

export const Outline: Story = {
  args: {
    icon: <IoIosConstruct />,
    variant: "outline",
    size: "lg",
    colorScheme: "teal",
    isRounded: false,
  },
};

export const Rounded: Story = {
  args: {
    icon: <IoIosConstruct />,
    variant: "solid",
    size: "lg",
    colorScheme: "teal",
    isRounded: true,
  },
};

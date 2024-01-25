import type { Meta, StoryObj } from "@storybook/react";
import { IoIosConstruct } from "react-icons/io";
import Button from ".";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Loading: Story = {
  args: {
    children: "Button",
    isLoading: true,
  },
};

export const LeftIcon: Story = {
  args: {
    children: "Button",
    leftIcon: <IoIosConstruct />
  },
};

export const RightIcon: Story = {
  args: {
    children: "Button",
    rightIcon: <IoIosConstruct />
  },
};
import { Meta, StoryObj } from "@storybook/react";
import Progress from ".";

const meta = {
  title: "Atoms/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 80,
    hasStripe: false,
    showPercent: false,
    size: "md",
    colorScheme: "green",
  },
  render: (args) => {
    return (
      <div className="w-96">
        <Progress {...args} />
      </div>
    );
  },
};

export const WithStripe: Story = {
  args: {
    value: 80,
    hasStripe: true,
    showPercent: false,
    size: "md",
    colorScheme: "green",
  },
  render: (args) => {
    return (
      <div className="w-96">
        <Progress {...args} />
      </div>
    );
  },
};

export const WithPercent: Story = {
  args: {
    value: 80,
    hasStripe: false,
    showPercent: true,
    size: "md",
    colorScheme: "green",
  },
  render: (args) => {
    return (
      <div className="w-96">
        <Progress {...args} />
      </div>
    );
  },
};

export const Size: Story = {
  args: {
    value: 80,
    hasStripe: false,
    showPercent: false,
    colorScheme: "green",
  },
  render: (args) => {
    return (
      <div className="w-96 flex flex-col gap-4">
        <Progress {...args} size="xs" />
        <Progress {...args} size="sm" />
        <Progress {...args} size="md" />
        <Progress {...args} size="lg" />
      </div>
    );
  },
};

export const colorScheme: Story = {
  args: {
    value: 80,
    hasStripe: false,
    size: "sm",
    showPercent: false,
  },
  render: (args) => {
    return (
      <div className="w-96 flex flex-col gap-4">
        <Progress {...args} colorScheme="red" />
        <Progress {...args} colorScheme="orange" />
        <Progress {...args} colorScheme="yellow" />
        <Progress {...args} colorScheme="green" />
        <Progress {...args} colorScheme="teal" />
        <Progress {...args} colorScheme="blue" />
        <Progress {...args} colorScheme="cyan" />
        <Progress {...args} colorScheme="purple" />
        <Progress {...args} colorScheme="pink" />
      </div>
    );
  },
};

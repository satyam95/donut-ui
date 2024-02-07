import { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder text here...",
    variant: "outline",
    size: "md",
  },
  render: (args) => (
    <div className="min-w-96">
      <Input {...args} />
    </div>
  ),
};

export const WithSize: Story = {
  args: {
    placeholder: "Placeholder text here...",
    variant: "outline",
  },
  render: (args) => (
    <div className="flex flex-col gap-3 min-w-96">
      <Input {...args} size="xs" />
      <Input {...args} size="sm" />
      <Input {...args} size="md" />
      <Input {...args} size="lg" />
    </div>
  ),
};

export const WithVariant: Story = {
  args: {
    placeholder: "Placeholder text here...",
    size: "md"
  },
  render: (args) => (
    <div className="flex flex-col gap-3 min-w-96">
      <Input {...args} variant="outline" />
      <Input {...args} variant="filled" />
      <Input {...args} variant="flushed" />
      <Input {...args} variant="unstyled" />
    </div>
  ),
};

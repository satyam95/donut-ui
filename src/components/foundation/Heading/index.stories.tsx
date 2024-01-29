import { Meta, StoryObj } from "@storybook/react";
import Heading from ".";

const meta = {
  title: "Foundation/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "xl",
    colorScheme: "default",
    children: "This is default heading."
  },
};

export const WithSize: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-2">
        <Heading size="4xl" colorScheme="default">
          This is a 4xl Heading
        </Heading>
        <Heading size="3xl" colorScheme="default">
          This is a 3xl Heading
        </Heading>
        <Heading size="2xl" colorScheme="default">
          This is a 2xl Heading
        </Heading>
        <Heading size="xl" colorScheme="default">
          This is a xl Heading
        </Heading>
        <Heading size="lg" colorScheme="default">
          This is a lg Heading
        </Heading>
        <Heading size="md" colorScheme="default">
          This is a md Heading
        </Heading>
        <Heading size="sm" colorScheme="default">
          This is a sm Heading
        </Heading>
        <Heading size="xs" colorScheme="default">
          This is a xs Heading
        </Heading>
      </div>
    );
  },
};

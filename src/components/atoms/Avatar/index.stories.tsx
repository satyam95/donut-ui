import { Meta, StoryObj } from "@storybook/react";
import Avatar from ".";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://bit.ly/sage-adebayo",
    name: "Segun Adebayo",
    size: "2xl",
    isOnline: true,
    badgePlacement: "top-end",
    rounded: true,
  },
};

export const WithSize: Story = {
  render: () => {
    return (
      <div className="flex items-center gap-2">
        <Avatar
          size="xs"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
        />
        <Avatar
          size="sm"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
        />
        <Avatar
          size="md"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
        />
        <Avatar
          size="lg"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
        />
        <Avatar
          size="xl"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
        />
        <Avatar
          size="2xl"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
        />
      </div>
    );
  },
};

export const IsOnline: Story = {
  render: () => {
    return (
      <div className="flex items-center gap-2">
        <Avatar
          size="xs"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          isOnline
        />
        <Avatar
          size="sm"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          isOnline
        />
        <Avatar
          size="md"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          isOnline
        />
        <Avatar
          size="lg"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          isOnline
        />
        <Avatar
          size="xl"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          isOnline
        />
        <Avatar
          size="2xl"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          isOnline
        />
      </div>
    );
  },
};

export const Squared: Story = {
  render: () => {
    return (
      <div className="flex items-center gap-2">
        <Avatar
          size="xs"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          rounded={false}
        />
        <Avatar
          size="sm"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          rounded={false}
        />
        <Avatar
          size="md"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          rounded={false}
        />
        <Avatar
          size="lg"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          rounded={false}
        />
        <Avatar
          size="xl"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          rounded={false}
        />
        <Avatar
          size="2xl"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
          rounded={false}
        />
      </div>
    );
  },
};

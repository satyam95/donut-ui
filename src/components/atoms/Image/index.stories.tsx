import { Meta, StoryObj } from "@storybook/react";
import Image from ".";

const meta = {
  title: "Atoms/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    src: "https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg",
    alt: "Dummy image from pexels",
    loading: "lazy",
    height: "300px",
    width: "600px",
  },
  render: (args) => {
    return <Image {...args} />;
  },
};

import { Meta, StoryObj } from "@storybook/react";
import Text from ".";

const meta = {
  title: "Foundation/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "p",
    fontSize: "xl",
    children: "This is a default text.",
  },
};

export const FontSize: Story = {
  render: () => {
    return (
      <>
        <Text fontSize="6xl">This is a 6xl Text</Text>
        <Text fontSize="5xl">This is a 5xl Text</Text>
        <Text fontSize="4xl">This is a 4xl Text</Text>
        <Text fontSize="3xl">This is a 3xl Text</Text>
        <Text fontSize="2xl">This is a 2xl Text</Text>
        <Text fontSize="xl">This is a xl Text</Text>
        <Text fontSize="lg">This is a lg Text</Text>
        <Text fontSize="md">This is a md Text</Text>
        <Text fontSize="sm">This is a sm Text</Text>
        <Text fontSize="xs">This is a xs Text</Text>
      </>
    );
  },
};

export const TextElements: Story = {
  render: () => {
    return (
      <div className="flex flex-col">
        <Text as="b">Bold</Text>
        <Text as="i">Italic</Text>
        <Text as="u">Underline</Text>
        <Text as="abbr">I18N</Text>
        <Text as="cite">Citation</Text>
        <Text as="del">Deleted</Text>
        <Text as="em">Emphasis</Text>
        <Text as="ins">Inserted</Text>
        <Text as="kbd">Ctrl + C</Text>
        <Text as="mark">Highlighted</Text>
        <Text as="s">Strikethrough</Text>
        <Text as="samp">Sample</Text>
        <Text as="sub">sub</Text>
        <br />
        <Text as="sup">sup</Text>
      </div>
    );
  },
};

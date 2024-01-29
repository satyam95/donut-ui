import type { Meta, StoryObj } from "@storybook/react";
import { IoIosConstruct } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
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

export const Default: Story = {
  args: {
    variant: "solid",
    size: "md",
    colorScheme: "blue",
    children: "Default",
  },
};

export const Solid: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
        <Button variant="solid" colorScheme="gray" size="lg">
          Button
        </Button>
        <Button variant="solid" colorScheme="gray" size="md">
          Button
        </Button>
        <Button variant="solid" colorScheme="gray" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="gray" size="xs">
          Button
        </Button>
        <Button variant="solid" colorScheme="red" size="lg">
          Button
        </Button>
        <Button variant="solid" colorScheme="red" size="md">
          Button
        </Button>
        <Button variant="solid" colorScheme="red" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="red" size="xs">
          Button
        </Button>
        <Button variant="solid" colorScheme="orange" size="lg">
          Button
        </Button>
        <Button variant="solid" colorScheme="orange" size="md">
          Button
        </Button>
        <Button variant="solid" colorScheme="orange" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="orange" size="xs">
          Button
        </Button>
        <Button variant="solid" colorScheme="yellow" size="lg">
          Button
        </Button>
        <Button variant="solid" colorScheme="yellow" size="md">
          Button
        </Button>
        <Button variant="solid" colorScheme="yellow" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="yellow" size="xs">
          Button
        </Button>
        <Button variant="solid" colorScheme="green" size="lg">
          Button
        </Button>
        <Button variant="solid" colorScheme="green" size="md">
          Button
        </Button>
        <Button variant="solid" colorScheme="green" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="green" size="xs">
          Button
        </Button>
        <Button variant="solid" colorScheme="teal" size="lg">
          Button
        </Button>
        <Button variant="solid" colorScheme="teal" size="md">
          Button
        </Button>
        <Button variant="solid" colorScheme="teal" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="teal" size="xs">
          Button
        </Button>
        <Button variant="solid" colorScheme="blue" size="lg">
          Button
        </Button>
        <Button variant="solid" colorScheme="blue" size="md">
          Button
        </Button>
        <Button variant="solid" colorScheme="blue" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="blue" size="xs">
          Button
        </Button>
        <Button variant="solid" colorScheme="cyan" size="lg">
          Button
        </Button>
        <Button variant="solid" colorScheme="cyan" size="md">
          Button
        </Button>
        <Button variant="solid" colorScheme="cyan" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="cyan" size="xs">
          Button
        </Button>
        <Button variant="solid" colorScheme="purple" size="lg">
          Button
        </Button>
        <Button variant="solid" colorScheme="purple" size="md">
          Button
        </Button>
        <Button variant="solid" colorScheme="purple" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="purple" size="xs">
          Button
        </Button>
        <Button variant="solid" colorScheme="pink" size="lg">
          Button
        </Button>
        <Button variant="solid" colorScheme="pink" size="md">
          Button
        </Button>
        <Button variant="solid" colorScheme="pink" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="pink" size="xs">
          Button
        </Button>
      </div>
    );
  },
};

export const Outline: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
        <Button variant="outline" colorScheme="gray" size="lg">
          Button
        </Button>
        <Button variant="outline" colorScheme="gray" size="md">
          Button
        </Button>
        <Button variant="outline" colorScheme="gray" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="gray" size="xs">
          Button
        </Button>
        <Button variant="outline" colorScheme="red" size="lg">
          Button
        </Button>
        <Button variant="outline" colorScheme="red" size="md">
          Button
        </Button>
        <Button variant="outline" colorScheme="red" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="red" size="xs">
          Button
        </Button>
        <Button variant="outline" colorScheme="orange" size="lg">
          Button
        </Button>
        <Button variant="outline" colorScheme="orange" size="md">
          Button
        </Button>
        <Button variant="outline" colorScheme="orange" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="orange" size="xs">
          Button
        </Button>
        <Button variant="outline" colorScheme="yellow" size="lg">
          Button
        </Button>
        <Button variant="outline" colorScheme="yellow" size="md">
          Button
        </Button>
        <Button variant="outline" colorScheme="yellow" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="yellow" size="xs">
          Button
        </Button>
        <Button variant="outline" colorScheme="green" size="lg">
          Button
        </Button>
        <Button variant="outline" colorScheme="green" size="md">
          Button
        </Button>
        <Button variant="outline" colorScheme="green" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="green" size="xs">
          Button
        </Button>
        <Button variant="outline" colorScheme="teal" size="lg">
          Button
        </Button>
        <Button variant="outline" colorScheme="teal" size="md">
          Button
        </Button>
        <Button variant="outline" colorScheme="teal" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="teal" size="xs">
          Button
        </Button>
        <Button variant="outline" colorScheme="blue" size="lg">
          Button
        </Button>
        <Button variant="outline" colorScheme="blue" size="md">
          Button
        </Button>
        <Button variant="outline" colorScheme="blue" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="blue" size="xs">
          Button
        </Button>
        <Button variant="outline" colorScheme="cyan" size="lg">
          Button
        </Button>
        <Button variant="outline" colorScheme="cyan" size="md">
          Button
        </Button>
        <Button variant="outline" colorScheme="cyan" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="cyan" size="xs">
          Button
        </Button>
        <Button variant="outline" colorScheme="purple" size="lg">
          Button
        </Button>
        <Button variant="outline" colorScheme="purple" size="md">
          Button
        </Button>
        <Button variant="outline" colorScheme="purple" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="purple" size="xs">
          Button
        </Button>
        <Button variant="outline" colorScheme="pink" size="lg">
          Button
        </Button>
        <Button variant="outline" colorScheme="pink" size="md">
          Button
        </Button>
        <Button variant="outline" colorScheme="pink" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="pink" size="xs">
          Button
        </Button>
      </div>
    );
  },
};

export const Ghost: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
        <Button variant="ghost" colorScheme="gray" size="lg">
          Button
        </Button>
        <Button variant="ghost" colorScheme="gray" size="md">
          Button
        </Button>
        <Button variant="ghost" colorScheme="gray" size="sm">
          Button
        </Button>
        <Button variant="ghost" colorScheme="gray" size="xs">
          Button
        </Button>
        <Button variant="ghost" colorScheme="red" size="lg">
          Button
        </Button>
        <Button variant="ghost" colorScheme="red" size="md">
          Button
        </Button>
        <Button variant="ghost" colorScheme="red" size="sm">
          Button
        </Button>
        <Button variant="ghost" colorScheme="red" size="xs">
          Button
        </Button>
        <Button variant="ghost" colorScheme="orange" size="lg">
          Button
        </Button>
        <Button variant="ghost" colorScheme="orange" size="md">
          Button
        </Button>
        <Button variant="ghost" colorScheme="orange" size="sm">
          Button
        </Button>
        <Button variant="ghost" colorScheme="orange" size="xs">
          Button
        </Button>
        <Button variant="ghost" colorScheme="yellow" size="lg">
          Button
        </Button>
        <Button variant="ghost" colorScheme="yellow" size="md">
          Button
        </Button>
        <Button variant="ghost" colorScheme="yellow" size="sm">
          Button
        </Button>
        <Button variant="ghost" colorScheme="yellow" size="xs">
          Button
        </Button>
        <Button variant="ghost" colorScheme="green" size="lg">
          Button
        </Button>
        <Button variant="ghost" colorScheme="green" size="md">
          Button
        </Button>
        <Button variant="ghost" colorScheme="green" size="sm">
          Button
        </Button>
        <Button variant="ghost" colorScheme="green" size="xs">
          Button
        </Button>
        <Button variant="ghost" colorScheme="teal" size="lg">
          Button
        </Button>
        <Button variant="ghost" colorScheme="teal" size="md">
          Button
        </Button>
        <Button variant="ghost" colorScheme="teal" size="sm">
          Button
        </Button>
        <Button variant="ghost" colorScheme="teal" size="xs">
          Button
        </Button>
        <Button variant="ghost" colorScheme="blue" size="lg">
          Button
        </Button>
        <Button variant="ghost" colorScheme="blue" size="md">
          Button
        </Button>
        <Button variant="ghost" colorScheme="blue" size="sm">
          Button
        </Button>
        <Button variant="ghost" colorScheme="blue" size="xs">
          Button
        </Button>
        <Button variant="ghost" colorScheme="cyan" size="lg">
          Button
        </Button>
        <Button variant="ghost" colorScheme="cyan" size="md">
          Button
        </Button>
        <Button variant="ghost" colorScheme="cyan" size="sm">
          Button
        </Button>
        <Button variant="ghost" colorScheme="cyan" size="xs">
          Button
        </Button>
        <Button variant="ghost" colorScheme="purple" size="lg">
          Button
        </Button>
        <Button variant="ghost" colorScheme="purple" size="md">
          Button
        </Button>
        <Button variant="ghost" colorScheme="purple" size="sm">
          Button
        </Button>
        <Button variant="ghost" colorScheme="purple" size="xs">
          Button
        </Button>
        <Button variant="ghost" colorScheme="pink" size="lg">
          Button
        </Button>
        <Button variant="ghost" colorScheme="pink" size="md">
          Button
        </Button>
        <Button variant="ghost" colorScheme="pink" size="sm">
          Button
        </Button>
        <Button variant="ghost" colorScheme="pink" size="xs">
          Button
        </Button>
      </div>
    );
  },
};

export const Link: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
        <Button variant="link" colorScheme="gray" size="lg">
          Button
        </Button>
        <Button variant="link" colorScheme="gray" size="md">
          Button
        </Button>
        <Button variant="link" colorScheme="gray" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="gray" size="xs">
          Button
        </Button>
        <Button variant="link" colorScheme="red" size="lg">
          Button
        </Button>
        <Button variant="link" colorScheme="red" size="md">
          Button
        </Button>
        <Button variant="link" colorScheme="red" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="red" size="xs">
          Button
        </Button>
        <Button variant="link" colorScheme="orange" size="lg">
          Button
        </Button>
        <Button variant="link" colorScheme="orange" size="md">
          Button
        </Button>
        <Button variant="link" colorScheme="orange" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="orange" size="xs">
          Button
        </Button>
        <Button variant="link" colorScheme="yellow" size="lg">
          Button
        </Button>
        <Button variant="link" colorScheme="yellow" size="md">
          Button
        </Button>
        <Button variant="link" colorScheme="yellow" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="yellow" size="xs">
          Button
        </Button>
        <Button variant="link" colorScheme="green" size="lg">
          Button
        </Button>
        <Button variant="link" colorScheme="green" size="md">
          Button
        </Button>
        <Button variant="link" colorScheme="green" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="green" size="xs">
          Button
        </Button>
        <Button variant="link" colorScheme="teal" size="lg">
          Button
        </Button>
        <Button variant="link" colorScheme="teal" size="md">
          Button
        </Button>
        <Button variant="link" colorScheme="teal" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="teal" size="xs">
          Button
        </Button>
        <Button variant="link" colorScheme="blue" size="lg">
          Button
        </Button>
        <Button variant="link" colorScheme="blue" size="md">
          Button
        </Button>
        <Button variant="link" colorScheme="blue" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="blue" size="xs">
          Button
        </Button>
        <Button variant="link" colorScheme="cyan" size="lg">
          Button
        </Button>
        <Button variant="link" colorScheme="cyan" size="md">
          Button
        </Button>
        <Button variant="link" colorScheme="cyan" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="cyan" size="xs">
          Button
        </Button>
        <Button variant="link" colorScheme="purple" size="lg">
          Button
        </Button>
        <Button variant="link" colorScheme="purple" size="md">
          Button
        </Button>
        <Button variant="link" colorScheme="purple" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="purple" size="xs">
          Button
        </Button>
        <Button variant="link" colorScheme="pink" size="lg">
          Button
        </Button>
        <Button variant="link" colorScheme="pink" size="md">
          Button
        </Button>
        <Button variant="link" colorScheme="pink" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="pink" size="xs">
          Button
        </Button>
      </div>
    );
  },
};

export const Loading: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
        <Button isLoading={true} variant="solid" colorScheme="gray" size="lg">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="gray" size="md">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="gray" size="sm">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="gray" size="xs">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="red" size="lg">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="red" size="md">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="red" size="sm">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="red" size="xs">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="orange" size="lg">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="orange" size="md">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="orange" size="sm">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="orange" size="xs">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="yellow" size="lg">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="yellow" size="md">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="yellow" size="sm">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="yellow" size="xs">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="green" size="lg">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="green" size="md">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="green" size="sm">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="green" size="xs">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="teal" size="lg">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="teal" size="md">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="teal" size="sm">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="teal" size="xs">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="blue" size="lg">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="blue" size="md">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="blue" size="sm">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="blue" size="xs">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="cyan" size="lg">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="cyan" size="md">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="cyan" size="sm">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="cyan" size="xs">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="purple" size="lg">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="purple" size="md">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="purple" size="sm">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="purple" size="xs">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="pink" size="lg">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="pink" size="md">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="pink" size="sm">
          Button
        </Button>
        <Button isLoading={true} variant="solid" colorScheme="pink" size="xs">
          Button
        </Button>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
        <Button disabled variant="solid" colorScheme="gray" size="lg">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="gray" size="md">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="gray" size="sm">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="gray" size="xs">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="red" size="lg">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="red" size="md">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="red" size="sm">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="red" size="xs">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="orange" size="lg">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="orange" size="md">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="orange" size="sm">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="orange" size="xs">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="yellow" size="lg">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="yellow" size="md">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="yellow" size="sm">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="yellow" size="xs">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="green" size="lg">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="green" size="md">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="green" size="sm">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="green" size="xs">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="teal" size="lg">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="teal" size="md">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="teal" size="sm">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="teal" size="xs">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="blue" size="lg">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="blue" size="md">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="blue" size="sm">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="blue" size="xs">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="cyan" size="lg">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="cyan" size="md">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="cyan" size="sm">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="cyan" size="xs">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="purple" size="lg">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="purple" size="md">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="purple" size="sm">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="purple" size="xs">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="pink" size="lg">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="pink" size="md">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="pink" size="sm">
          Button
        </Button>
        <Button disabled variant="solid" colorScheme="pink" size="xs">
          Button
        </Button>
      </div>
    );
  },
};

export const WithLeftIcon: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="gray"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="gray"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="gray"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="gray"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="red"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="red"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="red"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="red"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="orange"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="orange"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="orange"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="orange"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="yellow"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="yellow"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="yellow"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="yellow"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="green"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="green"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="green"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="green"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="teal"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="teal"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="teal"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="teal"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="blue"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="blue"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="blue"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="blue"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="cyan"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="cyan"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="cyan"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="cyan"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="purple"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="purple"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="purple"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="purple"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="pink"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="pink"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="pink"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="pink"
          size="xs"
        >
          Button
        </Button>
      </div>
    );
  },
};

export const WithRightIcon: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="gray"
          size="lg"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="gray"
          size="md"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="gray"
          size="sm"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="gray"
          size="xs"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="red"
          size="lg"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="red"
          size="md"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="red"
          size="sm"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="red"
          size="xs"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="orange"
          size="lg"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="orange"
          size="md"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="orange"
          size="sm"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="orange"
          size="xs"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="yellow"
          size="lg"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="yellow"
          size="md"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="yellow"
          size="sm"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="yellow"
          size="xs"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="green"
          size="lg"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="green"
          size="md"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="green"
          size="sm"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="green"
          size="xs"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="teal"
          size="lg"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="teal"
          size="md"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="teal"
          size="sm"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="teal"
          size="xs"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="blue"
          size="lg"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="blue"
          size="md"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="blue"
          size="sm"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="blue"
          size="xs"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="cyan"
          size="lg"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="cyan"
          size="md"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="cyan"
          size="sm"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="cyan"
          size="xs"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="purple"
          size="lg"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="purple"
          size="md"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="purple"
          size="sm"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="purple"
          size="xs"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="pink"
          size="lg"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="pink"
          size="md"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="pink"
          size="sm"
        >
          Button
        </Button>
        <Button
          rightIcon={<IoIosConstruct />}
          variant="solid"
          colorScheme="pink"
          size="xs"
        >
          Button
        </Button>
      </div>
    );
  },
};

export const BothSideIcon: Story = {
  render: () => {
    return (
      <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="gray"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="gray"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="gray"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="gray"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="red"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="red"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="red"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="red"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="orange"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="orange"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="orange"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="orange"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="yellow"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="yellow"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="yellow"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="yellow"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="green"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="green"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="green"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="green"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="teal"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="teal"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="teal"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="teal"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="blue"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="blue"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="blue"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="blue"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="cyan"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="cyan"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="cyan"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="cyan"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="purple"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="purple"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="purple"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="purple"
          size="xs"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="pink"
          size="lg"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="pink"
          size="md"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="pink"
          size="sm"
        >
          Button
        </Button>
        <Button
          leftIcon={<IoIosConstruct />}
          rightIcon={<IoIosArrowRoundForward />}
          variant="solid"
          colorScheme="pink"
          size="xs"
        >
          Button
        </Button>
      </div>
    );
  },
};

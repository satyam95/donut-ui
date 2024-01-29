import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../../utils/cn";

const textStyles = cva(["font-normal"], {
  variants: {
    fontSize: {
      "6xl": "text-6xl leading-normal",
      "5xl": "text-5xl leading-normal",
      "4xl": "text-4xl leading-normal",
      "3xl": "text-3xl leading-normal",
      "2xl": "text-2xl leading-normal",
      xl: "text-xl leading-normal",
      lg: "text-lg leading-normal",
      md: "text-base leading-normal",
      sm: "text-sm leading-normal",
      xs: "text-xs leading-normal",
    },
    colorScheme: {
      default: "text-black",
      gray: "text-gray-500",
      red: "text-red-500",
      orange: "text-orange-500",
      yellow: "text-yellow-500",
      green: "text-green-500",
      teal: "text-teal-500",
      blue: "text-blue-500",
      cyan: "text-cyan-500",
      purple: "text-purple-500",
      pink: "text-pink-500",
    },
  },
});

type TextProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textStyles> & {
    as?:
      | "b"
      | "i"
      | "u"
      | "abbr"
      | "cite"
      | "del"
      | "em"
      | "ins"
      | "kbd"
      | "mark"
      | "s"
      | "samp"
      | "sub"
      | "sup"
      | "p";
  };

const Text = ({ as = "p", colorScheme, fontSize, children, className }: TextProps) => {
  const TextTag = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(as, props, children);

  return (
    <TextTag className={cn(textStyles({ colorScheme, fontSize }), className)}>
      {children}
    </TextTag>
  );
};

export default Text;

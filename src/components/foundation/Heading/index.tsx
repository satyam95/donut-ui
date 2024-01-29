import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import React from "react";

const headingStyles = cva(["font-bold"], {
  variants: {
    size: {
      "4xl": "text-6xl md:text-7xl leading-none",
      "3xl": "text-5xl md:text-6xl leading-none",
      "2xl": "text-4xl md:text-5xl leading-none",
      xl: "text-3xl md:text-4xl leading-none",
      lg: "text-2xl md:text-3xl leading-none",
      md: "text-xl leading-none",
      sm: "text-base leading-none",
      xs: "text-sm leading-none",
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
  defaultVariants: {
    size: "xl",
    colorScheme: "default",
  },
});

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingStyles> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

const Heading = ({
  as = "h2",
  size,
  colorScheme,
  className,
  children,
}: HeadingProps) => {
  const HeadTag = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(as, props, children);
  return (
    <HeadTag className={cn(headingStyles({ size, colorScheme }), className)}>
      {children}
    </HeadTag>
  );
};

export default Heading;

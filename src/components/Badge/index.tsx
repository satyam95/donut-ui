import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { ComponentProps } from "react";

const badgeStyles = cva(["rounded-sm", "p-1", "font-bold", "uppercase"], {
  variants: {
    variant: {
      solid: "text-white",
      outline: "border-2",
      subtle: "",
    },
    size: {
      xs: "text-xs leading-none",
      sm: "text-sm leading-none",
      base: "text-base leading-none",
      lg: "text-lg leading-none",
    },
    colorScheme: {
      default: "",
      blue: "",
      teal: "",
      green: "",
      red: "",
      purple: "",
      pink: "",
      orange: "",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "default",
      className: "bg-gray-500",
    },
    {
      variant: "outline",
      colorScheme: "default",
      className: "border-gray-500 text-gray-600",
    },
    {
      variant: "subtle",
      colorScheme: "default",
      className: "text-gray-800 bg-gray-100",
    },
    {
      variant: "solid",
      colorScheme: "green",
      className: "bg-green-500",
    },
    {
      variant: "outline",
      colorScheme: "green",
      className: "text-green-600 border-green-500",
    },
    {
      variant: "subtle",
      colorScheme: "green",
      className: "text-green-800 bg-green-100",
    },
    {
      variant: "solid",
      colorScheme: "orange",
      className: "bg-orange-500",
    },
    {
      variant: "outline",
      colorScheme: "orange",
      className: "text-orange-600 border-orange-500",
    },
    {
      variant: "subtle",
      colorScheme: "orange",
      className: "text-orange-800 bg-orange-100",
    },
    {
      variant: "solid",
      colorScheme: "red",
      className: "bg-red-500",
    },
    {
      variant: "outline",
      colorScheme: "red",
      className: "text-red-600 border-red-500",
    },
    {
      variant: "subtle",
      colorScheme: "red",
      className: "text-red-800 bg-red-100",
    },
    {
      variant: "solid",
      colorScheme: "purple",
      className: "bg-purple-500",
    },
    {
      variant: "outline",
      colorScheme: "purple",
      className: "text-purple-600 border-purple-500",
    },
    {
      variant: "subtle",
      colorScheme: "purple",
      className: "text-purple-800 bg-purple-100",
    },
    {
      variant: "solid",
      colorScheme: "blue",
      className: "bg-blue-500",
    },
    {
      variant: "outline",
      colorScheme: "blue",
      className: "text-blue-600 border-blue-500",
    },
    {
      variant: "subtle",
      colorScheme: "blue",
      className: "text-blue-800 bg-blue-100",
    },
    {
      variant: "solid",
      colorScheme: "teal",
      className: "bg-teal-500",
    },
    {
      variant: "outline",
      colorScheme: "teal",
      className: "text-teal-600 border-teal-500",
    },
    {
      variant: "subtle",
      colorScheme: "teal",
      className: "text-teal-800 bg-teal-100",
    },
    {
      variant: "solid",
      colorScheme: "pink",
      className: "bg-pink-500",
    },
    {
      variant: "outline",
      colorScheme: "pink",
      className: "text-pink-600 border-pink-500",
    },
    {
      variant: "subtle",
      colorScheme: "pink",
      className: "text-pink-800 bg-pink-100",
    },
  ],
  defaultVariants: {
    variant: "solid",
    colorScheme: "default",
    size: "base",
  },
});

type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeStyles> & {
    variant?: string;
    size?: string;
    colorScheme?: string;
  };

const Badge = ({
  variant,
  size,
  colorScheme,
  className,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(badgeStyles({ variant, size, colorScheme, className }))}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;

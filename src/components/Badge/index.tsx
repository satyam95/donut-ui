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
      green: "",
      orange: "",
      red: "",
      purple: "",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "default",
      className: "bg-slate-500",
    },
    {
      variant: "outline",
      colorScheme: "default",
      className: "border-slate-500 text-slate-600",
    },
    {
      variant: "subtle",
      colorScheme: "default",
      className: "text-gray-900 bg-slate-100",
    },
    {
      variant: "solid",
      colorScheme: "green",
      className: "bg-teal-900",
    },
    {
      variant: "outline",
      colorScheme: "green",
      className: "text-teal-900 border-teal-900",
    },
    {
      variant: "subtle",
      colorScheme: "green",
      className: "text-teal-900 bg-green-200",
    },
    {
      variant: "solid",
      colorScheme: "orange",
      className: "bg-yellow-900",
    },
    {
      variant: "outline",
      colorScheme: "orange",
      className: "text-yellow-900 border-yellow-900",
    },
    {
      variant: "subtle",
      colorScheme: "orange",
      className: "text-yellow-900 bg-amber-100",
    },
    {
      variant: "solid",
      colorScheme: "red",
      className: "bg-red-900",
    },
    {
      variant: "outline",
      colorScheme: "red",
      className: "text-red-900 border-red-900",
    },
    {
      variant: "subtle",
      colorScheme: "red",
      className: "text-red-900 bg-rose-200",
    },
    {
      variant: "solid",
      colorScheme: "purple",
      className: "bg-indigo-900",
    },
    {
      variant: "outline",
      colorScheme: "purple",
      className: "text-indigo-900 border-indigo-900",
    },
    {
      variant: "subtle",
      colorScheme: "purple",
      className: "text-indigo-900 bg-purple-200",
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

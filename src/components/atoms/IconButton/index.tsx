import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../utils/cn";

const iconButtonStyles = cva(["flex justify-center items-center"], {
  variants: {
    variant: {
      solid: "text-white",
      outline: "border",
    },
    size: {
      xs: "w-6 h-6 text-sm",
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-base",
      lg: "w-12 h-12 text-lg",
    },
    colorScheme: {
      gray: "",
      red: "",
      orange: "",
      yellow: "",
      green: "",
      teal: "",
      blue: "",
      cyan: "",
      purple: "",
      pink: "",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "gray",
      className: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    },
    {
      variant: "outline",
      colorScheme: "gray",
      className: "border-gray-200 hover:bg-gray-100",
    },
    {
      variant: "solid",
      colorScheme: "red",
      className: "bg-red-500 hover:bg-red-600",
    },
    {
      variant: "outline",
      colorScheme: "red",
      className: "border-red-500 text-red-500 hover:bg-red-50",
    },
    {
      variant: "solid",
      colorScheme: "orange",
      className: "bg-orange-500 hover:bg-orange-600",
    },
    {
      variant: "outline",
      colorScheme: "orange",
      className: "border-orange-500 text-orange-500 hover:bg-orange-50",
    },
    {
      variant: "solid",
      colorScheme: "yellow",
      className: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
      variant: "outline",
      colorScheme: "yellow",
      className: "border-yellow-500 text-yellow-500 hover:bg-yellow-50",
    },
    {
      variant: "solid",
      colorScheme: "green",
      className: "bg-green-500 hover:bg-green-600",
    },
    {
      variant: "outline",
      colorScheme: "green",
      className: "border-green-500 text-green-500 hover:bg-green-50",
    },
    {
      variant: "solid",
      colorScheme: "teal",
      className: "bg-teal-500 hover:bg-teal-600",
    },
    {
      variant: "outline",
      colorScheme: "teal",
      className: "border-teal-500 text-teal-500 hover:bg-teal-50",
    },
    {
      variant: "solid",
      colorScheme: "blue",
      className: "bg-blue-500 hover:bg-blue-600",
    },
    {
      variant: "outline",
      colorScheme: "blue",
      className: "border-blue-500 text-blue-500 hover:bg-blue-50",
    },
    {
      variant: "solid",
      colorScheme: "cyan",
      className: "bg-cyan-500 hover:bg-cyan-600",
    },
    {
      variant: "outline",
      colorScheme: "cyan",
      className: "border-cyan-500 text-cyan-500 hover:bg-cyan-50",
    },
    {
      variant: "solid",
      colorScheme: "purple",
      className: "bg-purple-500 hover:bg-purple-600",
    },
    {
      variant: "outline",
      colorScheme: "purple",
      className: "border-purple-500 text-purple-500 hover:bg-purple-50",
    },
    {
      variant: "solid",
      colorScheme: "pink",
      className: "bg-pink-500 hover:bg-pink-600",
    },
    {
      variant: "outline",
      colorScheme: "pink",
      className: "border-pink-500 text-pink-500 hover:bg-pink-50",
    },
  ],
});

type IconButtonProps = VariantProps<typeof iconButtonStyles> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: React.ReactElement;
    variant?: "solid" | "outline";
    size?: "xs" | "sm" | "md" | "lg";
    isRounded?: boolean;
    colorScheme?:
      | "gray"
      | "red"
      | "orange"
      | "yellow"
      | "green"
      | "teal"
      | "blue"
      | "cyan"
      | "purple"
      | "pink";
    
  };

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = "solid",
      size = "md",
      colorScheme = "teal",
      className,
      isRounded = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${cn(
          iconButtonStyles({ variant, size, colorScheme, className })
        )} ${isRounded ? "rounded-full" : "rounded-md"}`}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

export default IconButton;

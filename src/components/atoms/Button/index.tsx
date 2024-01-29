import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { cn } from "../../../utils/cn";

const buttonStyles = cva(
  [
    "w-min",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "flex",
    "items-center",
  ],
  {
    variants: {
      variant: {
        solid: "text-white",
        outline: "border",
        ghost: "",
        link: "",
      },
      size: {
        xs: "px-2 py-0 text-sm",
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
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
        variant: "ghost",
        colorScheme: "gray",
        className: "text-gray-500 hover:bg-gray-100",
      },
      {
        variant: "outline",
        colorScheme: "gray",
        className: "border-gray-200 hover:bg-gray-100",
      },
      {
        variant: "link",
        colorScheme: "gray",
        className: "hover:underline p-0",
      },
      {
        variant: "solid",
        colorScheme: "red",
        className: "bg-red-500 hover:bg-red-600",
      },
      {
        variant: "ghost",
        colorScheme: "red",
        className: "text-red-500 hover:bg-red-50",
      },
      {
        variant: "outline",
        colorScheme: "red",
        className: "border-red-500 text-red-500 hover:bg-red-50",
      },
      {
        variant: "link",
        colorScheme: "red",
        className: "text-red-500 hover:underline p-0",
      },
      {
        variant: "solid",
        colorScheme: "orange",
        className: "bg-orange-500 hover:bg-orange-600",
      },
      {
        variant: "ghost",
        colorScheme: "orange",
        className: "text-orange-500 hover:bg-orange-50",
      },
      {
        variant: "outline",
        colorScheme: "orange",
        className: "border-orange-500 text-orange-500 hover:bg-orange-50",
      },
      {
        variant: "link",
        colorScheme: "orange",
        className: "text-orange-500 hover:underline p-0",
      },
      {
        variant: "solid",
        colorScheme: "yellow",
        className: "bg-yellow-500 hover:bg-yellow-600",
      },
      {
        variant: "ghost",
        colorScheme: "yellow",
        className: "text-yellow-500 hover:bg-yellow-50",
      },
      {
        variant: "outline",
        colorScheme: "yellow",
        className: "border-yellow-500 text-yellow-500 hover:bg-yellow-50",
      },
      {
        variant: "link",
        colorScheme: "yellow",
        className: "text-yellow-500 hover:underline p-0",
      },
      {
        variant: "solid",
        colorScheme: "green",
        className: "bg-green-500 hover:bg-green-600",
      },
      {
        variant: "ghost",
        colorScheme: "green",
        className: "text-green-500 hover:bg-green-50",
      },
      {
        variant: "outline",
        colorScheme: "green",
        className: "border-green-500 text-green-500 hover:bg-green-50",
      },
      {
        variant: "link",
        colorScheme: "green",
        className: "text-green-500 hover:underline p-0",
      },
      {
        variant: "solid",
        colorScheme: "teal",
        className: "bg-teal-500 hover:bg-teal-600",
      },
      {
        variant: "ghost",
        colorScheme: "teal",
        className: "text-teal-500 hover:bg-teal-50",
      },
      {
        variant: "outline",
        colorScheme: "teal",
        className: "border-teal-500 text-teal-500 hover:bg-teal-50",
      },
      {
        variant: "link",
        colorScheme: "teal",
        className: "text-teal-500 hover:underline p-0",
      },
      {
        variant: "solid",
        colorScheme: "blue",
        className: "bg-blue-500 hover:bg-blue-600",
      },
      {
        variant: "ghost",
        colorScheme: "blue",
        className: "text-blue-500 hover:bg-blue-50",
      },
      {
        variant: "outline",
        colorScheme: "blue",
        className: "border-blue-500 text-blue-500 hover:bg-blue-50",
      },
      {
        variant: "link",
        colorScheme: "blue",
        className: "text-blue-500 hover:underline p-0",
      },
      {
        variant: "solid",
        colorScheme: "cyan",
        className: "bg-cyan-500 hover:bg-cyan-600",
      },
      {
        variant: "ghost",
        colorScheme: "cyan",
        className: "text-cyan-500 hover:bg-cyan-50",
      },
      {
        variant: "outline",
        colorScheme: "cyan",
        className: "border-cyan-500 text-cyan-500 hover:bg-cyan-50",
      },
      {
        variant: "link",
        colorScheme: "cyan",
        className: "text-cyan-500 hover:underline p-0",
      },
      {
        variant: "solid",
        colorScheme: "purple",
        className: "bg-purple-500 hover:bg-purple-600",
      },
      {
        variant: "ghost",
        colorScheme: "purple",
        className: "text-purple-500 hover:bg-purple-50",
      },
      {
        variant: "outline",
        colorScheme: "purple",
        className: "border-purple-500 text-purple-500 hover:bg-purple-50",
      },
      {
        variant: "link",
        colorScheme: "purple",
        className: "text-purple-500 hover:underline p-0",
      },
      {
        variant: "solid",
        colorScheme: "pink",
        className: "bg-pink-500 hover:bg-pink-600",
      },
      {
        variant: "ghost",
        colorScheme: "pink",
        className: "text-pink-500 hover:bg-pink-50",
      },
      {
        variant: "outline",
        colorScheme: "pink",
        className: "border-pink-500 text-pink-500 hover:bg-pink-50",
      },
      {
        variant: "link",
        colorScheme: "pink",
        className: "text-pink-500 hover:underline p-0",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "blue"
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    variant?: string;
    size?: string;
    isLoading?: boolean;
    colorScheme?: string;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
  };

const Button = ({
  variant,
  size,
  isLoading,
  className,
  disabled,
  children,
  colorScheme,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(buttonStyles({ variant, size, className, colorScheme }))}
      {...props}
    >
      {isLoading && (
        <svg
          aria-hidden="true"
          role="status"
          className={`inline ${
            size === "lg"
              ? "w-4 h-4"
              : size === "md"
              ? "w-3 h-3"
              : size === "sm"
              ? "w-2.5 h-2.5"
              : "w-2 h-2"
          } me-2 animate-spin`}
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
      )}
      {leftIcon && <span className="mr-1.5">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-1.5">{rightIcon}</span>}
    </button>
  );
};

export default Button;

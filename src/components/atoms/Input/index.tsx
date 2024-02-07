import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const inputStyles = cva(["w-full", "text-gray-400", "focus:outline-none"], {
  variants: {
    variant: {
      outline: "border border-gray-200 rounded-lg",
      filled: "bg-gray-100 border-transparent rounded-lg",
      flushed: "border-b border-gray-200 p-0",
      unstyled: "",
    },
    size: {
      xs: "text-sm px-2 py-1",
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-4 py-2.5",
    },
  },
  compoundVariants: [
    {
      variant: "flushed",
      size: "lg",
      className: "p-0",
    },
    {
      variant: "flushed",
      size: "md",
      className: "p-0",
    },
    {
      variant: "flushed",
      size: "sm",
      className: "p-0",
    },
    {
      variant: "flushed",
      size: "xs",
      className: "p-0",
    },
    {
      variant: "unstyled",
      size: "lg",
      className: "p-0",
    },
    {
      variant: "unstyled",
      size: "md",
      className: "p-0",
    },
    {
      variant: "unstyled",
      size: "sm",
      className: "p-0",
    },
    {
      variant: "unstyled",
      size: "xs",
      className: "p-0",
    },
  ]
});

type InputProps = React.HTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputStyles> & {
    placeholder: string;
    size?: "lg" | "md" | "sm" | "xs";
    variant?: "outline" | "filled" | "flushed" | "unstyled";
  };
const Input = ({
  placeholder,
  size = "md",
  variant = "outline",
  className,
  ...props
}: InputProps) => {
  return (
    <input
      className={cn(inputStyles({ size, variant, className }))}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;

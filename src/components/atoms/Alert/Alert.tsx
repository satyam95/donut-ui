import { VariantProps, cva } from "class-variance-authority";
import { IoMdAlert } from "react-icons/io";
import { cn } from "../../../utils/cn";
import { ComponentProps } from "react";

const alertStyles = cva(
  ["px-4", "py-3", "min-w-96", "flex gap-3", "items-center"],
  {
    variants: {
      status: {
        info: "bg-blue-100 text-blue-500",
        warning: "bg-orange-100 text-orange-500",
        success: "bg-green-100 text-green-500",
        error: "bg-red-100 text-red-500",
      },
      variant: {
        subtle: "",
        leftAccent: "border-l-4 pl-3",
        topAccent: "border-t-4 pt-2",
        solid: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        status: "info",
        className: "bg-blue-500 text-white",
      },
      {
        variant: "solid",
        status: "warning",
        className: "bg-orange-500 text-white",
      },
      {
        variant: "solid",
        status: "success",
        className: "bg-green-500 text-white",
      },
      {
        variant: "solid",
        status: "error",
        className: "bg-red-500 text-white",
      },
      {
        variant: "leftAccent",
        status: "info",
        className: "border-blue-500",
      },
      {
        variant: "topAccent",
        status: "info",
        className: "border-blue-500",
      },
      {
        variant: "leftAccent",
        status: "warning",
        className: "border-orange-500",
      },
      {
        variant: "topAccent",
        status: "warning",
        className: "border-orange-500",
      },
      {
        variant: "leftAccent",
        status: "success",
        className: "border-green-500",
      },
      {
        variant: "topAccent",
        status: "success",
        className: "border-green-500",
      },
      {
        variant: "leftAccent",
        status: "error",
        className: "border-red-500",
      },
      {
        variant: "topAccent",
        status: "error",
        className: "border-red-500",
      },
    ],
  }
);

type AlertProps = ComponentProps<"div"> &
  VariantProps<typeof alertStyles> & {
    status?: "info" | "warning" | "success" | "error";
    variant?: "subtle" | "leftAccent" | "topAccent" | "solid";
  };

export const Alert = ({
  status = "info",
  variant = "subtle",
  className,
  children,
}: AlertProps) => {
  return (
    <div className={cn(alertStyles({ status, variant }), className)}>
      <div className="w-6 h-6">
        <IoMdAlert className="w-full h-full" />
      </div>
      <div className={variant === "solid" ? "text-white" : "text-gray-700"}>
        {children}
      </div>
    </div>
  );
};

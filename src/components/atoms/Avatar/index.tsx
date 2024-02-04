import { VariantProps, cva } from "class-variance-authority";
import Image from "../Image";
import { ComponentProps } from "react";
import { cn } from "../../../utils/cn";

const avatarStyles = cva([""], {
  variants: {
    size: {
      "2xl": "w-32 h-32",
      xl: "w-24 h-24",
      lg: "w-16 h-16",
      md: "w-12 h-12",
      sm: "w-8 h-8",
      xs: "w-6 h-6",
    },
    badgePlacement: {
      "top-start": "top-0 left-0",
      "top-end": "top-0 right-0",
      "bottom-start": "bottom-0 left-0",
      "bottom-end": "bottom-0 right-0",
    },
  },
});

type AvatarProps = ComponentProps<"div"> &
  VariantProps<typeof avatarStyles> & {
    size?: "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
    badgePlacement?: "top-start" | "top-end" | "bottom-start" | "bottom-end";
    src?: string;
    name?: string;
    isOnline?: boolean;
    rounded?: boolean;
  };
const Avatar = ({
  src = "https://bit.ly/broken-link",
  name= "Broken Link",
  rounded = true,
  size = "md",
  isOnline = false,
  className,
  badgePlacement = "top-end",
  ...props
}: AvatarProps) => {
  return (
    <div
      className={`relative ${cn(avatarStyles({ size, className }))}`}
      {...props}
    >
      <Image
        src={src}
        alt={name}
        className={`w-full h-full ${rounded ? "rounded-full" : "rounded-base"}`}
      />
      {isOnline ? (
        <div
          className={`absolute flex items-center justify-center font-bold text-white bg-green-500 border-white rounded-full ${cn(
            avatarStyles({ badgePlacement })
          )} ${
            size === "2xl"
              ? "border-4 w-10 h-10"
              : size === "xl"
              ? "border-4 w-6 h-6"
              : size === "lg"
              ? "border-2 w-4 h-4"
              : size === "md"
              ? "border-2 w-4 h-4"
              : size === "sm"
              ? "border w-2 h-2"
              : size === "xs"
              ? "border w-1.5 h-1.5"
              : ""
          }`}
        />
      ) : null}
    </div>
  );
};

export default Avatar;

import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, useEffect, useState } from "react";
import { cn } from "../../../utils/cn";

const colorStyles = cva(["h-full"], {
  variants: {
    colorScheme: {
      red: "bg-red-400",
      orange: "bg-orange-400",
      yellow: "bg-yellow-400",
      green: "bg-green-400",
      teal: "bg-teal-400",
      blue: "bg-blue-400",
      cyan: "bg-cyan-400",
      purple: "bg-purple-400",
      pink: "bg-pink-400",
    },
  },
});

const progressStyles = cva(
  [
    "relative",
    "w-full",
    "bg-gray-100",
    "border",
    "border-gray-200",
    "rounded-2xl",
    "overflow-hidden",
  ],
  {
    variants: {
      size: {
        xs: "h-2 text-xs",
        sm: "h-3 text-xs",
        md: "h-4 text-xs",
        lg: "h-5 text-sm",
      },
    },
  }
);

type ProgressProps = ComponentProps<"div"> &
  VariantProps<typeof progressStyles> &
  VariantProps<typeof colorStyles> & {
    value: number;
    size?: "xs" | "sm" | "md" | "lg";
    hasStripe?: boolean;
    showPercent?: boolean;
    colorScheme?:
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

const Progress = ({
  value = 0,
  hasStripe = false,
  showPercent = false,
  size = "md",
  colorScheme = "green",
  className,
}: ProgressProps) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className={cn(progressStyles({ size, className }))}>
      {showPercent && (
        <span
          className="absolute w-full h-full flex justify-center items-center"
          style={{ color: percent > 49 ? "white" : "black" }}
        >
          {percent.toFixed()}%
        </span>
      )}
      <div
        className={cn(colorStyles({ colorScheme }))}
        style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
      >
        {hasStripe && <img src="/stripe.png" />}
      </div>
    </div>
  );
};

export default Progress;

import React, { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<"button"> {
  Icon?: ReactNode;
  size?: "small" | "medium" | "large";
  nature?: "info" | "success" | "warning" | "danger" | "dull";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  Icon,
  size = "medium",
  nature = "info",
  ...props
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const natureClasses = {
    info: "bg-blue-500 text-white hover:bg-blue-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    dull: "bg-gray-500 text-white hover:bg-gray-600",
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
        sizeClasses[size],
        natureClasses[nature]
      )}
      {...props}
    >
      {Icon ? <span className="mr-2">{Icon}</span> : null}
      {children}
    </button>
  );
};

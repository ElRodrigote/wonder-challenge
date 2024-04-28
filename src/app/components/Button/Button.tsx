import React from "react";

import { twMerge } from "tailwind-merge";

import { Spinner } from "@/components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: (args?: any) => void;
}

export const Button = ({
  children,
  className,
  disabled,
  onClick,
  loading,
  id,
  ...rest
}: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={twMerge(
      "text-gray-900 bg-white border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2",
      "hover:bg-gray-100",
      "disabled:bg-gray-300",
      "focus:ring-4 focus:outline-none focus:ring-gray-100",
      "flex items-center justify-center",
      className
    )}
    {...rest}
  >
    {loading ? <Spinner /> : children}
  </button>
);

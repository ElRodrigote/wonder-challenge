import React from "react";

import { twMerge } from "tailwind-merge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  id: string;
  label: string;
  onClick?: (args?: any) => void;
}
export const Input = ({
  className,
  error,
  id,
  label,
  onChange,
  placeholder,
  required,
  value,
  ...rest
}: InputProps) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-900">
      {`${label}: `}
      <input
        type="text"
        id={id}
        className={twMerge(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5",
          "focus:ring-blue-500 focus:border-blue-500",
          `${
            error &&
            "bg-red-200 !border-red-200 focus:!ring-red-800 focus:!border-red-800"
          }`,
          className
        )}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
        {...rest}
      />
    </label>
  </div>
);

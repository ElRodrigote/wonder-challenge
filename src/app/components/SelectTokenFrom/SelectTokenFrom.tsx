"use client";

import React, { PropsWithChildren } from "react";
import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";
import { ConnectKitButton } from "connectkit";
import { useAccount, useBalance } from "wagmi";

interface SelectItemProps extends PropsWithChildren {
  className?: string;
  value: string;
}

const TOKEN_LIST = [
  {
    value: "",
    label: "DAI",
  },
  {
    value: "",
    label: "USDC",
  },
];

export const SelectTokenFrom = () => {
  const account = useAccount();
  const { data: balance } = useBalance({
    address: account.address,
    // token: TOKEN_BY_CHAIN[chainId] as `0x${string}`,
    token: "0x1D70D57ccD2798323232B2dD027B3aBcA5C00091",
  });

  console.log("address: ", account.address);
  console.log("chain: ", account.chain);
  console.log("chainId: ", account.chainId);
  console.log("balance: ", balance);

  console.log("test");

  return (
    <Select.Root>
      <Select.Trigger
        className="inline-flex items-center justify-center rounded px-4 text-sm h-9 gap-1 bg-white text-sky-400 shadow hover:bg-gray-100 focus:shadow-md"
        aria-label="Food"
      >
        <Select.Value placeholder="Select a token..." />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
          <Select.Viewport className="p-1.5">
            <Select.Group>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, value }: SelectItemProps, forwardedRef) => {
    return (
      <Select.Item
        className={twMerge(
          "text-sm text-sky-400 rounded flex items-center h-6 pr-9 pl-6 relative select-none hover:outline-none hover:bg-sky-600 hover:text-sky-100",
          className
        )}
        ref={forwardedRef as any}
        value={value}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
SelectItem.displayName = "SelectItem";

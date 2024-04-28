"use client";

import React, { useEffect, useMemo } from "react";

import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";
import { Address } from "viem";
import { useAccount, useBalance } from "wagmi";

import { Mint, Spinner } from "@/components";
import { ChainId, DAI, USDC } from "@/constants";
import { useSendboxContext } from "@/contexts";
import { formatBalance } from "@/utils";

export const SelectTokenFrom = () => {
  const { sendboxState } = useSendboxContext();
  const [tokenAddress, setTokenAddress] = sendboxState.tokenAddressState;
  const [, setSelectedToken] = sendboxState.selectedtokenState;
  const account = useAccount();
  const { data: balance, isLoading } = useBalance({
    address: account.address,
    query: {
      retry: 10,
      retryDelay: 5000,
    },
    token: tokenAddress as Address,
  });

  const selectedChainId = account.chainId ?? ChainId.SEPOLIA;
  const tokenBalance = balance?.formatted;

  const TOKEN_LIST = useMemo(() => {
    return [
      {
        value: DAI[selectedChainId as ChainId],
        label: "DAI",
      },
      {
        value: USDC[selectedChainId as ChainId],
        label: "USDC",
      },
    ];
  }, [selectedChainId]);

  useEffect(() => {
    if (tokenAddress && TOKEN_LIST) {
      const selectedToken = TOKEN_LIST.find(
        (token) => token.value?.address === tokenAddress
      );
      setSelectedToken(selectedToken);
    }
  }, [setSelectedToken, tokenAddress, TOKEN_LIST]);

  return (
    <div className="flex justify-between items-center">
      <Select.Root
        onValueChange={(address) => setTokenAddress(address)}
        value={tokenAddress}
      >
        <Select.Trigger
          className="inline-flex items-center justify-center rounded px-4 text-sm min-w-16 h-9 gap-1 bg-white text-sky-400 shadow hover:bg-gray-100 focus:shadow-md"
          aria-label="Tokens"
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
                {TOKEN_LIST.map((token, idx) => (
                  <SelectItem key={idx} value={token.value?.address}>
                    {token.label}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      {tokenAddress &&
        (isLoading ? (
          <Spinner />
        ) : tokenBalance && parseFloat(tokenBalance) ? (
          <p className="text-blue-600">{`Balance: ${formatBalance(
            tokenBalance
          )}`}</p>
        ) : (
          <Mint />
        ))}
    </div>
  );
};

interface SelectItemProps extends React.PropsWithChildren {
  className?: string;
  value: string;
}
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

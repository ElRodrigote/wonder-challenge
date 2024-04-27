"use client";

import React, { useEffect, useState } from "react";

import { Address, erc20Abi, parseUnits } from "viem";
import { useWriteContract } from "wagmi";

import { Button } from "@/components";
import { useSendboxContext } from "@/contexts";
import { EVM_ADDRESS } from "@/utils";
import { TX_STATUS } from "@/constants";

export const TransferButton = () => {
  const [tokenInGwei, setTokenInGwei] = useState<bigint>();
  const { sendboxState } = useSendboxContext();

  const [chainId] = sendboxState.chainIdState;
  const [toAddress] = sendboxState.toAddressState;
  const [tokenAddress] = sendboxState.tokenAddressState;
  const [tokenAmount] = sendboxState.tokenAmountState;
  const [selectedToken] = sendboxState.selectedtokenState;
  const { writeContract, status } = useWriteContract();

  useEffect(() => {
    if (tokenAmount) {
      setTokenInGwei(parseUnits(tokenAmount, selectedToken?.value.decimals));
    }
  }, [selectedToken, tokenAmount]);

  const evmAddressChecker = new RegExp(EVM_ADDRESS);
  const isDisabled = !(
    toAddress &&
    tokenInGwei &&
    evmAddressChecker.test(toAddress)
  );

  return (
    <Button
      disabled={isDisabled}
      loading={status === TX_STATUS.PENDING}
      onClick={() =>
        writeContract({
          abi: erc20Abi,
          address: tokenAddress,
          chainId: parseInt(chainId),
          functionName: "transfer",
          args: [toAddress as Address, tokenInGwei ?? 0n],
        })
      }
    >
      Transfer token
    </Button>
  );
};

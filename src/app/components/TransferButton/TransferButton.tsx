import React from "react";

import { Address, erc20Abi } from "viem";
import { useWriteContract } from "wagmi";

import { Button } from "@/components";
import { useSendboxContext } from "@/contexts";
import { EVM_ADDRESS } from "@/utils";
import { TX_STATUS } from "@/constants";

export const TransferButton = () => {
  const { sendboxState } = useSendboxContext();

  const [chainId] = sendboxState.chainIdState;
  const [toAddress] = sendboxState.toAddressState;
  const [tokenAddress] = sendboxState.tokenAddressState;
  const [tokenAmountInGwei] = sendboxState.tokenAmountInGweiState;
  const { writeContract, status } = useWriteContract();

  const evmAddressChecker = new RegExp(EVM_ADDRESS);
  const isDisabled = !(
    toAddress &&
    tokenAmountInGwei &&
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
          args: [toAddress as Address, tokenAmountInGwei],
        })
      }
    >
      Transfer token
    </Button>
  );
};

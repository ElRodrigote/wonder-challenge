"use client";

import React, { useEffect, useState } from "react";

import { useAccount, useWriteContract } from "wagmi";
import { Address, erc20Abi } from "viem";

import { Button } from "@/components";
import { MAX_ALLOWANCE, TX_STATUS } from "@/constants";
import { useSendboxContext } from "@/contexts";
import { EVM_ADDRESS } from "@/utils";

export const ApproveButton = () => {
  const [spenderAddress, setSpenderAddress] = useState<string>();
  const { writeContract, status } = useWriteContract();
  const { sendboxState } = useSendboxContext();
  const [chainId] = sendboxState.chainIdState;
  const [tokenAddress] = sendboxState.tokenAddressState;
  const [toAddress] = sendboxState.toAddressState;
  const account = useAccount();

  const evmAddressChecker = new RegExp(EVM_ADDRESS);
  const isDisabled = !(toAddress && evmAddressChecker.test(toAddress));

  useEffect(() => {
    setSpenderAddress(account.address);
  }, [account.address]);

  return (
    <Button
      disabled={isDisabled}
      loading={status === TX_STATUS.PENDING}
      onClick={() =>
        writeContract({
          abi: erc20Abi,
          address: tokenAddress,
          chainId: parseInt(chainId),
          functionName: "approve",
          args: [spenderAddress as Address, MAX_ALLOWANCE],
        })
      }
    >
      Approve token
    </Button>
  );
};

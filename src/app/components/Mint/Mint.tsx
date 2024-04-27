"use client";

import React, { useEffect, useState } from "react";

import { Address, parseUnits } from "viem";

import { Button, Input } from "@/components";
import { useSendboxContext } from "@/contexts";
import { useAccount, useWriteContract } from "wagmi";
import { TX_STATUS } from "@/constants";
import { wonderErc20ABI } from "@/abis";

export const Mint = () => {
  const [mintAmount, setMintAmount] = useState<string>();
  const [mintAmountInGwei, setMintAmountInGwei] = useState<bigint>();
  const account = useAccount();
  const { writeContract, status } = useWriteContract();
  const { sendboxState } = useSendboxContext();

  const [chainId] = sendboxState.chainIdState;
  const [tokenAddress] = sendboxState.tokenAddressState;
  const [selectedToken] = sendboxState.selectedtokenState;

  useEffect(() => {
    if (mintAmount) {
      setMintAmountInGwei(
        parseUnits(mintAmount, selectedToken?.value.decimals)
      );
    }
  }, [mintAmount, selectedToken]);

  console.log("mintAmount: ", mintAmount);
  console.log("mintAmountInGwei: ", mintAmountInGwei);

  return (
    <div className="flex items-end justify-between w-1/2">
      <Input
        className="w-24"
        id="mint_amount"
        label="Mint Amount"
        onChange={(event) => setMintAmount(event.target.value)}
        placeholder="Amount"
        type="number"
        value={mintAmount}
      />
      <Button
        className="min-w-6"
        disabled={!mintAmount}
        loading={status === TX_STATUS.PENDING}
        onClick={() =>
          writeContract({
            abi: wonderErc20ABI,
            address: tokenAddress,
            chainId: parseInt(chainId),
            functionName: "mint",
            args: [account.address as Address, mintAmountInGwei ?? 0n],
          })
        }
      >
        Mint
      </Button>
    </div>
  );
};

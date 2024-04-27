"use client";

import React, { useEffect } from "react";

import { parseUnits } from "viem";

import { Input } from "@/components";
import { useSendboxContext } from "@/contexts";

export const AmountInput = () => {
  const { sendboxState } = useSendboxContext();

  const [tokenAddress] = sendboxState.tokenAddressState;
  const [tokenAmount, setTokenAmount] = sendboxState.tokenAmountState;
  const [, setTokenAmountInGwei] = sendboxState.tokenAmountInGweiState;
  const [selectedToken] = sendboxState.selectedtokenState;

  useEffect(() => {
    if (tokenAmount) {
      setTimeout(() => setTokenAmountInGwei(amountInGwei), 500);
      const amountInGwei = parseUnits(
        tokenAmount,
        selectedToken?.value.decimals
      );
    } else {
      setTokenAmount(null);
      setTokenAmountInGwei(null);
    }
  }, [selectedToken, setTokenAmount, setTokenAmountInGwei, tokenAmount]);

  return (
    <Input
      disabled={!tokenAddress}
      id="amount"
      label="Amount"
      placeholder="Type your amount..."
      onChange={(event) => setTokenAmount(event.target.value)}
      type="number"
      value={!tokenAddress ? "" : tokenAmount}
    />
  );
};

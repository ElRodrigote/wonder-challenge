"use client";

import React, { useEffect } from "react";

import { Input } from "@/components";
import { useSendboxContext } from "@/contexts";

export const AmountInput = () => {
  const { sendboxState } = useSendboxContext();
  const [tokenAddress] = sendboxState.tokenAddressState;
  const [tokenAmount, setTokenAmount] = sendboxState.tokenAmountState;

  useEffect(() => {
    if (!tokenAmount) setTokenAmount(null);
  }, [setTokenAmount, tokenAmount]);

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

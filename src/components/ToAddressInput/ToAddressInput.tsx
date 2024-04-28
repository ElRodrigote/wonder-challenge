"use client";

import React, { useEffect, useState } from "react";

import { Input } from "@/components";
import { useSendboxContext } from "@/contexts";
import { EVM_ADDRESS } from "@/utils";

export const ToAddressInput = () => {
  const { sendboxState } = useSendboxContext();
  const [toAddress, setToAddress] = sendboxState.toAddressState;
  const [error, setError] = useState<boolean>();

  const evmAddressChecker = new RegExp(EVM_ADDRESS);

  useEffect(() => {
    if (!toAddress.length) setToAddress(null);
  }, [setToAddress, toAddress]);

  const handleInputBlur = () => {
    setError(!evmAddressChecker.test(toAddress));
  };

  return (
    <Input
      error={error}
      id="to_address"
      label="To Address"
      onBlur={handleInputBlur}
      onChange={(event) => setToAddress(event.target.value)}
      placeholder="0x..."
      value={toAddress}
    />
  );
};

"use client";

import { useEffect } from "react";

import { useAccount } from "wagmi";

import {
  AmountInput,
  ApproveButton,
  SelectTokenFrom,
  ToAddressInput,
  TransferButton,
} from "@/components";
import { useSendboxContext } from "@/contexts";

export const Sendbox = () => {
  const account = useAccount();
  const { sendboxState } = useSendboxContext();
  const [, setChainId] = sendboxState.chainIdState;
  const [toAddress, setToAddress] = sendboxState.toAddressState;

  useEffect(() => {
    setChainId(account.chainId);
    setToAddress(toAddress);
  }, [account.address, account.chainId, setChainId, setToAddress, toAddress]);

  return (
    <div className="bg-white w-1/3 rounded-2xl px-5 py-6 space-y-4">
      <SelectTokenFrom />
      <AmountInput />
      <ToAddressInput />
      <div className="w-full flex items-center justify-center space-x-4">
        <ApproveButton />
        <TransferButton />
      </div>
    </div>
  );
};

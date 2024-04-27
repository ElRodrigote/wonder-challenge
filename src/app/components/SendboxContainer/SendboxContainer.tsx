"use client";

import { useAccount } from "wagmi";

import { Sendbox, SoonTM } from "@/components";
import { ChainId } from "@/constants";

export const SendboxContainer = () => {
  const account = useAccount();

  return account.chainId === ChainId.SEPOLIA ? <Sendbox /> : <SoonTM />;
};

"use client";

import { useAccount } from "wagmi";

import { ConnectYourWallet, SendboxContainer, SoonTM } from "@/components";
import { useIsValidChainId } from "@/hooks";

export default function Home() {
  const account = useAccount();

  const [isValidChainId] = useIsValidChainId();

  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center p-24 space-y-4">
      {!account.address ? (
        <ConnectYourWallet />
      ) : isValidChainId ? (
        <SendboxContainer />
      ) : (
        <SoonTM />
      )}
    </main>
  );
}

"use client";
import { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Sendbox } from "@/components";
import { ROUTES } from "@/constants";
import { useIsValidChainId } from "@/hooks";

export default function Home() {
  const router = useRouter();

  const [isValidChainId] = useIsValidChainId();

  useEffect(() => {
    if (!isValidChainId) router.push(ROUTES.SOON_TM);
  }, [isValidChainId]);

  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center p-24 space-y-4">
      <div>
        {`No testnet gas? No problem! use `}
        <Link
          href="https://faucets.chain.link/sepolia"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://faucets.chain.link/sepolia
        </Link>
      </div>
      <Sendbox />
    </main>
  );
}

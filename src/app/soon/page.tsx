"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

import { ROUTES } from "@/constants";
import { useIsValidChainId } from "@/hooks";
import { OctoBusy } from "@/public";

export default function SoonTM() {
  const account = useAccount();
  const router = useRouter();

  const [isValidChainId] = useIsValidChainId();

  useEffect(() => {
    if (isValidChainId) router.push(ROUTES.HOME);
  }, [isValidChainId]);

  return (
    <div className="flex flex-col justify-center items-center space-y-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{`${
        account.chain?.name ?? "Your selected chain"
      } coming SoonTM`}</h1>
      <Image alt="Octopus Worker" src={OctoBusy} height={450} width={450} />
    </div>
  );
}

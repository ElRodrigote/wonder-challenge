import React from "react";

import Image from "next/image";
import { useAccount } from "wagmi";

import { OctoBusy } from "@/public";

export const SoonTM = () => {
  const account = useAccount();

  return (
    <div className="flex flex-col justify-center items-center space-y-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{`${
        account.chain?.name ?? "Your selected chain"
      } coming SoonTM`}</h1>
      <Image alt="Octopus Worker" src={OctoBusy} height={450} width={450} />
    </div>
  );
};

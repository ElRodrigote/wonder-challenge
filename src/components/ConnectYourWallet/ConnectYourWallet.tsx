import React from "react";

import Image from "next/image";

import { OctoSearch } from "@/public";

export const ConnectYourWallet = () => (
  <div className="flex flex-col justify-center items-center space-y-8">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
      Please connect your wallet to continue
    </h1>
    <Image alt="Octopus Worker" src={OctoSearch} height={500} width={500} />
  </div>
);

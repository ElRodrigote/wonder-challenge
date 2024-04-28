import { useEffect, useState } from "react";

import { useAccount } from "wagmi";

import { ChainId } from "@/constants";

export const useIsValidChainId = () => {
  const [isValidChainId, setIsValidChainId] = useState<boolean>();
  const account = useAccount();

  useEffect(() => {
    if (account.chainId)
      setIsValidChainId(
        Object.values(ChainId).includes(account?.chainId as ChainId)
      );
  }, [account.chainId]);

  return [isValidChainId];
};

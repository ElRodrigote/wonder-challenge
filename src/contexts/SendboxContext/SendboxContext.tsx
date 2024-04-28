"use client";

import { ReactNode, createContext, useContext, useMemo, useState } from "react";

import { parseAsString, useQueryState } from "nuqs";

import { Token } from "@/constants";

interface SendboxContextProps {
  sendboxState: any;
}
const SendboxContext = createContext<SendboxContextProps>({
  sendboxState: undefined,
});

interface SendboxContextProviderProps {
  children: ReactNode;
}
export const SendboxContextProvider = ({
  children,
}: SendboxContextProviderProps) => {
  const [selectedToken, setSelectedToken] = useState<Token>();
  const [chainId, setChainId] = useQueryState(
    "chainId",
    parseAsString.withDefault("")
  );
  const [toAddress, setToAddress] = useQueryState(
    "to",
    parseAsString.withDefault("")
  );
  const [tokenAddress, setTokenAddress] = useQueryState(
    "token",
    parseAsString.withDefault("")
  );
  const [tokenAmount, setTokenAmount] = useQueryState(
    "tokenAmount",
    parseAsString.withDefault("")
  );

  const sendboxContext = useMemo(() => {
    const sendboxState = {
      chainIdState: [chainId, setChainId],
      selectedtokenState: [selectedToken, setSelectedToken],
      toAddressState: [toAddress, setToAddress],
      tokenAddressState: [tokenAddress, setTokenAddress],
      tokenAmountState: [tokenAmount, setTokenAmount],
    };

    return { sendboxState };
  }, [
    chainId,
    selectedToken,
    setChainId,
    setToAddress,
    setTokenAddress,
    setTokenAmount,
    toAddress,
    tokenAddress,
    tokenAmount,
  ]);

  return (
    <SendboxContext.Provider value={sendboxContext}>
      {children}
    </SendboxContext.Provider>
  );
};

export const useSendboxContext = () => useContext(SendboxContext);

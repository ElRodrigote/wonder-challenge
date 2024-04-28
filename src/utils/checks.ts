import { ChainId } from "@/constants";

export const EVM_ADDRESS = /^(0x)?[0-9a-fA-F]{40}$/;

export const checkIsValidChainId = (newChainId: number): Boolean =>
  Object.values(ChainId).some((chainId) => chainId === newChainId);

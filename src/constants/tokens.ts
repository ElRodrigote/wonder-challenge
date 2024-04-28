import { Address } from "viem";
import { ChainId } from "./chains";

export type Token = {
  address: Address;
  decimals: number;
  name: string;
  symbol: string;
};

/**
 * @TODO enable Amoy testnet data after the SCs get deployed
 */
export const DAI = {
  // [ChainId.AMOY]: {
  //   address: "",
  //   decimals: 18,
  //   name: "DAI Stablecoin",
  //   symbol: "DAI",
  // },
  [ChainId.SEPOLIA]: {
    address: "0x1D70D57ccD2798323232B2dD027B3aBcA5C00091",
    decimals: 18,
    name: "DAI Stablecoin",
    symbol: "DAI",
  },
};

export const USDC = {
  // [ChainId.AMOY]: {
  //   address: "",
  //   decimals: 6,
  //   name: "DAI Stablecoin",
  //   symbol: "DAI",
  // },
  [ChainId.SEPOLIA]: {
    address: "0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47",
    decimals: 6,
    name: "DAI Stablecoin",
    symbol: "DAI",
  },
};

export const MAX_ALLOWANCE = BigInt(Number.MAX_SAFE_INTEGER);

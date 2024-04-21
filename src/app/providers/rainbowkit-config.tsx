"use client";

import { getDefaultWallets, getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { sepolia, polygonMumbai } from "wagmi/chains";

const { wallets } = getDefaultWallets();

export const config = getDefaultConfig({
  appName: "Wonderland Challenge",
  projectId: "YOUR_PROJECT_ID",
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [polygonMumbai, sepolia],
  ssr: true,
});

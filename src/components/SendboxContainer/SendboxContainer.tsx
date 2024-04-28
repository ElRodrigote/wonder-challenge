import Link from "next/link";

import { Sendbox } from "@/components";

export const SendboxContainer = () => (
  <>
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
  </>
);

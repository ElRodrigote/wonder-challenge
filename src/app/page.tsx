import Link from "next/link";

import { SendboxContainer } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-between p-24 space-y-4">
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
      <SendboxContainer />
    </main>
  );
}

"use client";

import Link from "next/link";
import { WonderlandLogo } from "@/public";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="top-0 flex flex-col w-full px-4 border-b border-solid h-nav-height bg-surface-25 border-b-surface-75 py-2">
      <nav className="flex items-center w-full h-full">
        <div>
          <Link
            passHref
            tabIndex={0}
            href="https://defi.sucks/"
            title="DeFi Wonderland"
            className="flex items-center outline-none w-7"
            target="_blank"
          >
            <Image src={WonderlandLogo} alt="DeFi Wonderland Logotype" />
          </Link>
        </div>
        <div className="items-center justify-end hidden w-full gap-4 md:flex">
          <ConnectButton />
        </div>
      </nav>
    </header>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { WonderlandLogo } from "@/public";

export const Navbar = () => (
  <header className="top-0 flex flex-col w-full px-4 border-b border-solid h-14 bg-surface-25 border-b-surface-75 py-2">
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

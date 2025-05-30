"use client";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../components/toolkit/sideBar";

export default function Toolkit() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center ml-[18%] justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center">
        <a href="/" target="_self" rel="noopener noreferrer">
          <Image
            src="/cubit-blue.svg"
            alt="Cubit logo"
            width={90}
            height={19}
            priority
          />
        </a>

        <div id="menu">
          <SideBar />
        </div>

        <h1 className="text-4xl">Cubit Toolkit</h1>

        <h2>
          There will be many paths. You must find the one that suits the needs
          of your journey.
        </h2>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <Link href="#" className="underline">
          Toolkit
        </Link>
        <Link href="/docs/" className="hover:underline">
          Docs
        </Link>
        <Link href="/settings/" className="hover:underline">
          Settings
        </Link>
      </footer>
    </div>
  );
}

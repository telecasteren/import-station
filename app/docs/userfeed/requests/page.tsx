"use client";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../../../components/userfeed/sideBar";

export default function Requests() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] md:ml-[18%] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <a href="/" target="_self" rel="noopener noreferrer">
          <Image
            src="/cubit-blue.svg"
            alt="Cubit logo"
            width={90}
            height={19}
            priority
          />
        </a>

        <h1 className="text-4xl">Overview</h1>

        <h2 className="text-lg">{"Pending"}</h2>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/docs/userfeed/"
            target="_self"
            rel="noopener noreferrer"
          >
            Back to userfeed
          </a>
        </div>

        <div id="menu">
          <SideBar />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/toolkit/" className="hover:underline">
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

"use client";
import Image from "next/image";
import Link from "next/link";

export default function Docs() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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

        <h1 className="text-4xl">Cubit Docs</h1>

        <div>
          <label htmlFor="ai-search" hidden>
            Search
          </label>
          <input
            id="ai-search"
            type="text"
            name="search"
            placeholder="Search in docs.."
            className="cursor-pointer p-2 w-80 h-10 rounded-md text-black bg-gray-50 border border-amber-400 hover:border-blue-500"
          ></input>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://github.com/Cubit-AS/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github docs
          </a>
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid border-black/20 dark:border-white/40 flex items-center justify-center hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/docs/onboarding/"
            target="_self"
            rel="noopener noreferrer"
          >
            Onboarding
          </a>
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid border-black/20 dark:border-white/40 flex items-center justify-center hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/docs/userfeed/"
            target="_self"
            rel="noopener noreferrer"
          >
            Userfeed
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/toolkit/" className="hover:underline">
          Toolkit
        </Link>
        <Link href="#" className="underline">
          Docs
        </Link>
        <Link href="/settings/" className="hover:underline">
          Settings
        </Link>
      </footer>
    </div>
  );
}

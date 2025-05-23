"use client";
import Image from "next/image";
import Link from "next/link";

export default function Manual() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-[80%] flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <a href="/" target="_self" rel="noopener noreferrer">
          <Image
            src="/cubit-blue.svg"
            alt="Cubit logo"
            width={90}
            height={19}
            priority
          />
        </a>

        <h1 className="text-4xl">Cubit Employee Manual</h1>

        <div className="w-full h-[80vh] overflow-auto">
          <embed
            src="/Cubit Personalhåndbok (6).pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>

        <Link
          href="/docs/onboarding/"
          className="text-lg underline hover:no-underline hover:text-[#205a83]"
        >
          Back to onboarding
        </Link>
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

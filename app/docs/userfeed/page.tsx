"use client";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../../components/userfeed/sideBar";

export default function Userfeed() {
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

        <h1 className="text-4xl">Cubit Feedback</h1>

        <h2 className="text-lg">
          This is a platform for users to provide feedback, send in suggestions
          for changes and vote on existing change-wishes.
          <br />
          By seeing what our clients actual feedback and suggestions are, we'll
          be able to develop our product alongside our clients needs.
        </h2>

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

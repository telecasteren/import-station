"use client";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../../../components/onboarding/sideBar";

export default function KnowledgeBase() {
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
        <div id="menu">
          <SideBar />
        </div>

        <h1 className="text-4xl">Cubit Knowledge base</h1>

        <h2 className="text-lg">Welcome to Cubit's training platform! </h2>
        <p>
          Here you will learn everything from how to navigate the system, <br />
          to utilise the app for your daily tasks, and all the way down to
          understanding how the engine runs.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="transition-transform duration-300 ease-in-out rounded-md text-white bg-[#273A57] hover:bg-brightness-110 hover:scale-95 flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cubit Core
          </a>
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md bg-[#1a7e8e] flex items-center justify-center hover:bg-brightness-110 text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="#"
            target="_self"
            rel="noopener noreferrer"
          >
            Billing
          </a>
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md bg-[#385690] flex items-center justify-center hover:bg-brightness-110 text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="#"
            target="_self"
            rel="noopener noreferrer"
          >
            Report
          </a>
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md bg-[#273a57] flex items-center justify-center hover:bg-brightness-110 text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="#"
            target="_self"
            rel="noopener noreferrer"
          >
            Sanako
          </a>
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md bg-[#9dbfcd] text-black flex items-center justify-center hover:bg-brightness-110 dark:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="#"
            target="_self"
            rel="noopener noreferrer"
          >
            Koti
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

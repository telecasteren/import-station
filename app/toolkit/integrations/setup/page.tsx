"use client";
import Link from "next/link";
import SideBar from "../../../components/toolkit/sideBar";

export default function Integrations() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center ml-[18%] justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center">
        <div id="menu">
          <SideBar />
        </div>

        <h1 className="text-4xl">Setup for Integrations</h1>

        <h2>How to set up xx and yy.</h2>

        <p>Extract credentials and tokens.</p>
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

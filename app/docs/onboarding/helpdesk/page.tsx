"use client";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../../../components/onboarding/sideBar";

export default function Helpdesk() {
  function openList() {
    const list = document.getElementById("faq-list");
    list?.classList.toggle("hidden");
  }

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

        <h1 className="text-4xl">Cubit Helpdesk</h1>

        <div className="flex flex-wrap gap-6">
          <Link
            href="#"
            onClick={openList}
            className="text-amber-400 hover:underline hover:text-[#205a83]"
          >
            Cubit FAQ
          </Link>

          <Link
            href="https://cubitas.freshdesk.com/a/dashboard/default"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline hover:text-[#205a83]"
          >
            Freshdesk admin
          </Link>
        </div>

        <div id="faq-list" className="hidden">
          <ul className="list-disc ml-8">
            <li className="p-1">Sales</li>
            <li className="p-1">Onboarding</li>
            <li className="p-1">Customer success</li>
          </ul>
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

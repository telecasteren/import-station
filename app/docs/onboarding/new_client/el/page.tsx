"use client";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../../../../components/sideBar";

export default function ELOnboarding() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] md:ml-[18%] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">New EL client</h1>

        <div id="menu">
          <SideBar />
        </div>

        <section className="p-6">
          <div id="checklist">
            <h2 className="text-xl">Process Checklist</h2>
            <br />
            <li>Startup meeting with the client</li>
            <li>Inform the company of incoming client</li>
            <li>Gather client information for tenant settings</li>
            <li>Order the necessary from tech teams</li>
            <li>Create and set up a test tenant</li>
          </div>

          <div className="mt-6 flex flex-wrap gap-6">
            <Link
              href="#"
              className="text-amber-400 hover:underline hover:text-[#205a83]"
            >
              For the client
            </Link>

            <Link
              href="/uploader/clients/fire/"
              className="text-amber-400 hover:underline hover:text-[#205a83]"
            >
              Data import
            </Link>
          </div>
        </section>
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

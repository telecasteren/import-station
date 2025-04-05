"use client";
import Image from "next/image";
import Link from "next/link";

export default function Settings() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/cubit-blue.svg"
          alt="Cubit logo"
          width={90}
          height={19}
          priority
        />

        <h1 className="text-4xl">Settings</h1>

        <div className="flex flex-col justify-center items-center gap-2">
          <label
            htmlFor="setting1"
            className="flex gap-2 items-center justify-center"
          >
            Setting 1
            <input
              id="setting1"
              name="setting1"
              type="text"
              className="mb-4 px-2 py-1 border rounded-md cursor-pointer text-black bg-gray-50 dark:bg-white hover:border-green-400"
            />
          </label>
          <label
            htmlFor="setting2"
            className="flex gap-2 items-center justify-center"
          >
            Setting 2
            <input
              id="setting2"
              name="setting2"
              type="text"
              className="mb-4 px-2 py-1 border rounded-md cursor-pointer text-black bg-gray-50 dark:bg-white hover:border-green-400"
            />
          </label>
          <label
            htmlFor="setting3"
            className="flex gap-2 items-center justify-center"
          >
            Setting 3
            <input
              id="setting3"
              name="setting3"
              type="text"
              className="mb-4 px-2 py-1 border rounded-md cursor-pointer text-black bg-gray-50 dark:bg-white hover:border-green-400"
            />
          </label>
          <label
            htmlFor="setting4"
            className="flex gap-2 items-center justify-center"
          >
            Setting 4
            <input
              id="setting4"
              name="setting4"
              type="text"
              className="mb-4 px-2 py-1 border rounded-md cursor-pointer text-black bg-gray-50 dark:bg-white hover:border-green-400"
            />
          </label>
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
        <Link href="/settings/" className="underline">
          Settings
        </Link>
      </footer>
    </div>
  );
}

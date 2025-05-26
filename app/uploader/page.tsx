"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Uploader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/simple-datatables@9.0.3";
    script.async = true;

    script.onload = () => {
      if (
        document.getElementById("search-table") &&
        typeof (window as any).simpleDatatables !== "undefined" &&
        typeof (window as any).simpleDatatables.DataTable !== "undefined"
      ) {
        new (window as any).simpleDatatables.DataTable("#search-table", {
          searchable: false,
          perPageSelect: false,
        });
      } else {
        console.warn("simpleDatatables not loaded or table not found.");
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2">
        <a href="/" target="_self" rel="noopener noreferrer">
          <Image
            src="/cubit-blue.svg"
            alt="Cubit logo"
            width={90}
            height={19}
            priority
          />
        </a>

        <h1 className="text-4xl">Cubit import</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/uploader/clients/fire/"
            target="_self"
            rel="noopener noreferrer"
          >
            Fire
          </a>
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/uploader/clients/el/"
            target="_self"
            rel="noopener noreferrer"
          >
            EL
          </a>
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/uploader/clients/mhv"
            target="_self"
            rel="noopener noreferrer"
          >
            MHV
          </a>
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/toolkit/"
            target="_self"
            rel="noopener noreferrer"
          >
            Diverse/Toolkit
          </a>
        </div>

        <h2 className="text-xl">Verify the first 100 entries</h2>

        <table
          className="table-fixed rounded-md border-separate border-spacing-0 overflow-hidden"
          id="search-table"
        >
          <thead>
            <tr className="bg-gray-50 text-gray-900 dark:text-gray-100 dark:bg-[#171717]">
              <th className="rounded-tl-md border border-gray-300 dark:border-gray-300 px-4 py-4">
                <span className="flex items-center">
                  ObjectName
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th className="border border-gray-300 dark:border-gray-300 px-4 py-4">
                <span className="flex items-center">
                  ContentValue
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th className="border border-gray-300 dark:border-gray-300 px-4 py-4">
                <span className="flex items-center">
                  ImportDate
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th className="rounded-tr-md border border-gray-300 dark:border-gray-300 px-4 py-4">
                <span className="flex items-center">
                  Amount
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 text-gray-900 border dark:text-gray-100 dark:bg-[#171717]">
              <td className="border border-gray-300 px-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Malcolm Lockyer
              </td>
              <td className="border border-gray-300 px-4 py-2">1961</td>
              <td className="border border-gray-300 px-4 py-2">5.9</td>
            </tr>
            <tr className="bg-gray-50 text-gray-900 border border-black dark:border-gray-300 dark:text-gray-100 dark:bg-[#171717]">
              <td className="border border-gray-300 px-4 py-2">Witchy Woman</td>
              <td className="border border-gray-300 px-4 py-2">The Eagles</td>
              <td className="border border-gray-300 px-4 py-2">1972</td>
              <td className="border border-gray-300 px-4 py-2">8.1</td>
            </tr>
            <tr className="bg-gray-50 text-gray-900 border border-black dark:border-gray-300 dark:text-gray-100 dark:bg-[#171717]">
              <td className="border border-gray-300 px-4 py-2 rounded-bl-md">
                Shining Star
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Earth, Wind, and Fire
              </td>
              <td className="border border-gray-300 px-4 py-2">1972</td>
              <td className="border border-gray-300 px-4 py-2 rounded-br-md">
                6.3
              </td>
            </tr>
            <tr className="bg-gray-50 text-gray-900 border border-black dark:border-gray-300 dark:text-gray-100 dark:bg-[#171717]">
              <td className="border border-gray-300 px-4 py-2 rounded-bl-md">
                The Trooper
              </td>
              <td className="border border-gray-300 px-4 py-2">Iron Maiden</td>
              <td className="border border-gray-300 px-4 py-2">1983</td>
              <td className="border border-gray-300 px-4 py-2 rounded-br-md">
                9.8
              </td>
            </tr>
          </tbody>
        </table>
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

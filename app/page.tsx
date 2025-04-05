"use client";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
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

        <h1 className="text-4xl">Cubit tools & imports</h1>

        <table className="table-fixed rounded-md border-separate border-spacing-0 overflow-hidden">
          <thead>
            <tr className="bg-gray-50 text-gray-900 dark:text-gray-100 dark:bg-[#171717]">
              <th className="rounded-tl-md border border-gray-300 dark:border-gray-300 px-4 py-4">
                ObjectName
              </th>
              <th className="border border-gray-300 dark:border-gray-300 px-4 py-4">
                ContentValue
              </th>
              <th className="border border-gray-300 dark:border-gray-300 px-4 py-4">
                ImportDate
              </th>
              <th className="rounded-tr-md border border-gray-300 dark:border-gray-300 px-4 py-4">
                Amount
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
          </tbody>
        </table>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center justify-center bg-foreground text-background hover:bg-[#031D64] hover:text-white dark:bg-[#205a83] dark:hover:bg-[#205a83] dark:border-none gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/uploader/"
            target="_self"
            rel="noopener noreferrer"
          >
            Upload data
          </a>
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/toolkit/"
            target="_self"
            rel="noopener noreferrer"
          >
            Toolkit
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link href="/" className="underline">
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

"use client";
import Image from "next/image";
import Link from "next/link";

export default function ResidenceUploader() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <a href="/" target="_self" rel="noopener noreferrer">
          <Image
            src="/cubit-blue.svg"
            alt="Cubit logo"
            width={90}
            height={19}
            priority
          />
        </a>

        <h1>You are at Fire clients, specifically residence department</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/uploader/clients/fire/residence/"
            target="_self"
            rel="noopener noreferrer"
          >
            File upload
          </a>

          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/uploader/clients/fire/sfo/"
            target="_self"
            rel="noopener noreferrer"
          >
            Database connection
          </a>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid border-black/20 dark:border-white/40 flex items-center justify-center hover:bg-[#031D64] hover:text-white dark:hover:bg-[#031D64] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[180px]"
            href="/uploader/clients/fire/"
            target="_self"
            rel="noopener noreferrer"
          >
            Back to Fire
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

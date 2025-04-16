"use client";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../../../../components/onboarding/sideBar";

export default function WelcomeEmployee() {
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

        <h1 className="text-4xl">Welcome to Cubit!</h1>

        <section id="intro">
          <h2 className="text-lg">
            You are about to embark on an adventurous journey!
            <br />
            As a new employee in Cubit, you will go through a onboarding program
            to cover three subjects:
          </h2>

          <ol className="list-decimal ml-6 mt-6">
            <li className="p-1">Our company</li>
            <li className="p-1">Our clients</li>
            <li className="p-1">Our products</li>
          </ol>
        </section>

        <div className="w-[800px] h-[1px] bg-amber-50 mt-4 mb-4"></div>

        <section id="content">
          <h3 className="text-2xl font-medium mb-6">The groundwork</h3>
          <p className="text-lg">
            The first week we'll get you up and running with your gear and the
            essentials.
            <br />
            There are a few programs and tools we use on a daily basis, and it's
            vital to know what they are and how to use them.
            <br />
            <br />
            <b>
              Although we use a broad variety of tools, there are three
              essential tools you need to get started:
            </b>
          </p>

          <ul className="list-disc ml-6 mt-6">
            <li className="p-1">
              <a
                className="hover:underline cursor-pointer"
                href="https://slack.com/intl/en-gb/help/articles/360059928654-How-to-use-Slack--your-quick-start-guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Slack:</b>
              </a>{" "}
              Our daily Communication Platform.
            </li>
            <li className="p-1">
              <a
                className="hover:underline cursor-pointer"
                href="https://academy.asana.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Asana:</b>
              </a>{" "}
              Our Project Management tool.
            </li>
            <li className="p-1">
              <a
                className="hover:underline cursor-pointer"
                href="https://support.google.com/a/users/?hl=en#topic=11499463"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Google Workspace:</b>
              </a>{" "}
              The Universe of meetings and document sharing.
            </li>
          </ul>
        </section>

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

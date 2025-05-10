"use client";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../../../../components/onboarding/sideBar";

export default function ELOnboarding() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] md:ml-[18%] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">Training</h1>

        <div id="menu">
          <SideBar />
        </div>

        <section className="p-6">
          <div id="checklist">
            <h2 className="text-xl">Training checklist</h2>
            <br />
            <div>
              <input type="checkbox" id="clientMeeting" name="clientMeeting" />
              <label htmlFor="clientMeeting" className="ml-2">
                Plan and invite client to live training
              </label>
            </div>
            <div>
              <input type="checkbox" id="asanaSetup" name="asanaSetup" />
              <label htmlFor="asanaSetup" className="ml-2">
                Add the training plan to the Asana project at
                <a
                  href="https://app.asana.com/0/portfolio/1209124150685516/1209125652748144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2 text-amber-400 underline hover:no-underline hover:text-[#205a83]"
                >
                  Asana projects
                </a>
              </label>
            </div>
            <div>
              <input type="checkbox" id="testTenant" name="testTenant" />
              <label htmlFor="testTenant" className="ml-2">
                Test the tenant you'll use for training
              </label>
            </div>
            <div>
              <input type="checkbox" id="testTenant" name="testTenant" />
              <label htmlFor="testTenant" className="ml-2">
                Perform training and verify client knowledge
              </label>
            </div>
          </div>

          <div className="mt-8 grid gap-2">
            <Link
              href="#"
              className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
            >
              Training plan template
            </Link>
            <Link
              href="#"
              className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
            >
              Training videos
            </Link>
            <Link
              href="#"
              className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
            >
              Onboarding Storylanes
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

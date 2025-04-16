"use client";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../../../../components/onboarding/sideBar";

export default function MHVOnboarding() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] md:ml-[18%] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">New MHV client</h1>

        <div id="menu">
          <SideBar />
        </div>

        <section className="p-6">
          <div id="checklist">
            <h2 className="text-xl">Prosess Sjekkliste</h2>
            <br />
            <div>
              <input type="checkbox" id="asanaSetup" name="asanaSetup" />
              <label htmlFor="asanaSetup" className="ml-2">
                Set the project up in
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
              <input type="checkbox" id="clientMeeting" name="clientMeeting" />
              <label htmlFor="clientMeeting" className="ml-2">
                Plan startup meeting with the client
              </label>
            </div>
            <div>
              <input type="checkbox" id="slackInform" name="slackInform" />
              <label htmlFor="slackInform" className="ml-2">
                Inform the company of incoming client in Slack
              </label>
            </div>
            <div>
              <input type="checkbox" id="techOrder" name="techOrder" />
              <label htmlFor="techOrder" className="ml-2">
                Order the necessary from tech teams
              </label>
            </div>
            <div>
              <input type="checkbox" id="testTenant" name="testTenant" />
              <label htmlFor="testTenant" className="ml-2">
                Create and set up a test tenant
              </label>
            </div>
          </div>

          <div className="mt-8 grid gap-2">
            <Link
              href="#"
              className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
            >
              Client preparation
            </Link>
            <Link
              href="#"
              className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
            >
              Email templates
            </Link>
            <Link
              href="#"
              className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
            >
              Conversion docs
            </Link>

            <Link
              href="/uploader/clients/fire/"
              className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
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
        <Link href="/docs/" className="underline">
          Docs
        </Link>
        <Link href="/settings/" className="hover:underline">
          Settings
        </Link>
      </footer>
    </div>
  );
}

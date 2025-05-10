"use client";
import Link from "next/link";
import SideBar from "../../../../components/onboarding/sideBar";

const googleDocsPath =
  "app/docs/onboarding/new_client/startup/googledocs/page.tsx";

export default function FireOnboarding() {
  function openDocLists() {
    const lists = document.getElementById("email-templates");

    lists?.classList.toggle("hidden");
  }

  return (
    <div className="grid grid-rows-[10px_1fr_10px] md:ml-[18%] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">New client</h1>
        <div id="menu">
          <SideBar />
        </div>
        <section className="p-6">
          <div id="checklist">
            <h2 className="text-xl">Process Checklist</h2>
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

          <div className="mt-8 grid grid-cols-3 gap-6">
            <Link
              href="#email-templates"
              onClick={openDocLists}
              className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
            >
              Email templates
            </Link>
            <Link
              href="#conversion-docs"
              className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
            >
              Conversion docs
            </Link>

            <Link
              href="/uploader/clients/fire/"
              className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
            >
              Import data
            </Link>
          </div>
        </section>
        <section id="new-client-content" className="w-full">
          <div
            id="email-templates"
            className="hidden flex-wrap gap-6 transition-duration-300"
          >
            <ul className="flex flex-wrap gap-2 flex-col mb-10">
              <h3 className="text-xl">Fire clients</h3>
              <Link
                href="/docs/onboarding/new_client/googledocs/fire-startup-meeting"
                className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
              >
                Startup meeting template
              </Link>
              <Link
                href="/docs/onboarding/new_client/googledocs/fire-data-mapping"
                className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
              >
                Data and mapping template
              </Link>
              <Link
                href="/docs/onboarding/new_client/googledocs/fire-go-live"
                className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
              >
                Go-live template
              </Link>
            </ul>
            <ul className="flex flex-wrap gap-2 flex-col">
              <h3 className="text-xl">EL clients</h3>
              <Link
                href="/docs/onboarding/new_client/googledocs/el-startup-meeting"
                className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
              >
                Startup meeting template
              </Link>
              <Link
                href="/docs/onboarding/new_client/googledocs/el-data-mapping"
                className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
              >
                Data and mapping template
              </Link>
              <Link
                href="/docs/onboarding/new_client/googledocs/el-go-live"
                className="text-amber-400 underline hover:no-underline hover:text-[#205a83]"
              >
                Go-live template
              </Link>
            </ul>
          </div>

          <div id="conversion-docs"></div>
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

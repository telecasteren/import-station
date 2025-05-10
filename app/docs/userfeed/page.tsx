"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SideBar from "../../components/userfeed/sideBar";
import Tooltip from "../../components/userfeed/tooltip";
import { postings } from "../../docs/userfeed/requests/src/postings";

type StatusType =
  | "pending"
  | "reviewing"
  | "planning"
  | "ongoing"
  | "completed"
  | "closed";

const colours: Record<StatusType, string> = {
  pending: "#facc15",
  reviewing: "#fb923c",
  planning: "#2563eb",
  ongoing: "#a855f7",
  completed: "#22c55e",
  closed: "#111827",
};

export default function Userfeed() {
  const [showFeedContent, setShowFeedContent] = useState(false);
  const [hoveredPostingId, setHoveredPostingId] = useState<number | null>(null);

  const handleShowFeed = () => {
    setShowFeedContent(true);
  };

  return (
    <div className="grid grid-rows-[10px_1fr_10px] md:ml-[18%] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {!showFeedContent && (
          <>
            <a href="/" target="_self" rel="noopener noreferrer" id="logo">
              <Image
                src="/cubit-blue.svg"
                alt="Cubit logo"
                width={90}
                height={19}
                priority
              />
            </a>

            <div id="title-message">
              <h1 className="text-4xl">Cubit Feedback</h1>
              <h2 className="text-lg">
                This is a platform for users to provide feedback, send in
                suggestions for changes and vote on existing change-wishes.
                <br />
                By seeing what our clients actual feedback and suggestions are,
                we'll be able to develop our product alongside our clients
                needs.
              </h2>
            </div>

            <Link
              id="post-btn"
              href="#feed"
              className="underline text-xl"
              onClick={handleShowFeed}
            >
              See requests
            </Link>
          </>
        )}

        {showFeedContent && (
          <div id="feed">
            <h1 className="text-4xl">All requests</h1>
            <h2 className="text-lg mb-4">
              These tasks are the change wishes that you requested and made it
              to Cubit's workbench.
              <br />
              Here you can get the latest status, vote for functionality by
              either giving a thumbs up or thumbs down.
            </h2>

            <div id="postings-container" className="mt-20 flex flex-col gap-4">
              {postings.map((posting) => {
                const statusColor = colours[posting.status as StatusType];
                const currentUpVotes = posting.actions.upVotes;
                const currentDownVotes = posting.actions.downVotes;

                return (
                  <form key={posting.id} className="w-[1000px]">
                    <label htmlFor={`chat-${posting.id}`} className="sr-only">
                      Your message
                    </label>
                    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <div className="p-2 rounded-lg">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <circle cx="10" cy="10" r="6" fill={statusColor} />
                        </svg>
                        <span className="sr-only">Status on inquiry</span>
                      </div>

                      <button
                        type="button"
                        id="upload-btn"
                        onMouseEnter={() => setHoveredPostingId(posting.id)}
                        onMouseLeave={() => setHoveredPostingId(null)}
                        className="relative inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            fill="currentColor"
                            d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                          />
                        </svg>

                        <Tooltip show={hoveredPostingId === posting.id}>
                          No uploaded images
                        </Tooltip>
                        <span className="sr-only">Uploaded images</span>
                      </button>

                      <textarea
                        id={`chat-${posting.id}`}
                        rows={1}
                        className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your message..."
                        defaultValue={posting.text}
                      ></textarea>

                      <div className="inline-flex gap-1 justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M2 21h4V9H2v12zM22 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32a1 1 0 0 0-.29-.7L13.17 2 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1z" />
                        </svg>
                        <span className="sr-only">Thumbs up</span>
                        <span id="up-votes">{currentUpVotes}</span>
                      </div>
                      <div className="inline-flex gap-1 justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M22 3h-4v12h4V3zM2 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32a1 1 0 0 0 .29.7L10.83 22l5.58-5.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2H5c-.83 0-1.54.5-1.84 1.22L.14 11.27c-.09.23-.14.47-.14.73v1z" />
                        </svg>
                        <span className="sr-only">Thumbs down</span>
                        <span id="down-votes">{currentDownVotes}</span>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                      >
                        <svg
                          className="w-5 h-5 rotate-90 rtl:-rotate-90"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                        >
                          <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                        </svg>
                        <span className="sr-only">Send request</span>
                      </button>
                    </div>
                  </form>
                );
              })}
            </div>
          </div>
        )}

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

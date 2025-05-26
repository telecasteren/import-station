"use client";
import { useState } from "react";
import Image from "next/image";
import StatusItem from "./statusItem";

type DropdownVisibility = {
  requests: boolean;
  services: boolean;
};

export default function SideBar() {
  const [dropdownVisibility, setDropdownVisibility] =
    useState<DropdownVisibility>({
      requests: false,
      services: false,
    });

  const toggleDropdown = (dropdownMenu: keyof DropdownVisibility) => {
    setDropdownVisibility((prevState) => {
      const newState: DropdownVisibility = {
        requests: false,
        services: false,
      };

      newState[dropdownMenu] = !prevState[dropdownMenu];

      return newState;
    });
  };

  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                target="_self"
                rel="noopener noreferrer"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white"
              >
                <Image
                  src="/cubit-blue.svg"
                  alt="Cubit logo"
                  width={22}
                  height={22}
                  priority
                />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>

            {/* Requests */}
            <li>
              <button
                type="button"
                className="cursor-pointer flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                data-collapse-toggle="dropdown-example"
                onClick={() => toggleDropdown("requests")}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.5 0a2.5 2.5 0 0 0-2.45 2H3.5A1.5 1.5 0 0 0 2 3.5v13A1.5 1.5 0 0 0 3.5 18h11a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 2h-.55A2.5 2.5 0 0 0 11.5 0h-5Zm.5 2.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5Zm5 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5ZM5.75 7a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 5.75 7Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 5.75 10Zm0 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 5.75 13Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Requests
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <ul
                id="dropdown-example"
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  dropdownVisibility.requests ? "max-h-[300px]" : "max-h-0"
                } py-2 space-y-2`}
              >
                <StatusItem
                  href="/docs/userfeed/requests/"
                  label="Pending"
                  color="#facc15"
                  count={12}
                />
                <StatusItem
                  href="#"
                  label="Reviewing"
                  color="#fb923c"
                  count={5}
                />
                <StatusItem
                  href="#"
                  label="Planning"
                  color="#2563eb"
                  count={8}
                />
                <StatusItem
                  href="#"
                  label="In progress"
                  color="#a855f7"
                  count={3}
                />
                <StatusItem
                  href="#"
                  label="Completed"
                  color="#22c55e"
                  count={20}
                />
                <StatusItem href="#" label="Closed" color="#111827" count={7} />
              </ul>
            </li>

            {/* Services */}
            <li>
              <button
                type="button"
                className="cursor-pointer flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                data-collapse-toggle="dropdown-example"
                onClick={() => toggleDropdown("services")}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.5 0a2.5 2.5 0 0 0-2.45 2H3.5A1.5 1.5 0 0 0 2 3.5v13A1.5 1.5 0 0 0 3.5 18h11a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 2h-.55A2.5 2.5 0 0 0 11.5 0h-5Zm.5 2.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5Zm5 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5ZM5.75 7a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 5.75 7Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 5.75 10Zm0 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 5.75 13Z" />
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Services
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  dropdownVisibility.services ? "max-h-[300px]" : "max-h-0"
                } py-2 space-y-2`}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" rx="3" ry="3" fill="#4B5563" />
                  <path
                    d="M10 5a1 1 0 011 1v5a1 1 0 01-2 0V6a1 1 0 011-1zm0 9.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                    fill="white"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Feedback</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

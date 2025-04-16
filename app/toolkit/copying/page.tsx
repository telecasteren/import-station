"use client";
import { useState, useEffect } from "react";
import { scriptInfo } from "../script-info/scriptInfo.js";
import Link from "next/link";
import Button from "../../components/scriptButton";
import SideBar from "../../components/toolkit/sideBar";

export default function CopyScripts() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const response = "YES";

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [success]);

  function handleScripts(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const scriptId = parseInt(
      event.currentTarget.getAttribute("data-script-id") || "",
      10
    );

    const selectedScript = scriptInfo.find((script) => script.id === scriptId);

    if (!selectedScript) {
      setError("Script not found.");
      return;
    }

    setWarning(
      `You clicked ${selectedScript.name}, this will: ${selectedScript.desc}, are you sure you want to proceed?`
    );

    if (!response || response === null) {
      setError("Script failed for some reason.");
      return;
    }

    if (response) {
      setTimeout(() => {
        setSuccess("Script has been successfully executed!");
        return;
      }, 1000);
    }
  }

  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center ml-[18%] justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center">
        <div id="menu">
          <SideBar />
        </div>

        <h1 className="text-4xl">Copy data</h1>

        <h2>This is where you can copy data from one tenant to another.</h2>

        <section
          id="scripts-container"
          className="grid grid-cols-1 gap-x-12 gap-y-6 mt-4"
        >
          <div id="copy-stuff">
            <h3 className="text-xl">Copy stuff:</h3>
            <div className="grid grid-cols-1 gap-6 mt-4">
              <Button
                onClick={handleScripts}
                text="Copy Letters"
                dataScriptId={2}
              />
              <Button
                onClick={handleScripts}
                text="Copy Risk Assessment"
                dataScriptId={5}
              />
            </div>
          </div>

          <div id="other-stuff">
            <h3 className="text-xl">Other stuff:</h3>
            <div className="grid grid-cols-1 gap-6 mt-4">
              <Button
                onClick={handleScripts}
                text="Script 1"
                dataScriptId={0}
              />
              <Button
                onClick={handleScripts}
                text="Script 2"
                dataScriptId={0}
              />
            </div>
          </div>

          <div id="terminal-container">
            <div
              id="web-terminal"
              className="rounded-md bg-[#385690] dark:bg-black text-white p-4 font-mono w-[600px] h-[400px] overflow-y-auto"
            >
              <div></div>
              <input
                className="bg-[#385690] border-none outline-none w-full dark:bg-black"
                type="text"
                autoFocus
              />
              <div id="alert-container" className="p-2 flex flex-wrap w-full">
                {warning && <p className="text-yellow-600">{warning}</p>}
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
              </div>
            </div>
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

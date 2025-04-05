"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/scriptButton";
import { scriptInfo } from "./script-info/scriptInfo.js";

export default function Toolkit() {
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
      `Your clicked ${selectedScript.name}, this will: ${selectedScript.desc}, are you sure you want to proceed?`
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
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center">
        <Image
          src="/cubit-blue.svg"
          alt="Cubit logo"
          width={90}
          height={19}
          priority
        />

        <h1 className="text-4xl">Toolkit</h1>

        <p>
          There will be many paths. You must find the one that suits the needs
          of your journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Button
            onClick={handleScripts}
            text="Create Tenant"
            dataScriptId={1}
          />
          <Button
            onClick={handleScripts}
            text="Copy Letters"
            dataScriptId={2}
          />
          <Button
            onClick={handleScripts}
            text="Update Frequencies"
            dataScriptId={3}
          />
          <Button
            onClick={handleScripts}
            text="Copy Risk Assessment"
            dataScriptId={4}
          />
        </div>
        <div id="alert-container" className="m-5 flex flex-wrap w-1/2">
          {warning && <p className="text-yellow-600">{warning}</p>}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <Link href="#" className="underline">
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

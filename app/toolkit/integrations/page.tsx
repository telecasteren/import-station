"use client";
import Link from "next/link";
import SideBar from "../../components/toolkit/sideBar";

function showDocs() {
  const section1 = document.getElementById("doc1");
  const btn1 = document.getElementById("docBtn1");

  if (btn1) {
    section1?.classList.toggle("hidden");
  }
}

export default function Integrations() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center ml-[18%] justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center w-[80%]">
        <div id="menu">
          <SideBar />
        </div>

        <section id="top-content" className="w-full">
          <h1 className="text-4xl">Cubit Integrations</h1>

          <h2>
            A list of integrations and their documentation.
            <br />
            Toggle which documentation you'd like to read by clicking it's name.
          </h2>

          <div>
            <ul className="list-disc m-6 flex no-wrap gap-12">
              <li>
                <a
                  id="docBtn1"
                  className="hover:underline text-amber-400 cursor-pointer hover:text-[#205a83]"
                  onClick={showDocs}
                >
                  AddOrUpdatePlant
                </a>
              </li>
              <li>
                <a className="hover:underline text-amber-400 cursor-pointer hover:text-[#205a83]">
                  Elwin API
                </a>
              </li>
              <li>
                <a className="hover:underline text-amber-400 cursor-pointer hover:text-[#205a83]">
                  Cadaster sync
                </a>
              </li>
              <li>
                <a className="hover:underline text-amber-400 cursor-pointer hover:text-[#205a83]">
                  Company sync
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="doc1" className="hidden w-full">
          <div className="w-full h-[80vh] overflow-auto">
            <embed
              src="/API-Spesifikasjon-Kunder-anlegg.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
        </section>
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

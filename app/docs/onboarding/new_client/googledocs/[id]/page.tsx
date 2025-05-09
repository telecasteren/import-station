"use client";
import { useParams } from "next/navigation";
import { docMap } from "@/app/api/source/googledocs_map/docMap";
import { useEffect, useState } from "react";
import Link from "next/link";
import SideBar from "../../../../../components/onboarding/sideBar";

/**
 * GoogleDocsViewer dynamically fetches and displays
 * a Google Docs document inside an iframe, based on a URL parameter slug.
 *
 * The component:
 * - Extracts a document ID from the URL using Next.js's `useParams` hook.
 * - Validates the ID against a predefined `docMap`.
 * - Fetches the actual document URL via an API call.
 * - Displays a loading message, error message, or the embedded document.
 *
 * @component
 * @returns {GoogleDocsViewer} A fully rendered document viewer page with navigation and embedded document content.
 */
export default function GoogleDocsViewer() {
  const params = useParams();
  const [docUrl, setDocUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  if (!params?.id || Array.isArray(params.id)) {
    return <p>Invalid document ID.</p>;
  }
  const slug = Array.isArray(params.id) ? params.id[0] : params.id;
  if (!slug || !docMap[slug]) {
    return <p>Invalid or missing document ID.</p>;
  }

  const docInfo = docMap[slug];

  useEffect(() => {
    const fetchDocUrl = async () => {
      try {
        setLoading(true);

        // Debugging ---------------
        const currentDocId = docMap[slug]?.id;
        if (!currentDocId) {
          console.error(
            `[GoogleDocsViewer] Empty ID for: ${slug}. API call will fail.`
          );
          setError(`Document ID is missing for ${slug}.`);
          setLoading(false);
          return;
        }
        //--------------------

        const res = await fetch(`/api/get-doc?id=${docMap[slug].id}`);
        const data = await res.text();

        const cleanUrl = data.trim().replace(/^"|"$/g, "");
        setDocUrl(cleanUrl);
      } catch (error) {
        setError("Failed to fetch document URL.");
      } finally {
        setLoading(false);
      }
    };

    if (slug && docMap[slug]) {
      fetchDocUrl();
    } else {
      setError("Invalid document slug or mapping not found.");
      setLoading(false);
    }
  }, [slug]);

  if (loading)
    return (
      <p className="flex flex-wrap justify-center items-center mt-100">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="flex flex-wrap justify-center items-center mt-100">
        {error}
      </p>
    );
  if (!docUrl) return <p>No document URL found.</p>;

  return (
    <div className="grid grid-rows-[10px_1fr_10px] md:ml-[18%] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 w-[80%] items-center">
        <h1 className="text-4xl">New fire client</h1>
        <div id="menu">
          <SideBar />
        </div>

        <h2 className="text-4xl">{docInfo.name}</h2>

        <div className="w-full h-[100vh] overflow-auto">
          <iframe
            src={docUrl}
            width="100%"
            height="100%"
            style={{ border: "none", padding: "20px" }}
          ></iframe>
        </div>
        {/* <a
          href=""
          className="underline hover:no-underline hover:text-[#205a83]"
        >
          See in Google Docs
        </a> */}

        <Link
          href="/docs/onboarding/new_client/"
          className="text-lg underline hover:no-underline hover:text-[#205a83]"
        >
          Back to onboarding
        </Link>
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

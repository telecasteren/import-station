"use client";
import { useParams } from "next/navigation";
import { docMap } from "@/app/api/source/googledocs_map/docMap";
import { useEffect, useState } from "react";
import Link from "next/link";
import SideBar from "../../../../../../components/onboarding/sideBar";

export default function GoogleDocsViewer() {
  const params = useParams();
  const [docData, setDocData] = useState<any | null>(null);
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
    const fetchData = async () => {
      try {
        console.log("docInfo.id:", docInfo.id);

        if (!docInfo?.id) {
          setError("Document ID is missing from docMap.");
          setLoading(false);
          return;
        }

        setLoading(true);
        const res = await fetch(`/api/get-doc?id=${docInfo.id}`);
        const data = await res.json();
        setDocData(data);
        console.log("Doc response:", data);
      } catch (error) {
        setError("Failed to fetch the document.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
  if (!docData?.body?.content) return <p>No document data found.</p>;

  console.log("Document content array:", docData.body.content);

  const { title, body } = docData;
  const docUrl = `https://docs.google.com/document/d/${docInfo.id}/preview`;

  // Test of html converter function:
  function renderDocContent(content: any[]) {
    let html = "";
    content.forEach((item) => {
      if (item.paragraph?.elements) {
        html += "<p>";
        item.paragraph.elements.forEach((element: any) => {
          if (element.textRun?.content) {
            let text = element.textRun.content;
            let style = "";
            if (element.textRun.textStyle?.bold) {
              text = `<strong>${text}</strong>`;
            }
            if (element.textRun.textStyle?.italic) {
              text = `<em>${text}</em>`;
            }
            if (element.textRun.textStyle?.underline) {
              text = `<u>${text}</u>`;
            }
            if (element.textRun.textStyle?.backgroundColor?.color?.rgbColor) {
              const rgb =
                element.textRun.textStyle.backgroundColor.color.rgbColor;
              style += `background-color: rgb(${rgb.red * 255 || 0}, ${
                rgb.green * 255 || 0
              }, ${rgb.blue * 255 || 0});`;
            }
            if (element.textRun.textStyle?.foregroundColor?.color?.rgbColor) {
              const rgb =
                element.textRun.textStyle.foregroundColor.color.rgbColor;
              style += `color: rgb(${rgb.red * 255 || 0}, ${
                rgb.green * 255 || 0
              }, ${rgb.blue * 255 || 0});`;
            }
            if (style) {
              html += `<span style="${style}">${text}</span>`;
            } else {
              html += text;
            }
          }
        });
        html += "</p>";
      } else if (item.bullet) {
        html += "<li>";
        if (item.paragraph?.elements?.[0]?.textRun?.content) {
          html += item.paragraph.elements[0].textRun.content.trim();
        }
        html += "</li>";
      }
    });
    return html;
  }

  return (
    <div className="grid grid-rows-[10px_1fr_10px] md:ml-[18%] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 w-[80%] items-center">
        <h1 className="text-4xl">New fire client</h1>
        <div id="menu">
          <SideBar />
        </div>

        <h2 className="text-4xl">{docInfo.name}</h2>

        <div className="w-full h-[80vh] overflow-auto">
          <div
            className="w-full h-[80vh] overflow-auto bg-white p-12 rounded-sm text-black"
            dangerouslySetInnerHTML={{
              __html: renderDocContent(docData?.body?.content || []),
            }}
          />
        </div>

        <Link
          href="/docs/onboarding/new_client/fire/"
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

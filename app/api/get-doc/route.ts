import { NextRequest, NextResponse } from "next/server";
import { getGoogleDocsUrls } from "@/app/api/source/google_api/googledocs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (typeof id !== "string" || !id) {
    return new NextResponse(JSON.stringify({ error: "Missing document ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const docUrl = await getGoogleDocsUrls(id);
    if (docUrl) {
      return new Response(JSON.stringify(docUrl), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error fetching doc URLs in route:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch document metadata" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

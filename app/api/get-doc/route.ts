// import { NextRequest } from "next/server";
// import { getGoogleDocs } from "@/app/api/source/google_api/googledocs";

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");

//   if (typeof id !== "string" || !id) {
//     console.log("bananas!");
//     return new Response(JSON.stringify({ error: "Missing document ID" }), {
//       status: 400,
//     });
//   }

//   try {
//     const doc = await getGoogleDocs(id);
//     return new Response(JSON.stringify(doc), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error fetching doc:", error);
//     return new Response(JSON.stringify({ error: "Failed to fetch document" }), {
//       status: 500,
//     });
//   }
// }

// route.ts
import { NextRequest } from "next/server";
import { getGoogleDocs } from "@/app/api/source/google_api/googledocs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (typeof id !== "string" || !id) {
    console.log("bananas!");
    return new Response(JSON.stringify({ error: "Missing document ID" }), {
      status: 400,
    });
  }

  try {
    const docMetadata = await getGoogleDocs(id);
    return new Response(JSON.stringify(docMetadata), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching doc metadata in route:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch document metadata" }),
      {
        status: 500,
      }
    );
  }
}

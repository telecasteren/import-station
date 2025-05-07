import { google, docs_v1 } from "googleapis";
import path from "path";

const SERVICE_ACCOUNT_KEY_PATH = path.join(
  process.cwd(),
  "app/api/source/google_api/service-worker.json"
);

export async function getGoogleDocs(
  docId: string
): Promise<docs_v1.Schema$Document | any> {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_KEY_PATH,
      scopes: ["https://www.googleapis.com/auth/documents.readonly"],
    });
    console.log("GoogleAuth client created.");

    const authClient = (await auth.getClient()) as docs_v1.Options["auth"];

    const docs = google.docs({
      version: "v1",
      auth: authClient,
    });
    console.log("Docs API client created.");

    const res = await docs.documents.get({
      documentId: docId,
    });

    console.log("Full google docs API response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error in fetching the full document:", error);
    throw error;
  }
}

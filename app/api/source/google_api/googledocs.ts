import { google, docs_v1 } from "googleapis";

export async function getGoogleDocsUrls(docId: string): Promise<string | null> {
  try {
    const privateKey =
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "";
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL || "";

    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: privateKey,
        client_email: clientEmail,
      },
      scopes: ["https://www.googleapis.com/auth/documents.readonly"],
    });

    const authClient = (await auth.getClient()) as docs_v1.Options["auth"];

    const docs = google.docs({
      version: "v1",
      auth: authClient,
    });
    console.log("Houston we are live.");

    const res = await docs.documents.get({
      documentId: docId,
      fields: "documentId,title",
    });

    const docUrl = `https://docs.google.com/document/d/${res.data.documentId}/preview`;
    console.log("API response:", docUrl);
    return docUrl;
  } catch (error) {
    console.error("Error in fetching document URL metadata:", error);
    throw error;
  }
}

export const docMap: Record<string, { id: string; name: string }> = {
  "startup-meeting": {
    id: process.env.DOC_ID_EMAIL_FIRE_DATA || "",
    name: "Startup Meeting Template",
  },
  "data-mapping": {
    id: process.env.DOC_ID_EMAIL_FIRE_TESTDATA || "",
    name: "Data & Mapping Template",
  },
  "go-live": {
    id: process.env.DOC_ID_EMAIL_FIRE_GOLIVE || "",
    name: "Go-Live Template",
  },
};

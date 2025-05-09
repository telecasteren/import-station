export const docMap: Record<string, { id: string; name: string }> = {
  "fire-startup-meeting": {
    id: process.env.NEXT_PUBLIC_DOC_ID_EMAIL_FIRE_DATA || "",
    name: "Startup Meeting Template",
  },
  "fire-data-mapping": {
    id: process.env.NEXT_PUBLIC_DOC_ID_EMAIL_FIRE_TESTDATA || "",
    name: "Data & Mapping Template",
  },
  "fire-go-live": {
    id: process.env.NEXT_PUBLIC_DOC_ID_EMAIL_FIRE_GOLIVE || "",
    name: "Go-Live Template",
  },

  "el-startup-meeting": {
    id: process.env.NEXT_PUBLIC_DOC_ID_EMAIL_EL_DATA || "",
    name: "Startup Meeting Template",
  },
  "el-data-mapping": {
    id: process.env.NEXT_PUBLIC_DOC_ID_EMAIL_EL_TESTDATA || "",
    name: "Data & Mapping Template",
  },
  "el-go-live": {
    id: process.env.NEXT_PUBLIC_DOC_ID_EMAIL_EL_GOLIVE || "",
    name: "Go-Live Template",
  },
};

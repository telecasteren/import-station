/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DOC_ID_EMAIL_FIRE_DATA: process.env.DOC_ID_EMAIL_FIRE_DATA,
    DOC_ID_EMAIL_FIRE_GOLIVE: process.env.DOC_ID_EMAIL_FIRE_GOLIVE,
  },
};

export default nextConfig;

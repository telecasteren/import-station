# Cubit Toolkit for imports and documentation

![image](/public/screenshot.png)

### Description

The import-station is here to serve! This app allows you to find the company documentation,</br>
import client data, run simple scripts for updating existing data and more.
</br>
</br>
Right now only the framework for a mockup is built. Actual working script-buttons and imports are not yet implemented.

#### Features

- Upload CSV file
- Documentation library
- Onboarding platform
- User feedback platform

#### Coming features

- Storing uploaded data
- Run simple jobs for updates/fixes
- User ability to add requests and feedback
- AI search engine for local doc library

#### Feature ideas

- Data/documentation exports?
- Configure settings for how to import data?

## Tech stack and setup

- Next.js
- React
- Typescript
- Tailwind CSS
- Firebase/Firestore database
- Deployed with Vercel

## Getting Started

First, clone the repo:

```bash
git@github.com:telecasteren/import-station.git
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The pages auto-updates as you edit the file.

## Deployed on Vercel

Deployed with Vercel. To deploy directly run `vercel --prod`, but Vercel is connected to the Github repository and<br/>
`git push origin main` will trigger deployment build on Vercel.

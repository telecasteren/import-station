# GoogleDocsViewer component

### What does it do?

This feature displays a google docs document in a UI.<br/>
It utilises a service account in the Google API console for the company (Cubit), that fetches<br/>
the url's of specified google docs and displays them in a preview for the user.

### What is the purpose?

The purpose of this component is to be an additional feature on the platform for a independent library of current updated company documentation. Adds to the value of being a one-stop shop for updated company documentation.

### Where are the document id's stored?

Currently, since this is an MVP, they are stored as environment variables in an env file to keep them safe from the "general public". This is to make a security precaution against sharing. With further development, upgraded security and user auth is recommended.

### How to use it?

- The user navigates to the GoogleDocsViewer, via links in /docs/onboarding/page.tsx
- Depending on the link they click, the corresponding document will be displayed in the iFrame view

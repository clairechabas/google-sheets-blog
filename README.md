# 📑 Blog Using Google Sheets As Headless CMS

Playing with the Google Sheets API to serve as database for a blog.
This repo is free to use and can be used as a starter for a project using the Google Sheets API.

<br />

## Getting Started
1. Clone this repo
2. Install dependencies
  ```bash
  npm install
  # or
  yarn install
  # or
  pnpm install
  ```
3. Create a `.env.local` file for your environment variables by copying the example file:
  ```bash
  cp .env.local.example .env.local
  ```
4. Generate your API keys JSON file in the [Google Sheets API page](https://console.cloud.google.com/apis/library/sheets.googleapis.com) in your Google Cloud Console. Place that JSON file where you want in your project, just make sure to had its location to you `.gitignore` so it doesn't get committed. 
Finally, paste the location to that file as your `GOOGLE_APPLICATION_CREDENTIALS` environment variable's value.
If you're getting serious with your project make sure to check [the best practices recommended by Google on how to manage those service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys?_ga=2.135215793.-1058321791.1680461933) before releasing it to production.
5. Create a spreadsheet in your Google Drive. Add the columns you need for your project's database table. Make it available publicly with "Viewer" permission only. Copy the spreadsheet ID from the shareable URL (you obtain the URL y clicking "Copy link" in the "Share" modal). Paste that ID as your `GSHEETS_FILE_ID` environment variable's value.
7. In the `/src/pages/posts/[id].tsx` file make sure to update the `range` constant with your own spreadsheet's sheet (or tab) name in place of `posts` if you named it differently (by default it's generaly 'Sheet1' or 'Sheet 1').
7. Start the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  ```
Finally, open [http://localhost:3000](http://localhost:3000) in your browser and navigate to [http://localhost:3000](http://localhost:3000/posts/2) to see your first row's content!

<br />

This project is using [Next.js](https://nextjs.org/). It was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and is using the [Google Sheets API](https://developers.google.com/sheets/api/reference/rest?hl=fr).

<br />

Enjoy!
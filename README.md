# Frontend (Web App) Setup Guide

This guide walks you through downloading, installing, and running the frontend of the project on your own computer. It's written so that even if you've never set up a project like this before, you'll be able to follow along.

## What You'll Need Before You Start

Make sure you have these installed on your computer:

1. **Node.js** — this is what runs the project. Download it from [nodejs.org](https://nodejs.org). Version 18 or higher works fine.
2. **A code editor** (optional but helpful) — something like [VS Code](https://code.visualstudio.com/) makes it easier to look at the code if you need to.
3. **A terminal** — on Mac this is the built-in "Terminal" app, on Windows you can use "Command Prompt", "PowerShell", or "Git Bash".

To check if Node.js is already installed, open your terminal and type:

```bash
node -v
```

If you see a version number (like `v20.11.0`), you're good to go. If you get an error, install Node.js first.

## Step 1: Get the Project Files

If you downloaded a zip file, extract (unzip) it to a folder on your computer. 

## Step 2: Navigate to the Web Folder

The frontend code lives inside a folder called `web`. Open your terminal, and move into that folder using the `cd` (change directory) command:

```bash
cd apps/web
```

If your folder structure is different (for example, if `web` is at the top level), just adjust the path — the important part is that your terminal is sitting *inside* the `web` folder before continuing.

## Step 3: Install the Project's Dependencies

The project relies on a bunch of external code libraries (things like React, Tailwind, and others) to work. These need to be downloaded before anything will run. Do this by typing:

```bash
npm install
```

This might take a minute or two. It creates a folder called `node_modules` — you don't need to open or touch this folder, it's just where all the downloaded libraries live.

## Step 4: Set Up Your Environment Variables

The project needs a few pieces of configuration to know where to find things like the backend server. This is stored in a file called `.env` inside the `web` folder.

Look for a file called `.env.example` (if one exists) and make a copy of it named `.env`. If there isn't an example file, create a new file called `.env` in the `web` folder and add the following, filling in the actual values you've been given:

```
VITE_POCKETBASE_URL=your_pocketbase_url_here
VITE_API_SERVER_URL=your_api_server_url_here
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key_here
```

A few notes on this:
- These values usually point to your backend and PocketBase server (covered in the backend README). If you're running everything locally, these are typically local addresses like `http://localhost:8090` or `http://localhost:3001`.
- Never share your `.env` file publicly or upload it to GitHub — it's meant to stay private on your machine.

## Step 5: Run the Project

Now for the fun part. Start the development server by typing:

```bash
npm run dev
```

If everything worked, your terminal will show a message with a local address, usually something like:

```
Local:   http://localhost:3000/
```

Open that link in your web browser, and you should see the app running.

## Step 6: Stopping the Server

When you're done, go back to your terminal and press `Ctrl + C` (on both Mac and Windows) to stop the server.

That's it — you should now have the frontend running locally on your machine.

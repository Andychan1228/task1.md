# Task 1: Building the Next.js Frontend

## Overview
In this task, I set up the foundation for the AI Summary App using Next.js and Tailwind CSS. I also created a basic API endpoint to verify the backend health.

---

## Step 1: Project Initialization
I used `create-next-app` to bootstrap the application with the following configuration:
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint

### Command Executed:
```bash
npx create-next-app@latest ai-summary-app
```
![alt text](images/SC1.png)

## Step 2: Clean Up and Create the UI
Cleaned up the boilerplate code and created a simple landing page for our AI Summary App.
1. Update app/page.tsx
    Replaced the default content with the following code:import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          AI Summary App
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Upload Documents -&gt;
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Easily upload your PDFs or text files for analysis.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            AI Analysis -&gt;
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get instant summaries and insights powered by AI.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Secure Storage -&gt;
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Your documents are stored securely in Supabase.
          </p>
        </div>
      </div>
    </main>
  );
}
![alt text](images/SC2.png)

## Step 3: Create a Health Check API
Created a simple API endpoint to check if the backend is running.

1. Create the file
Path: app/api/health/route.ts
2. Add the code
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'AI Summary App is running correctly',
    timestamp: new Date().toISOString()
  });
}
![alt text](images/SC3.png)
## Conclusion

Successfully initialized the project, cleaned up the boilerplate code, created a custom UI using Tailwind CSS, and established a basic backend API endpoint.
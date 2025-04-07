This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Daxora Dashboard

A modern full-stack web application built with Next.js 13, featuring a stylish login, account creation (signup), and a personalized dashboard. The application uses Prisma with SQLite for persistent data storage, Tailwind CSS for an attractive, responsive UI, and Next.js's App Router for a streamlined routing experience.

## Overview

**Daxora Dashboard** offers:
- **User Authentication:** Secure login and account creation (signup) pages.
- **User Dashboard:** Displays user details and active subscriptions.
- **Persistent Storage:** Integration with an external SQLite database using Prisma.
- **Modern UI/UX:** Responsive design with Tailwind CSS, gradient backgrounds, smooth transitions, and creative styling.
- **API Endpoints:** Custom API routes for login, signup, and fetching subscriptions.

## Features

- **Login & Signup:**  
  - **Login Page:** Users log in with their email and password.  
  - **Signup Page:** New users can create an account by providing their name, email, and password.
  - Both pages are integrated with API endpoints that validate and store user data in a SQLite database via Prisma.

- **User Dashboard:**  
  - Displays the logged-in user’s name and email.  
  - Shows a list of active subscriptions fetched from an API endpoint.
  - Includes a logout function that clears user data and redirects back to the login page.

- **API Endpoints:**  
  - **POST `/api/login`:** Validates login credentials against the SQLite database.
  - **POST `/api/signup`:** Creates a new user account in the SQLite database.
  - **GET `/api/subscriptions`:** Returns a list of active subscriptions (mock data).

## Technologies

- **Next.js 13 App Router:**  
  Provides folder-based routing, server/client components, and modern data fetching.
  
- **React 18:**  
  For building interactive user interfaces.
  
- **Tailwind CSS:**  
  Utility-first CSS framework for rapid, responsive UI development.
  
- **Prisma:**  
  Next-generation ORM used for interacting with an SQLite database.
  
- **SQLite:**  
  Lightweight file-based database for local persistence.
  
- **Vercel:**  
  Recommended hosting platform for seamless deployment of Next.js applications.

## Project Structure

daxora-dashboard/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── login/
│   │       │   └── route.js          # API endpoint for login (uses Prisma)
│   │       ├── signup/
│   │       │   └── route.js          # API endpoint for signup (uses Prisma)
│   │       └── subscriptions/
│   │           └── route.js          # API endpoint returning active subscriptions
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.js               # Login page with form and API integration
│   │   └── signup/
│   │       └── page.js               # Signup page for creating new accounts
│   ├── dashboard/
│   │   └── page.js                   # Dashboard page for logged-in users
│   ├── globals.css                   # Global CSS with Tailwind directives and custom styles
│   ├── layout.js                     # Global layout with metadata and font integration
│   └── page.js                       # Root page (can redirect to /auth/login)
├── lib/
│   └── prisma.js                     # Prisma client instance for database operations
├── prisma/
│   └── schema.prisma                 # Prisma schema defining the database models
├── public/                           # (Optional) Static assets like images, fonts, etc.
├── .env                              # Environment file with DATABASE_URL for SQLite
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

## Pages

**Login Page (/login)**
Displays a login form.

Submits credentials to /api/login.

Redirects authenticated users to /dashboard.

Contains a link to the signup page.

**Signup Page (/signup)**
Presents a signup form for account creation.

Submits user data to /api/signup.

On successful signup, logs the user in and redirects to /dashboard.

**Dashboard Page (/dashboard)**
Shows user details (name and email).

Fetches and displays active subscriptions.

Provides a logout option that clears user data and redirects to /login.

**Root Page (/)**
Can be configured to redirect to /login.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Daxora Dashboard

This full-stack web application is built with Next.js 13. It features a login page, account creation (signup), and a dashboard. The app uses Prisma with SQLite for data storage, Tailwind CSS for the UI, and Next.js's App Router for routing.

## My Example
daxorafinal.vercel.app

## Overview

Features:
- User Authentication: Secure login and signup pages that validate credentials and create new accounts.
- User Dashboard: Displays user details (name and email) along with a list of active subscriptions.
- Persistent Storage: Uses an external SQLite database via Prisma for storing user information.
- Modern UI/UX: Utilizes Tailwind CSS for a responsive and stylish design, featuring gradients, smooth transitions, and creative styling.
- Custom API Endpoints: Implements API routes for login, signup, and fetching subscription data using Next.js's App Router.

## Technologies

- **Next.js 13 (App Router)**: Provides folder-based routing and server/client component support.
- **React 18**: For building dynamic and interactive user interfaces.
- **Tailwind CSS**: CSS framework for responsive UI development.
- **Prisma**: An ORM used to interact with an SQLite database.
- **SQLite**: File-based database for local data persistence.
- **Vercel**: Hosting platform for deploying Next.js applications.

## Project Structure

- **app/**
  - **api/**
    - **login/route.js**: API endpoint for login that validates credentials using Prisma.
    - **signup/route.js**: API endpoint for creating new user accounts in the SQLite database.
    - **subscriptions/route.js**: API endpoint returning a list of active subscriptions.
  - **dashboard/page.js**: Dashboard page for logged-in users.
  - **login/page.js**: Login page with form and API integration.
  - **signup/page.js**: Signup page for creating new accounts.
  - **globals.css**: Global CSS file that includes Tailwind CSS directives and custom styles.
  - **layout.js**: Global layout file that sets metadata and font integration.
  - **page.js**: The root page which can be configured to redirect to /login.
- **lib/**
  - **prisma.js**: Exports the Prisma client instance for database operations.
- **prisma/**
  - **schema.prisma**: Defines the Prisma schema and database models.
- **.env**: Contains environment variables (such as the DATABASE_URL for SQLite).
- **package.json, tailwind.config.js, postcss.config.js**: Project configuration files.

## Setup Instructions

To set up and run the project locally, follow these steps:

1. Clone the repository from your Git hosting service.
2. Open a terminal and navigate to the project’s root directory.
3. Run the command to install all dependencies using npm.
4. Set up Prisma and SQLite:
   - Initialize Prisma if it has not been done yet.
   - In the .env file, set the DATABASE_URL to "file:./dev.db".
   - Update the prisma/schema.prisma file with the User model.
   - Run the Prisma migration command to create the SQLite database.
5. Start the development server by running the appropriate npm command.
6. Open your web browser and go to http://localhost:3000 to see the app. The root page will redirect you to the login page.

## API Endpoints

**POST /api/login**  
This endpoint validates user credentials using Prisma.  
Expected Request Body (JSON):
- email: the user's email address
- password: the user's password  
Response: On success, returns the user object; on failure, returns an error message with HTTP status 401.

**POST /api/signup**  
This endpoint creates a new user account in the SQLite database.  
Expected Request Body (JSON):
- name: the user's full name
- email: the user's email address
- password: the user's password  
Response: On success, returns the newly created user object with HTTP status 201; if the email is already registered, returns an error with HTTP status 400.

**GET /api/subscriptions**  
Returns a list of active subscriptions in JSON format.

## Pages

- **Login Page (/login)**:  
  Provides a login form and submits credentials to the /api/login endpoint. Contains a link to the signup page.

- **Signup Page (/signup)**:  
  Offers a form for creating a new account and submits data to the /api/signup endpoint. On successful signup, the user is logged in and redirected to the dashboard.

- **Dashboard Page (/dashboard)**:  
  Displays the logged-in user’s details and a list of active subscriptions. Includes a logout button that clears user data and redirects to the login page.

- **Root Page (/)**:  
  Can be configured to redirect to /login.

## Deployment on Vercel

To deploy the project on Vercel, do the following:

1. Push your code to a Git repository (such as GitHub, GitLab, or Bitbucket).
2. Log in to Vercel and import your repository.
3. Vercel will automatically detect your Next.js 13 app and deploy it.
4. Your live app will be available at the URL provided by Vercel.
5. Future commits to your repository will trigger automatic redeployments.

## Customization & Future Enhancements

- UI Customization: Modify Tailwind CSS classes in globals.css and component files to change the look and feel.
- Advanced Authentication: Integrate token-based authentication or NextAuth.js for production-level security.
- Database Scaling: For production, consider using a more robust database (like PostgreSQL or MySQL).
- Feature Expansion: Add additional pages, API endpoints, and interactive elements to enhance the dashboard.

## License

This project is open source under the MIT License.

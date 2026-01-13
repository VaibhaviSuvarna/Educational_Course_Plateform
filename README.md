# Course Marketplace - CA, CS & CMA Courses

A full-stack course marketplace enabling users to browse and enroll in professional courses for Chartered Accountancy (CA), Company Secretary (CS), and Cost Management Accountancy (CMA).

## Features

- ✅ **Google OAuth Authentication** - Secure user sessions via NextAuth.js
- ✅ **Course Browsing** - Filter courses by category (CA, CS, CMA) with search functionality
- ✅ **Course Enrollment** - Users can enroll in courses and track their progress
- ✅ **User Dashboard** - View enrolled courses and available courses
- ✅ **Modern UI** - Built with Tailwind CSS, Radix UI, and Lucide React icons
- ✅ **SEO Optimized** - Meta tags and structured data for better search visibility
- ✅ **Vercel Ready** - Configured for seamless deployment on Vercel

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Authentication**: NextAuth.js with Google OAuth
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI (Dialog, Tabs, Dropdown Menu)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Google Cloud Console account (for OAuth)

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-here-generate-with-openssl-rand-base64-32

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

3. Generate a NextAuth secret:

```bash
openssl rand -base64 32
```

4. Set up Google OAuth:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable Google+ API
   - Go to Credentials → Create Credentials → OAuth 2.0 Client ID
   - Application type: Web application
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - `https://your-domain.vercel.app/api/auth/callback/google` (for production)

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts  # NextAuth configuration
│   │   └── enroll/                       # Enrollment API routes
│   ├── course/[id]/page.jsx              # Course detail page
│   ├── courses/page.jsx                  # Courses browsing page
│   ├── dashboard/page.jsx                 # User dashboard
│   └── layout.tsx                        # Root layout with SEO metadata
├── components/
│   ├── ui/                               # Radix UI components
│   ├── AuthDialog.jsx                    # Authentication dialog
│   ├── CourseDetail.jsx                  # Course detail component
│   ├── Navbar.jsx                        # Navigation bar
│   └── ...
├── data/
│   └── courses.js                        # Course data
└── lib/
    ├── auth.ts                           # Auth configuration
    ├── enrollments.ts                    # Enrollment management
    └── utils.ts                          # Utility functions
```

## Deployment on Vercel

1. Push your code to GitHub

2. Import your project on [Vercel](https://vercel.com)

3. Add environment variables in Vercel dashboard:
   - `NEXTAUTH_URL` - Your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
   - `NEXTAUTH_SECRET` - Same secret as in `.env.local`
   - `GOOGLE_CLIENT_ID` - Your Google OAuth Client ID
   - `GOOGLE_CLIENT_SECRET` - Your Google OAuth Client Secret

4. Update Google OAuth redirect URI to include your Vercel URL

5. Deploy! Vercel will automatically build and deploy your application.

## Features in Detail

### Course Browsing
- Filter courses by category (CA, CS, CMA)
- Search courses by title, description, or instructor
- Responsive grid layout with course cards

### Enrollment System
- Users can enroll in courses after authentication
- Enrollment status is tracked per user
- Dashboard shows enrolled courses with progress tracking

### User Dashboard
- View all enrolled courses
- See available courses for enrollment
- Track learning progress
- Quick access to continue learning

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXTAUTH_URL` | Base URL of your application | Yes |
| `NEXTAUTH_SECRET` | Secret key for NextAuth (generate with `openssl rand -base64 32`) | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | Yes |

## Notes

- Enrollment data is currently stored in-memory. For production, consider using a database (PostgreSQL, MongoDB, etc.)
- Course data is stored in `src/data/courses.js`. Consider migrating to a CMS or database for better management
- The application is optimized for SEO with proper meta tags and structured data

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

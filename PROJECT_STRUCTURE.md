# Project Structure

This document outlines the organized folder structure of the Course Marketplace application.

## 📁 Directory Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── api/                      # API routes
│   │   ├── auth/
│   │   │   └── [...nextauth]/   # NextAuth configuration
│   │   └── enroll/              # Enrollment API endpoints
│   ├── course/
│   │   └── [id]/                # Dynamic course detail page
│   ├── courses/                 # Courses browsing page
│   ├── dashboard/               # User dashboard page
│   ├── layout.tsx               # Root layout with SEO
│   └── page.jsx                 # Home page
│
├── components/                   # React components
│   ├── auth/                    # Authentication components
│   │   └── AuthDialog.jsx       # Google OAuth dialog
│   │
│   ├── course/                  # Course-related components
│   │   ├── Cards.jsx            # Course card component
│   │   ├── CourseDetail.jsx     # Course detail page component
│   │   └── HighlightedCourses.jsx # Featured courses section
│   │
│   ├── home/                    # Home page components
│   │   ├── ContactUs.jsx        # Contact section
│   │   ├── HeroSection.jsx      # Hero banner
│   │   ├── HomePage.jsx         # Main home page wrapper
│   │   └── InstituteInfo.jsx    # About institute section
│   │
│   ├── layout/                  # Layout components
│   │   ├── Navbar.jsx          # Navigation bar
│   │   └── Providers.tsx        # NextAuth session provider
│   │
│   └── ui/                      # Reusable UI components (Radix UI)
│       ├── button.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       └── tabs.tsx
│
├── data/                        # Static data
│   └── courses.js               # Course data array
│
├── lib/                         # Utility libraries
│   ├── auth.ts                  # NextAuth configuration
│   ├── enrollments.ts           # Enrollment management functions
│   └── utils.ts                 # General utilities
│
└── types/                       # TypeScript type definitions
    └── index.ts                 # Shared types (Enrollment, Course, etc.)
```

## 🗂️ Component Organization

### **Layout Components** (`components/layout/`)
- **Navbar.jsx**: Main navigation bar with authentication
- **Providers.tsx**: NextAuth session provider wrapper

### **Authentication Components** (`components/auth/`)
- **AuthDialog.jsx**: Google OAuth sign-in dialog

### **Course Components** (`components/course/`)
- **Cards.jsx**: Reusable course card component
- **CourseDetail.jsx**: Full course detail page with enrollment
- **HighlightedCourses.jsx**: Featured courses section for homepage

### **Home Components** (`components/home/`)
- **HomePage.jsx**: Main home page wrapper
- **HeroSection.jsx**: Hero banner with CTA
- **InstituteInfo.jsx**: About the institute section
- **ContactUs.jsx**: Contact information and social links

### **UI Components** (`components/ui/`)
- Radix UI primitives (Dialog, Tabs, Dropdown Menu, Button, Input)

## 📄 Key Files

### **API Routes**
- `app/api/auth/[...nextauth]/route.ts`: NextAuth handler
- `app/api/enroll/route.ts`: Enrollment POST/GET endpoints
- `app/api/enroll/[courseId]/route.ts`: Check enrollment status

### **Pages**
- `app/page.jsx`: Home page
- `app/courses/page.jsx`: Course browsing with filters
- `app/course/[id]/page.jsx`: Course detail page
- `app/dashboard/page.tsx`: User dashboard

### **Configuration**
- `lib/auth.ts`: NextAuth configuration
- `lib/enrollments.ts`: Enrollment state management
- `types/index.ts`: TypeScript type definitions

## 🎯 Benefits of This Structure

1. **Clear Separation of Concerns**: Components are grouped by feature/domain
2. **Easy Navigation**: Related components are in the same folder
3. **Scalability**: Easy to add new features without cluttering
4. **Maintainability**: Clear organization makes code easier to find and update
5. **Type Safety**: Centralized type definitions in `types/` folder

## 📝 Import Paths

All imports use the `@/` alias which points to the `src/` directory:

```typescript
// Layout components
import Navbar from "@/components/layout/Navbar"
import Providers from "@/components/layout/Providers"

// Course components
import CourseDetail from "@/components/course/CourseDetail"
import Cards from "@/components/course/Cards"

// Home components
import HomePage from "@/components/home/HomePage"
import HeroSection from "@/components/home/HeroSection"

// Auth components
import AuthDialog from "@/components/auth/AuthDialog"

// Types
import type { Enrollment, Course } from "@/types"

// Data
import { courses } from "@/data/courses"

// Utils
import { authOptions } from "@/lib/auth"
```

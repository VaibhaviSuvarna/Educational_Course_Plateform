// Shared TypeScript types

export interface Enrollment {
  userId: string;
  courseId: number;
  enrolledAt: string;
  progress?: number;
}

export interface Course {
  id: number;
  title: string;
  category: "CA" | "CS" | "CMA";
  description: string;
  instructor: string;
  duration: string;
  students: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice: string;
  videoId: string;
  thumbnail: string;
  contents: CourseContent[];
}

export interface CourseContent {
  title: string;
  subtopics: string[];
}

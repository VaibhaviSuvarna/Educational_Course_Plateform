// Simple in-memory storage for enrollments
// In production, this would be replaced with a database

import type { Enrollment } from "@/types";

let enrollments: Enrollment[] = [];

export function getEnrollments(userId: string): Enrollment[] {
  return enrollments.filter(e => e.userId === userId);
}

export function isEnrolled(userId: string, courseId: number): boolean {
  return enrollments.some(e => e.userId === userId && e.courseId === courseId);
}

export function enrollUser(userId: string, courseId: number): Enrollment {
  if (isEnrolled(userId, courseId)) {
    throw new Error('User is already enrolled in this course');
  }
  
  const enrollment: Enrollment = {
    userId,
    courseId,
    enrolledAt: new Date().toISOString(),
    progress: 0
  };
  
  enrollments.push(enrollment);
  return enrollment;
}

export function updateProgress(userId: string, courseId: number, progress: number): void {
  const enrollment = enrollments.find(
    e => e.userId === userId && e.courseId === courseId
  );
  
  if (enrollment) {
    enrollment.progress = Math.min(100, Math.max(0, progress));
  }
}

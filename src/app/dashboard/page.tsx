'use client';

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Enrollment } from "@/types";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
      return;
    }

    if (status === "authenticated") {
      fetchEnrollments();
    }
  }, [status, router]);

  const fetchEnrollments = async () => {
    try {
      const response = await fetch("/api/enroll");
      if (response.ok) {
        const data = await response.json();
        setEnrollments(data.enrollments || []);
      }
    } catch (error) {
      console.error("Failed to fetch enrollments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async (courseId: number) => {
    if (!session) {
      router.push("/");
      return;
    }

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId }),
      });

      if (response.ok) {
        await fetchEnrollments();
        setEnrollDialogOpen(false);
        setSelectedCourseId(null);
      } else {
        const error = await response.json();
        alert(error.error || "Failed to enroll");
      }
    } catch (error) {
      console.error("Enrollment error:", error);
      alert("Failed to enroll. Please try again.");
    }
  };

  const enrolledCourses = enrollments.map((enrollment) => {
    const course = courses.find((c) => c.id === enrollment.courseId);
    return course ? { ...course, enrollment } : null;
  }).filter(Boolean) as Array<typeof courses[0] & { enrollment: Enrollment }>;

  const availableCourses = courses.filter(
    (course) => !enrollments.some((e) => e.courseId === course.id)
  );

  if (status === "loading" || loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      </>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              My Dashboard
            </h1>
            <p className="text-lg text-gray-600">
              Welcome back, {session.user?.name || session.user?.email}!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Enrolled Courses</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {enrolledCourses.length}
                  </p>
                </div>
                <BookOpen className="w-12 h-12 text-blue-700" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Available Courses</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {availableCourses.length}
                  </p>
                </div>
                <GraduationCap className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Courses</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {courses.length}
                  </p>
                </div>
                <Clock className="w-12 h-12 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Enrolled Courses */}
          {enrolledCourses.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                My Enrolled Courses
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {course.instructor}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </span>
                          <span className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {course.category}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm text-gray-500 mb-1">Progress</div>
                        <div className="text-2xl font-bold text-blue-700">
                          {course.enrollment.progress || 0}%
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-blue-700 h-2 rounded-full transition-all"
                        style={{ width: `${course.enrollment.progress || 0}%` }}
                      ></div>
                    </div>
                    <Link href={`/course/${course.id}`}>
                      <Button className="w-full bg-blue-700 hover:bg-blue-800">
                        Continue Learning
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Available Courses */}
          {availableCourses.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Available Courses
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {availableCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {course.instructor}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </span>
                          <span className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {course.category}
                          </span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {course.price}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Link href={`/course/${course.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Button
                        className="flex-1 bg-blue-700 hover:bg-blue-800"
                        onClick={() => {
                          setSelectedCourseId(course.id);
                          setEnrollDialogOpen(true);
                        }}
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {enrolledCourses.length === 0 && availableCourses.length === 0 && (
            <div className="text-center py-16">
              <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No courses available
              </h3>
              <p className="text-gray-600 mb-6">
                Check back later for new courses
              </p>
              <Link href="/courses">
                <Button className="bg-blue-700 hover:bg-blue-800">
                  Browse All Courses
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Enrollment Confirmation Dialog */}
      <Dialog open={enrollDialogOpen} onOpenChange={setEnrollDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Enrollment</DialogTitle>
            <DialogDescription>
              Are you sure you want to enroll in this course?
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 justify-end mt-4">
            <Button
              variant="outline"
              onClick={() => {
                setEnrollDialogOpen(false);
                setSelectedCourseId(null);
              }}
            >
              Cancel
            </Button>
            <Button
              className="bg-blue-700 hover:bg-blue-800"
              onClick={() => selectedCourseId && handleEnroll(selectedCourseId)}
            >
              Confirm Enrollment
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DashboardPage;

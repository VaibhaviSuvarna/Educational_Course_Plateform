import React from "react";
import CourseDetail from "@/components/course/CourseDetail";
import { courses } from "@/data/courses";
import { notFound } from "next/navigation";

const CoursePage = async ({ params }) => {
  const courseId = parseInt(params.id);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return <CourseDetail course={course} />;
};

export default CoursePage;

import React from "react";
import CourseDetail from "@/components/CourseDetail";
import { courses } from "@/data/courses";

const CoursePage = ({ params }) => {
  const courseId = parseInt(params.id);
  const course = courses.find((c) => c.id === courseId);

  if (!course) return <p>Course not found</p>;

  return <CourseDetail course={course} />;
};

export default CoursePage;

'use client';

import React, { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import Cards from "./Cards";
import { courses } from "@/data/courses";
import { useRouter } from "next/navigation";

const HighlightedCourses = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const router = useRouter();

  const handleViewDetails = (courseId) => {
    router.push(`/course/${courseId}`);
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-700">Courses</span>
          </h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular professional courses designed to accelerate your career in commerce and finance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-6 mb-12">
          {courses.map((course) => (
            <Cards
              key={course.id}
              title={course.title}
              duration={course.duration}
              students={course.students}
              price={course.price}
              rating={course.rating}
              thumbnail={course.thumbnail}
              onViewDetails={() => handleViewDetails(course.id)}
              onPlay={() => setSelectedVideo(course.videoId)}
            />
          ))}
        </div>

        <div className="text-center">
          <Link href="/courses">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center">
              View All Courses
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="Course Preview"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HighlightedCourses;

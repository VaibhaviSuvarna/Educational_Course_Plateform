'use client';

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Cards from "@/components/course/Cards";
import { courses } from "@/data/courses";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const CoursesPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Read search query from URL on mount
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesSearch =
      course.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleViewDetails = (courseId) => {
    router.push(`/course/${courseId}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Browse <span className="text-blue-700">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of professional courses in CA, CS, and CMA
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="search"
                placeholder="Search courses by title, description, or instructor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full bg-white border-gray-300 text-black placeholder:text-gray-400 focus:bg-white focus:border-blue-500"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mb-8">
            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
                <TabsTrigger value="all" className="text-sm md:text-base">
                  All Courses
                </TabsTrigger>
                <TabsTrigger value="CA" className="text-sm md:text-base">
                  CA
                </TabsTrigger>
                <TabsTrigger value="CS" className="text-sm md:text-base">
                  CS
                </TabsTrigger>
                <TabsTrigger value="CMA" className="text-sm md:text-base">
                  CMA
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              Found <span className="font-semibold text-gray-900">{filteredCourses.length}</span>{" "}
              {filteredCourses.length === 1 ? "course" : "courses"}
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-6">
              {filteredCourses.map((course) => (
                <Cards
                  key={course.id}
                  title={course.title}
                  duration={course.duration}
                  students={course.students}
                  price={course.price}
                  rating={course.rating}
                  thumbnail={course.thumbnail}
                  onViewDetails={() => handleViewDetails(course.id)}
                  onPlay={() => {}}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CoursesPage;

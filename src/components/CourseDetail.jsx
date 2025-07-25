import React from "react";
import Navbar from "./Navbar";
import {
  Clock,
  Contact,
  GitCompareArrows,
  NotebookTabs,
  StarIcon,
  Volume,
} from "lucide-react";

function CourseDetail({ course }) {
   
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-8 p-8 lg:p-16">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="font-bold text-3xl lg:text-4xl">{course.title}</h1>
          <p className="text-lg text-gray-700">{course.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Volume className="w-5 h-5 text-black" />
              English
            </div>
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-yellow-500" />
              {course.rating} Ratings
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-black" />
              Lifetime Validity
            </div>
          </div>

          <ul className="text-lg list-disc ml-5 space-y-2 text-gray-800">
            <li>✅ Structured, high-quality video lessons</li>
            <li>✅ Live Interactive Sessions + Recorded Lectures Access</li>
            <li>✅ Doubt-clearing sessions with experts</li>
            <li>✅ Start from scratch – no prior commerce background required</li>
          </ul>

          <div className="space-y-3 text-lg text-gray-700">
            <div className="flex items-center gap-2">
              <GitCompareArrows />
              Lifetime Access Including all future updates
            </div>
            <div className="flex items-center gap-2">
              <NotebookTabs />
              High-Quality Notes, Interview Preparation
            </div>
            <div className="flex items-center gap-2">
              <Contact />
              Private Discord Community for Peer Learning
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-200">
            <iframe
              src={`https://www.youtube.com/embed/${course.videoId}?rel=0&autoplay=0`}
              title="Course Preview"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-lg font-semibold text-gray-800 grid gap-1">
            <div className="flex justify-between">
              <span>
                Price (incl. GST):
                <span className="px-2 font-bold text-2xl">{course.price}</span>
              </span>
              <span className="line-through text-red-500">{course.originalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Special Offer:</span>
              <span className="text-green-600 font-extrabold">40% OFF</span>
            </div>
            <div className="flex justify-between">
              <span>Special Discount:</span>
              <span className="text-indigo-700 font-bold">₹1,840 OFF</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="p-2 w-2xl h-14 text-xl px-6 py-3 rounded-4xl bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;

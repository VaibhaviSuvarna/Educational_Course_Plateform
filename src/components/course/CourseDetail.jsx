'use client'
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Clock,
  Contact,
  GitCompareArrows,
  NotebookTabs,
  StarIcon,
  Volume,
  Share2,
  ShieldCheck,
  User,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function CourseDetail({ course }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [checkingEnrollment, setCheckingEnrollment] = useState(true);
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      checkEnrollment();
    } else {
      setCheckingEnrollment(false);
    }
  }, [session, course.id]);

  const checkEnrollment = async () => {
    try {
      const response = await fetch(`/api/enroll/${course.id}`);
      if (response.ok) {
        const data = await response.json();
        setIsEnrolled(data.enrolled);
      }
    } catch (error) {
      console.error("Failed to check enrollment:", error);
    } finally {
      setCheckingEnrollment(false);
    }
  };

  const handleEnroll = async () => {
    if (!session) {
      signIn();
      return;
    }

    setEnrolling(true);
    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId: course.id }),
      });

      if (response.ok) {
        setIsEnrolled(true);
        setEnrollDialogOpen(false);
        router.push("/dashboard");
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.error || "Failed to enroll";
        console.error("Enrollment error:", errorMessage);
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Enrollment error:", error);
      alert(error.message || "Failed to enroll. Please try again.");
    } finally {
      setEnrolling(false);
    }
  };

  
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-10">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-gray-700">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gray-700">Courses</span>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="font-medium text-gray-900" aria-current="page">{course.title}</span>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <h1 className="font-bold text-3xl lg:text-4xl tracking-tight">{course.title}</h1>
            {/* Meta row: instructor + share */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
              {course.instructor && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-900" />
                  <span className="font-medium">Instructor:</span>
                  <span>{course.instructor}</span>
                </div>
              )}
              <button className="ml-auto inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">{course.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Volume className="w-5 h-5 text-gray-900" />
                English
              </div>
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">{course.rating}</span>
                <span className="text-gray-500">({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-900" />
                <span>{course.duration}</span>
              </div>
              {course.students && (
                <div className="flex items-center gap-2">
                  <span className="inline-block size-2 rounded-full bg-emerald-500" />
                  <span>{course.students} learners</span>
                </div>
              )}
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

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Course Contents</h2>
              <div className="space-y-3">
                {course.contents && course.contents.length > 0 ? (
                  course.contents.map((topic, idx) => (
                    <AccordionTopic key={idx} topic={topic} index={idx} />
                  ))
                ) : (
                  <div className="text-gray-500">No contents available.</div>
                )}
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-4">
              <div className="aspect-video w-full rounded-lg shadow-lg overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${course.videoId}?rel=0&autoplay=0`}
                  title="Course Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="rounded-xl border border-gray-200 p-5 shadow-sm bg-white">
                <div className="flex items-end gap-3">
                  <span className="font-bold text-3xl text-gray-900">{course.price}</span>
                  <span className="line-through text-red-500">{course.originalPrice}</span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span>Special Offer</span>
                  <span className="text-green-600 font-semibold">40% OFF</span>
                </div>
                <div className="mt-1 flex justify-between text-sm">
                  <span>Instant Discount</span>
                  <span className="text-indigo-700 font-semibold">₹1,840 OFF</span>
                </div>
                {checkingEnrollment ? (
                  <div className="mt-4 flex items-center justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-700"></div>
                  </div>
                ) : isEnrolled ? (
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>You are enrolled in this course</span>
                    </div>
                    <Link href="/dashboard">
                      <Button size="lg" className="w-full h-12 bg-indigo-700 hover:bg-indigo-800">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Go to Dashboard
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button 
                      size="lg" 
                      className="w-full h-12 bg-indigo-700 hover:bg-indigo-800" 
                      onClick={() => {
                        if (!session) {
                          signIn();
                        } else {
                          setEnrollDialogOpen(true);
                        }
                      }}
                    >
                      Enroll Now
                    </Button>
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="w-full h-12"
                      onClick={() => {
                        if (!session) {
                          signIn();
                        } else {
                          setEnrollDialogOpen(true);
                        }
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                )}
                <div className="mt-3">
                  <Button variant="outline" className="w-full">Download Syllabus</Button>
                </div>
                <ul className="mt-4 text-sm text-gray-700 space-y-2">
                  <li>• Lifetime access</li>
                  <li>• Certificate of completion</li>
                  <li>• Doubt support</li>
                </ul>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>7-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Confirmation Dialog */}
      <Dialog open={enrollDialogOpen} onOpenChange={setEnrollDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enroll in {course.title}</DialogTitle>
            <DialogDescription>
              You are about to enroll in this course. You will gain lifetime access to all course materials.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Course Price:</span>
              <span className="font-semibold">{course.price}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Original Price:</span>
              <span className="line-through text-gray-500">{course.originalPrice}</span>
            </div>
          </div>
          <div className="flex gap-3 justify-end mt-6">
            <Button
              variant="outline"
              onClick={() => setEnrollDialogOpen(false)}
              disabled={enrolling}
            >
              Cancel
            </Button>
            <Button
              className="bg-indigo-700 hover:bg-indigo-800"
              onClick={handleEnroll}
              disabled={enrolling}
            >
              {enrolling ? "Enrolling..." : "Confirm Enrollment"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
// AccordionTopic component for dropdown functionality
function AccordionTopic({ topic, index }) {
  const [open, setOpen] = useState(false);
  const panelId = `accordion-panel-${index}`;
  const buttonId = `accordion-button-${index}`;
  return (
    <div className="border w-full rounded-lg overflow-hidden">
      <button
        id={buttonId}
        className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left bg-gray-100 hover:bg-gray-200 transition-colors"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span>{topic.title}</span>
        <span className="text-xs text-gray-600">{open ? 'Hide' : 'Show'}</span>
      </button>
      {open && (
        <ul
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="pl-8 pr-4 pb-3 space-y-1 text-gray-700 bg-white"
        >
          {topic.subtopics && topic.subtopics.length > 0 ? (
            topic.subtopics.map((sub, i) => (
              <li key={i} className="list-disc py-2">{sub}</li>
            ))
          ) : (
            <li className="italic text-gray-400">No sub-topics</li>
          )}
        </ul>
      )}
    </div>
  );
}
}

export default CourseDetail;

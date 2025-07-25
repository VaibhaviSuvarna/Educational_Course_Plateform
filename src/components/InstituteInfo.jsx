"use client";
import React from "react";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Video, 
  MessageCircle, 
  UserCheck,
  Building2,
  FileText,
  Mic,
  Smartphone,
  CheckCircle
} from "lucide-react";

const InstituteInfo = () => {
  const courses = [
    "Chartered Accountancy (CA)",
    "Company Secretary (CS)", 
    "Cost and Management Accountant (CMA)",
    "Commerce (11th and 12th)"
  ];

  const uniqueOfferings = [
    {
      icon: Video,
      title: "Hybrid Learning",
      description: "Blend of virtual and in-person sessions with live classes, recordings for missed classes, monthly mock tests, and one-on-one doubt solving sessions."
    },
    {
      icon: MessageCircle,
      title: "Personal Guidance",
      description: "Regular counselling and feedback sessions with students and parents to understand every aspirant's unique strengths, interests, and aspirations."
    },
    {
      icon: UserCheck,
      title: "Expert Faculty",
      description: "All faculty members are CA or CS professionals who bring real-world experience and practical insights to the classroom."
    },
    {
      icon: Building2,
      title: "Industry Connections",
      description: "Close nexus with colleges and professional bodies like ICAI and ICSI for comprehensive learning support."
    },
    {
      icon: FileText,
      title: "Updated Study Material",
      description: "Comprehensive study material incorporating suggestions from professors and members, updated with latest exam requirements and trends."
    },
    {
      icon: Mic,
      title: "Guest Lectures",
      description: "Industry expert sessions to create perfect balance between theory and practical application in real-world scenarios."
    },
    {
      icon: Smartphone,
      title: "AK Academy App",
      description: "Monitor performance reports, provide feedback, chat with faculty, and post queries on discussion threads anytime, anywhere."
    }
  ];

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-700">AK Professional Institute</span>
          </h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your one-stop solution for building a career in the wide stream of Commerce. 
            We are the best CA Institute in Pune, CMA Institute Pune, CS Institute in Pune.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Left Side - About Text */}
          <div className="space-y-6">
            <div className="bg-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-8 h-8 text-blue-700 mr-3" />
                We Provide Result-Oriented Coaching For
              </h3>
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                The field of commerce can have your way into rewarding career avenues across multiple industries. 
                Professional courses like Chartered Accountancy (CA), Company Secretary (CS), Certified Management 
                Accounting (CMA) are gateways to the Big Five consultancies and multinationals, or careers as 
                successful entrepreneur or sole proprietor.
              </p>
              <p>
                Becoming CA, CS or CMA is a cherished dream for many. Cracking these exams needs strategy, practice, 
                and the right mentors to be your trusted educators. AK Professional is one of the best coaching 
                classes in Pune with a proven track record of producing rank holding candidates every year.
              </p>
            </div>
          </div>

          {/* Right Side - Video and Info */}
          <div className="space-y-6">
            

              <video className="text-blue-240 mx-auto hover:shadow-lg hover:shadow-gray-500/50 shadow-indigo-300  mb-4 filter saturate-150 rounded-4xl" autoPlay muted loop playsInline>
                <source src="/akvideo.mp4" type="video/mp4" className="w-[560px] h-80 "/>
              </video>
            

            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-2xl text-center font-bold mb-4">Best CA & CS Coaching in Pimpri-Chinchwad</h4>
              <p className="text-gray-600">
                Recognized as the leading coaching institute in Pimpri and Chinchwad for our unique approach 
                to professional education and consistent results.
              </p>
            </div>
          </div>
        </div>

        {/* Unique Offerings */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Unique <span className="text-blue-700">Offerings</span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We are the best CA and CS coaching classes in Pimpri and Chinchwad because of our comprehensive approach
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueOfferings.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-blue-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{offering.title}</h4>
                  <p className="text-gray-600 text-center leading-relaxed">{offering.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 w-auto">
          <div className="bg-gradient-to-r from-indigo-700 via-blue-500 to-indigo-700  m-0 p-8 lg:p-12 ">
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-shadow-accent-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg" >
              Join thousands of successful students who have achieved their dreams with AK Professional Institute
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="hover:-translate-y-1 hover:transition-transform duration-300 hover:shadow-lg bg-slate-100 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Enroll Now
              </button>
              <button className=" hover:-translate-y-1 hover:transition-transform duration-300  hover:shadow-lg border-2 border-white text-white  font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteInfo;
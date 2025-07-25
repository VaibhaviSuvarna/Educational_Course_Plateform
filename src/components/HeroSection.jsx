import { ArrowRight, BookOpen, Users, Award, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";


const HeroSection = () => {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Your Future with 
                <span className="text-blue-700 block">Premium Courses</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Unlock your potential with our expertly designed courses. Learn from industry professionals and gain the skills you need to excel in today's competitive world.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-blue-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Courses</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-2">
                  <Award className="w-6 h-6 text-orange-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-6 text-sm text-gray-600">
              <span>✓ Expert Instructors</span>
              <span>✓ Lifetime Access</span>
              <span>✓ Certificate of Completion</span>
              <span>✓ 30-Day Money Back</span>
            </div>
          </div>

          {/* Right Side - Student Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Students learning together"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />
                
                
                {/* Floating Card - Achievement */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
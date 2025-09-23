"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Bell, Menu, X, UniversityIcon} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession, signIn, signOut } from "next-auth/react";
import dynamic from "next/dynamic";
const AuthDialog = dynamic(() => import("@/components/AuthDialog"), { ssr: false });

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowMobileSearch(false);
  };

  const handleHomeClick = () => {
    router.push('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="text-md font-semibold border-b border-gray-200 w-full relative px-4 m-0">
      <div className="flex items-center justify-between w-full p-0 m-0">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-10 lg:h-20 -mt-2 sm:-mt-4  flex items-center justify-center overflow-visible bg-white">
            <UniversityIcon className=" text-blue-900"></UniversityIcon>
          </div>
          <h1 className=" text-lg  lg:text-2xl sm:text-xl font-bold text-blue-900">Institute</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="transition duration-300 ease-in-out hover:font-medium hover:underline hover:underline-offset-4  text-gray-700 hover:text-blue-700 ">
            Home
          </Link>
          <a href="#" className="transition duration-300 ease-in-out hover:font-medium hover:underline hover:underline-offset-4  text-gray-700 hover:text-blue-700 ">
            About
          </a>
          <a href="#" className="transition duration-300 ease-in-out hover:font-medium hover:underline hover:underline-offset-4  text-gray-700 hover:text-blue-700 ">
          Courses
          </a>
          <a href="#" className="transition duration-300 ease-in-out hover:font-medium hover:underline hover:underline-offset-4  text-gray-700 hover:text-blue-700 ">
            Dashboard
          </a>
          <a href="#" className="transition duration-300 ease-in-out hover:font-medium hover:underline hover:underline-offset-4  text-gray-700 hover:text-blue-700 ">
            Contact Us
          </a>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 w-64 bg-gray-100 border-gray-300 text-black placeholder:text-gray-400 focus:bg-white focus:border-black"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-black hover:text-gray-700 hover:bg-gray-100">
            <Bell className="w-5 h-5" />
          </Button>
          {session ? (
            <>
              <span className="hidden lg:inline text-sm text-gray-700">Hi, {session.user?.name || session.user?.email}</span>
              <Button variant="default" className=" text-white hover:bg-gray-800 px-4 lg:px-6 py-2 text-sm lg:text-base" onClick={() => signOut()}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button variant="default" className="bg-blue-700 text-white hover:bg-gray-800 px-4 lg:px-6 py-2 text-sm lg:text-base" onClick={() => setAuthOpen(true)}> 
                Login
              </Button>
              <Button variant="default" className=" text-white hover:bg-gray-800 px-4 lg:px-6 py-2 text-sm lg:text-base" onClick={() => setAuthOpen(true)}> 
               Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-black hover:text-gray-700 hover:bg-gray-100"
            onClick={() => setShowMobileSearch((prev) => !prev)}
          >
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-black hover:text-gray-700 hover:bg-gray-100">
            <Bell className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-black hover:text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Search Input */}
        {showMobileSearch && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 md:hidden">
            <div className="px-4 py-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="search"
                  autoFocus
                  placeholder="Search courses..."
                  className="pl-10 pr-4 py-2 w-full bg-gray-100 border-gray-300 text-black placeholder:text-gray-400 focus:bg-white focus:border-black"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="px-4 py-2 space-y-2">
            <div className="space-y-1">
              <button 
                onClick={handleHomeClick}
                className="block w-full text-left px-3 py-2 text-black hover:bg-gray-100 rounded-md transition-colors"
              >
                Home
              </button>
              <a 
                href="#" 
                className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-black hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </a>
              <a 
                href="#" 
                className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>

            <div className="pt-4 pb-2">
              {session ? (
                <Button 
                  variant="default" 
                  className="w-full bg-blue-700 text-white hover:bg-gray-800"
                  onClick={() => { setIsMobileMenuOpen(false); signOut(); }}
                >
                  Sign out
                </Button>
              ) : (
                <Button 
                  variant="default" 
                  className="w-full bg-blue-700 text-white hover:bg-gray-800"
                  onClick={() => { setIsMobileMenuOpen(false); setAuthOpen(true); }}
                >
                  Login / Register
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      <AuthDialog open={authOpen} onClose={() => setAuthOpen(false)} />
    </nav>
  );
};
export default Navbar;
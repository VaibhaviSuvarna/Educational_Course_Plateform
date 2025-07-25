import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import InstituteInfo from './InstituteInfo'
import HighlightedCourses from './HighlightedCourses'
import ContactUs from './ContactUs'



function HomePage() {
  return (
    <>
   <Navbar />
      <main>
      <HeroSection />
      <InstituteInfo />
      <HighlightedCourses />
      <ContactUs />
      </main>
      </>
  )
}

export default HomePage
import Navbar from '@/components/layout/Navbar'
import HeroSection from './HeroSection'
import InstituteInfo from './InstituteInfo'
import HighlightedCourses from '@/components/course/HighlightedCourses'
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

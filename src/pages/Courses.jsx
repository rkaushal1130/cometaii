import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import CoursesHero from '../components/Courses/courses-hero'
import CoursesCategories from '../components/Courses/courses-categories'
import CoursesTrending from '../components/Courses/courses-trending'
import CoursesFeatures from '../components/Courses/courses-features'
import CourseModal from '../components/Courses/course-modal'
import Footer from '../components/Footer'

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState(null)

  useEffect(() => {
    document.title = 'Courses | Comet AI Institute'
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <CoursesHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CoursesCategories onSelectCourse={(course) => setSelectedCourse(course)} />
        <CoursesTrending
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectCourse={(course) => setSelectedCourse(course)}
        />
        <CoursesFeatures />
      </main>

      {/* Global Course Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}

      <Footer />
    </>
  )
}
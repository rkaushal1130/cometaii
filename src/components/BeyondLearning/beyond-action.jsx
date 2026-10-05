import { useState } from 'react'
import styles from './beyond-action.module.css'
import img1 from '../../assets/images/beyond_learning/1.png'
import img2 from '../../assets/images/beyond_learning/2.png'
import img3 from '../../assets/images/beyond_learning/3.png'
import img4 from '../../assets/images/beyond_learning/4.png'

export default function BeyondAction() {
  const [scrollIndex, setScrollIndex] = useState(0)

  const items = [
    {
      id: 'industrial-training',
      category: 'INDUSTRIAL TRAINING',
      title: 'Hands-on. Real-world.Impactful.',
      description: 'Work on live projects, explore new-age tools, and gain industry exposure.',
      linkText: 'Explore Training',
      image: img1,
      href: '#'
    },
    {
      id: 'interview-prep',
      category: 'INTERVIEW PREP',
      title: 'Prepare. Practice.Perform.',
      description: 'Mock interviews, aptitude training, and expert feedback to help you succeed.',
      linkText: 'Explore Prep',
      image: img2,
      href: '#'
    },
    {
      id: 'internship-programs',
      category: 'INTERNSHIP PROGRAMS',
      title: 'Learn. Intern. Grow.',
      description: 'Apply your skills on real projects and build industry-ready experience.',
      linkText: 'Explore Internships',
      image: img3,
      href: '#'
    },
    {
      id: 'success-stories',
      category: 'SUCCESS STORIES',
      title: 'Real People. Real Success.',
      description: 'Discover inspiring journeys of students who achieved their dream careers.',
      linkText: 'Read Stories',
      image: img4,
      href: '#'
    }
  ]

  const handlePrev = () => {
    setScrollIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setScrollIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev))
  }

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.headerRow}>
          <h2 className={styles.sectionTitle}>Our Programs in Action</h2>
          <div className={styles.navControls}>
            <button className={styles.controlBtn} onClick={handlePrev} aria-label="Previous programs">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className={styles.controlBtn} onClick={handleNext} aria-label="Next programs">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} className={styles.cardImage} />
              </div>
              <span className={styles.categoryTag}>{item.category}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect, useMemo } from 'react'
import styles from './about-gallery.module.css'

import cgcLandranImg from '../../assets/images/gallery/cgc-landran-auditorium.png'
import youngPresentersImg from '../../assets/images/gallery/young-presenters-conclave.png'
import corporateAiImg from '../../assets/images/gallery/corporate-ai-conference.png'
import aiImmersiveAwardImg from '../../assets/images/gallery/ai-immersive-tech-award.png'
import aiTechnologyAwardImg from '../../assets/images/gallery/ai-technology-award.png'
import aiImmersiveExperienceImg from '../../assets/images/gallery/ai-immersive-experience.png'

const galleryItems = [
  {
    id: 1,
    title: 'CGC Landran Auditorium National Conclave',
    tag: 'Campus Conclave',
    category: 'conferences',
    location: 'CGC Landran Auditorium',
    img: cgcLandranImg,
    description: 'An inspiring keynote address and massive student gathering at CGC Landran Auditorium, driving forward-thinking AI discourse and industry readiness.'
  },
  {
    id: 2,
    title: 'Young Presenters at National Conclave',
    tag: 'Student Keynote',
    category: 'conferences',
    location: 'National Conclave Podium',
    img: youngPresentersImg,
    description: 'Emerging tech champions taking center stage at the National Conclave podium, sharing insights on next-generation AI breakthroughs and student innovations.'
  },
  {
    id: 3,
    title: 'Corporate AI Conference Leadership Meet',
    tag: 'Industry Summit',
    category: 'conferences',
    location: 'Corporate AI Conclave',
    img: corporateAiImg,
    description: 'Distinguished tech leaders, academic dignitaries, and industry pioneers uniting to forge real-world pathways for AI talent and enterprise solutions.'
  },
  {
    id: 4,
    title: 'AI & Immersive Technology Award Presentation',
    tag: 'Excellence Award',
    category: 'awards',
    location: 'Annual Tech Honors Gala',
    img: aiImmersiveAwardImg,
    description: 'Prestigious award presentation celebrating groundbreaking contributions and benchmark accomplishments in immersive technology and hands-on AI learning.'
  },
  {
    id: 5,
    title: 'National AI Technology Achievement Award',
    tag: 'National Honor',
    category: 'awards',
    location: 'National Technology Summit',
    img: aiTechnologyAwardImg,
    description: 'Honoring exceptional excellence and visionary leadership in expanding AI education and empowering high-impact technical career trajectories.'
  },
  {
    id: 6,
    title: 'AI & Immersive Technology Experience Showcase',
    tag: 'Innovation Lab',
    category: 'innovation',
    location: 'Tech Experience Arena',
    img: aiImmersiveExperienceImg,
    description: 'Interactive experience zone demonstrating applied artificial intelligence, spatial computing environments, and live applied technology demonstrations.'
  }
]

const filterCategories = [
  { key: 'all', label: 'All Moments' },
  { key: 'conferences', label: 'Conferences & Conclaves' },
  { key: 'awards', label: 'Awards & Honors' },
  { key: 'innovation', label: 'Tech & Innovation' }
]

export default function AboutGallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return galleryItems
    return galleryItems.filter(item => item.category === activeFilter)
  }, [activeFilter])

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null)
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length)
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxIndex, filteredItems.length])

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null

  return (
    <section className={styles.gallery} aria-labelledby="gallery-heading">
      <div className={styles.wrap}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>MOMENTS &amp; RECOGNITION</span>
          <h2 id="gallery-heading">Our Journey &amp; Milestones</h2>
          <p className={styles.lead}>
            Explore key moments from our national conclaves, corporate summits, prestigious awards, and immersive AI experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterBar} role="tablist" aria-label="Gallery categories">
          {filterCategories.map(tab => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab.key}
              className={`${styles.filterBtn} ${activeFilter === tab.key ? styles.activeFilter : ''}`}
              onClick={() => {
                setActiveFilter(tab.key)
                setLightboxIndex(null)
              }}
            >
              {tab.label}
              {tab.key === 'all' && (
                <span className={styles.filterCount}>{galleryItems.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.gcards}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={styles.gcard}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${item.title}`}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openLightbox(index)
                }
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className={styles.gimg}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.overlay} />

              <div className={styles.expandBadge} aria-hidden="true" title="Click to enlarge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>

              <div className={styles.content}>
                <div className={styles.tagRow}>
                  <span className={styles.tag}>{item.tag}</span>
                  <span className={styles.locationTag}>{item.location}</span>
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.shortDesc}>{item.description}</p>
              </div>

              <div className={styles.glow} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className={styles.lightboxBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged image: ${currentItem.title}`}
          onClick={closeLightbox}
        >
          <div
            className={styles.lightboxContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Counter and Close */}
            <div className={styles.lightboxTopBar}>
              <div className={styles.lightboxCounter}>
                <span>{lightboxIndex + 1}</span> of <span>{filteredItems.length}</span>
              </div>
              <button
                type="button"
                className={styles.lightboxCloseBtn}
                aria-label="Close full view"
                onClick={closeLightbox}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Main Stage with Image and Navigation Arrows */}
            <div className={styles.lightboxStage}>
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  className={`${styles.navBtn} ${styles.prevBtn}`}
                  aria-label="Previous photo"
                  onClick={prevImage}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              <div className={styles.imageFrame}>
                <img
                  src={currentItem.img}
                  alt={currentItem.title}
                  className={styles.lightboxImg}
                />
              </div>

              {filteredItems.length > 1 && (
                <button
                  type="button"
                  className={`${styles.navBtn} ${styles.nextBtn}`}
                  aria-label="Next photo"
                  onClick={nextImage}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Bottom Caption Details */}
            <div className={styles.lightboxInfo}>
              <div className={styles.lightboxHeaderRow}>
                <span className={styles.lightboxTag}>{currentItem.tag}</span>
                <span className={styles.lightboxLocation}>{currentItem.location}</span>
                <span className={styles.keyboardHint}>
                  <kbd>←</kbd> <kbd>→</kbd> Navigate &nbsp;|&nbsp; <kbd>Esc</kbd> Close
                </span>
              </div>
              <h3 className={styles.lightboxTitle}>{currentItem.title}</h3>
              <p className={styles.lightboxDesc}>{currentItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

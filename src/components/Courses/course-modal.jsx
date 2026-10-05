import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './course-modal.module.css'

export default function CourseModal({ course, onClose }) {
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  if (!course) return null

  const handleEnroll = () => {
    onClose()
    navigate(`/contact?course=${encodeURIComponent(course.title)}`)
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {/* Modal Banner Header */}
        <div className={styles.headerBanner} style={{ background: course.gradientBg || 'linear-gradient(135deg, #071333, #1d4ed8)' }}>
          <div className={styles.headerGlow}></div>
          <div className={styles.badgeRow}>
            <span className={styles.levelBadge}>{course.level}</span>
            <span className={styles.durationBadge}>{course.duration}</span>
            <span className={styles.liveBadge}>● Live Mentorship</span>
          </div>

          <h2 className={styles.courseTitle}>{course.title}</h2>
          <p className={styles.shortDesc}>{course.desc}</p>

          <div className={styles.ratingRow}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.score}>{course.rating}</span>
            <span className={styles.reviews}>({course.reviews} verified reviews)</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          {/* Main Details Left Column */}
          <div className={styles.mainContent}>
            {/* Overview Section */}
            <div className={styles.sectionBlock}>
              <h3>Course Overview</h3>
              <p>
                This program is meticulously engineered by industry veterans at Comet AI Institute to bridge the gap between foundational concepts and real-world enterprise applications. You will work on production-grade projects, master state-of-the-art tools, and gain hands-on expertise under expert 1-on-1 guidance.
              </p>
            </div>

            {/* What You'll Learn or Custom Syllabus Roadmap */}
            {course.syllabus ? (
              <div className={styles.sectionBlock}>
                <h3>Interactive Course Roadmap</h3>
                <div className={styles.roadmapTimeline}>
                  {course.syllabus.map((step, idx) => (
                    <div key={idx} className={styles.roadmapStep}>
                      <div className={styles.stepDotContainer}>
                        <div className={styles.stepDot}>
                          {step.title.includes('🚀') ? '🚀' : idx + 1}
                        </div>
                        {idx < course.syllabus.length - 1 && <div className={styles.stepLine}></div>}
                      </div>
                      <div className={styles.stepContent}>
                        <h4 className={styles.stepTitle}>
                          {step.title.replace(/^(🚀\s*\d+\.\s*|\d+\.\s*|🤖\s*)/, '')}
                        </h4>
                        <div className={styles.stepBadges}>
                          {step.details.split(' • ').map((subtopic, sIdx) => (
                            <span key={sIdx} className={styles.stepBadge}>
                              {subtopic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.sectionBlock}>
                <h3>What You Will Learn</h3>
                <ul className={styles.syllabusList}>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span><strong>Core Mastery:</strong> Deep dive into {course.title} architecture, design patterns, and best practices.</span>
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span><strong>Hands-On Labs:</strong> Build 5+ industry-grade portfolio projects showcasing end-to-end implementation.</span>
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span><strong>AI Tool Integration:</strong> Leverage cutting-edge AI acceleration tools for 10x development speed.</span>
                  </li>
                  <li>
                    <span className={styles.checkIcon}>✓</span>
                    <span><strong>Career Readiness:</strong> Resume building, mock technical interviews, and direct placement support.</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Course Features Grid */}
            <div className={styles.featuresMiniGrid}>
              <div className={styles.miniCard}>
                <span className={styles.miniIcon}>📜</span>
                <div>
                  <h4>Verified Certificate</h4>
                  <p>Shareable industry certificate on completion</p>
                </div>
              </div>
              <div className={styles.miniCard}>
                <span className={styles.miniIcon}>⏰</span>
                <div>
                  <h4>Flexible Schedule</h4>
                  <p>Weekend & evening batch options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

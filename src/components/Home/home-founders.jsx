import { useState } from 'react'
import styles from './home-founders.module.css'
import shrutiImg from '../../assets/images/webp/1000064992.webp'
import shivaniImg from '../../assets/images/webp/Shivani mam.webp'

export default function HomeFounders() {
  const [showShivaniModal, setShowShivaniModal] = useState(false)
  const [showShrutiModal, setShowShrutiModal] = useState(false)

  return (
    <section className={styles.people}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <span className={styles.badge}>MEET OUR LEADERS</span>
          <h2>Founded By Visionaries</h2>
          <p className={styles.subtitle}>
            Two passionate educators with a shared vision of making AI education accessible, practical, and transformative for every learner.
          </p>
        </div>

        <div className={styles.prow}>
          <div className={styles.pimg}>
            <div className={styles.imgInner} onClick={() => setShowShrutiModal(true)} style={{ cursor: 'pointer' }}>
              <img src={shrutiImg} alt="Dr. Shruti Avasthi" loading="lazy" decoding="async" />
            </div>
            <div className={styles.expBadge}>20+ Years Experience</div>
          </div>
          <div className={styles.pinfo}>
            <span className={styles.tag}>Academic Director</span>
            <h3>Dr. Shruti Avasthi</h3>
            <div className={styles.role}>Founder &amp; Academic Director</div>
            <p className={styles.bio}>
              Dr. Shruti Avasthi brings over two decades of academic leadership, curriculum design, and educational innovation. Her passion for shaping young minds drives the institute's commitment to academic excellence.
            </p>
            <div className={styles.socialRow}>
              <a href="https://www.facebook.com/share/19JPEXA5kv/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.social}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.threads.net/@cometai_institute" target="_blank" rel="noreferrer" aria-label="Threads" className={styles.social}>
                <svg aria-label="Threads" viewBox="0 0 192 192" fill="currentColor"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/></svg>
              </a>
              <a href="https://instagram.com/cometai_institute" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.social}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
            <button
              onClick={() => setShowShrutiModal(true)}
              className={styles.storyBtn}
            >
              READ FULL STORY &amp; VISION →
            </button>
          </div>
        </div>

        <div className={`${styles.prow} ${styles.reverse}`}>
          <div className={styles.pinfo}>
            <span className={styles.tag}>Technical Director</span>
            <h3>Ms. Shivani Tayal</h3>
            <div className={styles.role}>Founder &amp; Technical Director</div>
            <p className={styles.bio}>
              With more than two decades of experience in education and technology, Ms. Shivani Tayal combines deep technical expertise with a passion for practical, project-based learning.
            </p>
            <div className={styles.socialRow}>
              <a href="https://www.facebook.com/share/19JPEXA5kv/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.social}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.threads.net/@cometai_institute" target="_blank" rel="noreferrer" aria-label="Threads" className={styles.social}>
                <svg aria-label="Threads" viewBox="0 0 192 192" fill="currentColor"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/></svg>
              </a>
              <a href="https://instagram.com/cometai_institute" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.social}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
            <button
              onClick={() => setShowShivaniModal(true)}
              className={styles.storyBtn}
            >
              READ FULL STORY &amp; VISION →
            </button>
          </div>
          <div className={styles.pimg}>
            <div className={styles.imgInner} onClick={() => setShowShivaniModal(true)} style={{ cursor: 'pointer' }}>
              <img src={shivaniImg} alt="Ms. Shivani Tayal" loading="lazy" decoding="async" />
            </div>
            <div className={styles.expBadge}>20+ Years Experience</div>
          </div>
        </div>
      </div>

      {/* Shivani Tayal Full Story & Vision Popup Modal */}
      {showShivaniModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowShivaniModal(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeModalBtn}
              onClick={() => setShowShivaniModal(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.modalHeader}>
              <img src={shivaniImg} alt="Shivani Tayal" className={styles.modalAvatar} />
              <div className={styles.modalTitleGroup}>
                <h3>Shivani Tayal</h3>
                <div className={styles.modalRole}>Founder &amp; Technical Director, COMET AI Institute</div>
                <div className={styles.modalBadges}>
                  <span className={styles.modalBadgePill}>Educator</span>
                  <span className={styles.modalBadgePill}>Technologist</span>
                  <span className={styles.modalBadgePill}>AI &amp; Programming Mentor</span>
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              <p>
                With more than two decades of experience in education and technology, Shivani Tayal is the Founder and Technical Director of COMET AI Institute, established in October 2025.
              </p>

              <p>
                Throughout her journey as an educator, Shivani has worked closely with students and observed a growing gap between what learners study and the practical skills they need to move confidently into the future. Her extensive experience in teaching Computer Science, mentoring students and supporting project-based learning shaped her approach to practical education.
              </p>

              <div className={styles.foundationHighlight}>
                This realization became the foundation of COMET AI Institute.
              </div>

              {/* My Vision Card */}
              <div className={styles.visionCard}>
                <div className={styles.visionTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  My Vision
                </div>
                <div className={styles.visionText}>
                  <p>
                    “My vision behind COMET AI Institute is to make Artificial Intelligence and technology simple, practical and accessible to every learner—regardless of their academic stream or technical background.
                  </p>
                  <p>
                    I believe students should not only learn technology from books. They should experiment, build projects, solve real problems and understand how technology can shape their careers and future.
                  </p>
                  <p>
                    Through COMET AI Institute, I want to create a learning environment where students gain confidence, discover their potential and become future-ready with practical skills.
                  </p>
                  <p>
                    For me, education is not only about completing a course or earning a certificate. It is about empowering learners with the knowledge, skills and confidence to create their own opportunities.”
                  </p>
                </div>
              </div>

              <p>
                As Technical Director, Shivani leads the technical vision and practical learning approach at COMET AI Institute. She focuses on developing industry-relevant, project-based programs in Artificial Intelligence, programming and emerging digital technologies.
              </p>

              <p>
                Her teaching philosophy has always been simple: make complex concepts easy to understand and give students the opportunity to learn by doing. Her professional background highlights hands-on learning, problem-solving, student mentoring and an ability to explain difficult concepts simply.
              </p>

              <p>
                Today, through COMET AI Institute, Shivani is working towards building a platform where education meets innovation, technology becomes accessible and every learner is encouraged to explore, create and grow.
              </p>

              {/* Motto Banner Card */}
              <div className={styles.mottoCard}>
                <div className={styles.mottoQuote}>
                  “Technology should not only be learned—it should be understood, practiced and applied.”
                </div>
                <div className={styles.mottoAuthor}>
                  Shivani Tayal — Founder &amp; Technical Director, COMET AI Institute
                </div>
                <div className={styles.mottoTagline}>
                  Empowering Learners. Simplifying Technology. Building Future-Ready Skills.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dr. Shruti Avasthi Modal */}
      {showShrutiModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowShrutiModal(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeModalBtn}
              onClick={() => setShowShrutiModal(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.modalHeader}>
              <img src={shrutiImg} alt="Dr. Shruti Avasthi" className={styles.modalAvatar} />
              <div className={styles.modalTitleGroup}>
                <h3>Dr. Shruti Avasthi</h3>
                <div className={styles.modalRole}>Founder &amp; Academic Director, COMET AI Institute</div>
                <div className={styles.modalBadges}>
                  <span className={styles.modalBadgePill}>Academic Leader</span>
                  <span className={styles.modalBadgePill}>Curriculum Design</span>
                  <span className={styles.modalBadgePill}>Educational Innovation</span>
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              <p style={{ textAlign: 'center', padding: '30px 0', color: '#64748b' }}>
                Full story and vision profile coming soon.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


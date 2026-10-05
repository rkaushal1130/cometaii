import styles from './courses-features.module.css'

export default function CoursesFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.wrap}>
        <div className={styles.container}>
          {/* Column 1: Tech Covered */}
          <div className={styles.col}>
            <div className={styles.colTop}>
              <div className={styles.iconBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                </svg>
              </div>
              <h4>Tech. Covered</h4>
            </div>
            <p className={styles.colDesc}>
              Stay ahead with the latest enterprise technologies.
            </p>
            <div className={styles.techBadges}>
              <span className={styles.techPill}>AWS</span>
              <span className={styles.techPill}>React</span>
              <span className={styles.techPill}>Python</span>
              <span className={styles.techMore}>+50</span>
            </div>
          </div>

          {/* Column 2: Certification */}
          <div className={styles.col}>
            <div className={styles.colTop}>
              <div className={styles.iconBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <h4>Certification</h4>
            </div>
            <p className={styles.colDesc}>
              Earn industry-recognized certifications.
            </p>
            <div className={styles.certCard}>
              <div className={styles.certSeal}>★</div>
              <div className={styles.certLines}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          {/* Column 3: Student Satisfaction */}
          <div className={styles.col}>
            <div className={styles.colTop}>
              <div className={styles.iconBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h4>Student Satisfaction</h4>
            </div>
            <p className={styles.colDesc}>
              Learn from thousands of successful learners.
            </p>
            <div className={styles.ratingValBox}>
              <span className={styles.bigScore}>95%</span>
              <span className={styles.starsStr}>★★★★★</span>
              <span className={styles.revCnt}>(1,000+ Students Trained)</span>
            </div>
          </div>

          {/* Column 4: Live Projects */}
          <div className={styles.col}>
            <div className={styles.colTop}>
              <div className={styles.iconBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h4>Live Projects</h4>
            </div>
            <p className={styles.colDesc}>
              Work on real-world projects that showcase your skills.
            </p>
            <div className={styles.avatarsStack}>
              <div className={styles.avatar}>👨‍💻</div>
              <div className={styles.avatar}>👩‍💻</div>
              <div className={styles.avatar}>🧑‍🎓</div>
              <span className={styles.plusPill}>1,000+</span>
            </div>
          </div>

          {/* Column 5: Workshops */}
          <div className={styles.col}>
            <div className={styles.colTop}>
              <div className={styles.iconBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h4>Workshops</h4>
            </div>
            <p className={styles.colDesc}>
              Hands-on practical sessions and expert bootcamps.
            </p>
            <div className={styles.placedCount}>
              <span className={styles.numStat}>100+</span>
              <span className={styles.statLabel}>Workshops Conducted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

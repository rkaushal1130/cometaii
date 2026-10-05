import styles from './home-mission.module.css'

export default function HomeMission() {
  return (
    <section className={styles.mission}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      <div className={styles.wrap}>
        <div className={styles.header}>
          <span className={styles.badge}>WHY WE EXIST</span>
          <h2>Our Mission &amp; Vision</h2>
          <div className={styles.headerLine} />
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              Our vision is to empower future-ready learners who can confidently understand, use and innovate with technology.
            </p>
            <div className={styles.cardAccent} />
          </div>

          <div className={styles.centerPiece}>
            <div className={styles.centerInner}>
              <div className={styles.ring} />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M4 21V10l8-5 8 5v11M9 21v-6h6v6M3 10h18"/>
              </svg>
            </div>
            <div className={styles.motto}>Learn.<br />Practice.<br />Create.<br />Innovate.</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to bridge the gap between academic education and practical skills through hands-on, project-based and career-focused learning. We are committed to providing quality training in Artificial Intelligence, programming and emerging technologies, while encouraging creativity, problem-solving and continuous learning.
            </p>
            <div className={styles.cardAccent} />
          </div>
        </div>

        <div className={styles.quoteBlock}>
          <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p>
            At COMET AI Institute, our mission is not just to teach technology, but to inspire learners to practice, create, innovate and turn their skills into opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}

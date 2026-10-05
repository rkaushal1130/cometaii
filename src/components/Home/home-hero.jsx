import styles from './home-hero.module.css'
import heroBg from '../../assets/images/hero_event_group.png'

export default function HomeHero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className={styles.overlay} />
      <div className={styles.gradientOverlay} />
      <div className={styles.pattern} />

      <div className={styles.wrap}>
        <div className={styles.badge}>India's Leading AI Institute</div>
        <h1>
          COMET AI<br />
          <span className={styles.accent}>INSTITUTE</span>
        </h1>
        <div className={styles.tagline}>Igniting Minds, Shaping Intelligence</div>

        <div className={styles.founders}>
          <div className={styles.f}>
            <div className={styles.fIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <b>DR. SHRUTI AVASTHI</b>
              <span>Founder &amp; Academic Director</span>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.f}>
            <div className={styles.fIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <b>Ms. SHIVANI TAYAL</b>
              <span>Founder &amp; Technical Director</span>
            </div>
          </div>
        </div>

        <p className={styles.lead}>
          Industry-aligned and future-ready learning ecosystem — career tailoring approach, bringing the best behavior, excellence in strategy, and industry benchmarks. Focus on AI-driven development and global exposure.
        </p>

        <div className={styles.actions}>
          <a href="https://forms.gle/pfgViDJRBU1FBAmA8" target="_blank" rel="noreferrer" className={styles.btn}>
            Download Brochure
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <b>20+ Years</b>
            <span>Experience</span>
          </div>
          <div className={styles.statDot} />
          <div className={styles.statItem}>
            <b>1,000+</b>
            <span>Students Trained</span>
          </div>
          <div className={styles.statDot} />
          <div className={styles.statItem}>
            <b>50+</b>
            <span>Courses</span>
          </div>
          <div className={styles.statDot} />
          <div className={styles.statItem}>
            <b>95%</b>
            <span>Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}

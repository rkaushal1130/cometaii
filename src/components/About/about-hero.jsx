import styles from './about-hero.module.css'
import sardarImage from '../../assets/images/webp/sardar.webp'

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={styles.badgeRow}>
            <span className={styles.eyebrow}>Empowering the Next Generation</span>
          </div>
          <h1>
            Shaping the Future<br />
            <span className={styles.accentBlue}>with AI Education</span>
          </h1>
          <p>Our mission is to bridge the gap between academic education and practical skills through hands-on, project-based and career-focused learning. Learn. Practice. Create. Innovate.</p>
          <div className={styles.actions}>
            <a href="https://forms.gle/pfgViDJRBU1FBAmA8" target="_blank" rel="noreferrer" className={styles.btn}>
              Download Brochure
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
          <div className={styles.trusted}>
            <div className={styles.avatars}>
              <div className={styles.avatar} title="Learner">👨‍🎓</div>
              <div className={styles.avatar} title="Learner">👩‍🎓</div>
              <div className={styles.avatar} title="Learner">🧑‍💻</div>
              <div className={styles.avatar} title="Learner">👩‍💻</div>
            </div>
            <span><b>1,000+</b> Students Trained</span>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <div className={styles.imageFrame}>
            <img src={sardarImage} alt="Comet AI Learning" className={styles.heroImage} fetchpriority="high" />
            <div className={styles.imageOverlay} />
            <div className={styles.floatingCard1}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <div>
                <b>95%</b>
                <span>Student Satisfaction</span>
              </div>
            </div>
            <div className={styles.floatingCard2}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <div>
                <b>100+</b>
                <span>Workshops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

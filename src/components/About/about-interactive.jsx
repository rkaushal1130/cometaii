import styles from './about-interactive.module.css'
import sessionImg from '../../assets/images/webp/about_interactive.webp'

export default function AboutInteractive() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: 'Live Hands-on Projects',
      desc: 'Build real-world applications that solve actual industry problems.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Expert Mentorship',
      desc: 'Learn from industry leaders with years of real-world experience.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <path d="M7 10.5 10 13l7-6"/>
        </svg>
      ),
      title: 'Industry-Standard Tools',
      desc: 'Work with the same tools and software used by top AI companies.'
    }
  ]

  return (
    <section className={styles.interactive}>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.badge}>REAL-WORLD TRAINING</span>
            <h2>Interactive &amp; Real-World Training</h2>
            <p className={styles.desc}>
              Education at CometAi isn't just about lectures. We prioritize interactive sessions where students engage, participate, and grow through practical exposure.
            </p>
          </div>
          <div className={styles.features}>
            {features.map((f, i) => (
              <div key={i} className={styles.featCard}>
                <div className={styles.featIcon}>{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.imageWrap}>
            <img src={sessionImg} alt="Interactive session" className={styles.sessionImg} loading="lazy" decoding="async" />
            <div className={styles.imageOverlay} />
            <div className={styles.imageLabel}>
              <div className={styles.pulse} />
              <span>LIVE SESSION</span>
            </div>
            <div className={styles.imageMeta}>
              <div className={styles.metaIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <b>Rajpura, Punjab, India</b>
                <span>Fhjp+q44, Rajpura, Punjab 140401, India</span>
              </div>
              <div className={styles.metaDivider} />
              <div className={styles.metaDate}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <line x1="12" y1="14" x2="12" y2="18"/>
                  <line x1="10" y1="16" x2="14" y2="16"/>
                </svg>
                <span>13 Apr 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import styles from './career-hero.module.css'
import logoImg from '../../assets/images/beyond_learning/Logo.png'

export default function CareerHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow}></div>
      <div className={styles.starsOverlay}></div>
      <div className={styles.gridLines}></div>

      <div className={styles.wrap}>
        <div className={styles.content}>
          <span className={styles.heroBadge}>CAREERS &amp; MENTORSHIP</span>
          <h1 className={styles.title}>
            Build Your Future <br />
            With <span className={styles.gradientText}>COMET AI.</span>
          </h1>
          <p className={styles.desc}>
            At COMET AI, we believe in creating an environment where passionate educators, trainers, mentors, and technology professionals can grow, innovate, and make an impact.
          </p>
          <div className={styles.heroActions}>
            <a href="#career-openings" className={styles.heroBtnPrimary}>
              Explore Open Roles
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </a>
            <a href="#work-with-us" className={styles.heroBtnSecondary}>
              Send CV / Profile
            </a>
          </div>
        </div>

        <div className={styles.graphicContainer}>
          {/* Logo & Branding Image */}
          <div className={styles.brandBox}>
            <img src={logoImg} alt="Comet AI Institute Logo" className={styles.heroLogoImg} />
          </div>

          {/* Rocket Graphic */}
          <div className={styles.rocketWrapper}>
            <div className={styles.rocketGlow}></div>
            <div className={styles.thrustBeam}></div>

            {/* Exhaust Particle Sparks */}
            <div className={styles.sparksContainer}>
              <span className={styles.spark1}></span>
              <span className={styles.spark2}></span>
              <span className={styles.spark3}></span>
              <span className={styles.spark4}></span>
              <span className={styles.spark5}></span>
            </div>

            <svg viewBox="0 0 120 220" className={styles.rocketSvg}>
              <defs>
                <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
                <linearGradient id="rocketFin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="outerFlame" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#2563eb" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="innerFlame" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Engine Exhaust Plume / Flames */}
              <path d="M 60 135 L 32 215 C 50 200, 70 200, 88 215 Z" fill="url(#outerFlame)" className={styles.flameOuter} filter="url(#glowFilter)" />
              <path d="M 60 135 L 42 195 C 54 185, 66 185, 78 195 Z" fill="url(#innerFlame)" className={styles.flameInner} />
              <path d="M 60 135 L 50 170 L 60 160 L 70 170 Z" fill="#ffffff" className={styles.flameCore} />

              {/* Nozzle Rings */}
              <rect x="48" y="132" width="24" height="6" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />

              {/* Side Fins */}
              <path d="M 42 100 L 16 138 L 42 130 Z" fill="url(#rocketFin)" />
              <path d="M 78 100 L 104 138 L 78 130 Z" fill="url(#rocketFin)" />

              {/* Main Rocket Body */}
              <path d="M 60 15 C 38 55, 40 100, 42 132 L 78 132 C 80 100, 82 55, 60 15 Z" fill="url(#rocketBody)" />

              {/* Nose Cone */}
              <path d="M 60 15 C 48 38, 44 55, 44 64 L 76 64 C 76 55, 72 38, 60 15 Z" fill="url(#rocketFin)" />

              {/* Porthole Window with Specular Highlight */}
              <circle cx="60" cy="82" r="11" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <circle cx="60" cy="82" r="7" fill="#0284c7" />
              <path d="M 56 78 Q 62 76 64 80" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

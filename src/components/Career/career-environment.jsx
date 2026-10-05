import styles from './career-environment.module.css'

export default function CareerEnvironment() {
  const leftItems = [
    {
      num: '01',
      title: 'Positive & Student-Friendly Environment',
      desc: 'We create a welcoming and motivating atmosphere where every student feels valued, respected, and encouraged to achieve their best.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Interactive Learning Culture',
      desc: 'Our classes promote active discussions, problem solving, and hands-on participation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Technology-Enabled Classrooms',
      desc: 'Classrooms are equipped with modern technology and tools to prepare students for the future.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Collaborative Learning Spaces',
      desc: 'We provide spaces that encourage teamwork, idea sharing, and collaboration to build confidence and leadership skills.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <polyline points="17 11 19 13 23 9"/>
        </svg>
      )
    },
    {
      num: '05',
      title: 'Experienced & Supportive Faculty',
      desc: 'Our faculty members are dedicated professionals who guide, mentor, and support students at every step.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    }
  ]

  const rightItems = [
    {
      num: '06',
      title: 'Practical & Activity-Based Learning',
      desc: 'We focus on hands-on projects, workshops, case studies, and real-world activities that build practical skills and industry readiness.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      )
    },
    {
      num: '07',
      title: 'Safe, Inclusive & Respectful Campus',
      desc: 'We ensure a safe, diverse, and respectful campus where every student feels secure, supported, and included.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      )
    },
    {
      num: '08',
      title: 'Innovation & Career-Focused Approach',
      desc: 'We encourage creativity, innovation, and future-ready skills to help students achieve their career goals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        </svg>
      )
    },
    {
      num: '09',
      title: 'Equal Learning Opportunities',
      desc: 'We believe in fairness and inclusivity, providing every learner with equal access to quality education and growth opportunities.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      num: '10',
      title: 'Continuous Mentorship & Guidance',
      desc: 'We provide personalized academic support, career advice, and mentorship guidance to support academic success.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  ]

  return (
    <section className={styles.environment}>
      <div className={styles.wrap}>
        {/* Left Column Text Content */}
        <div className={styles.leftCol}>
          <div className={styles.tagWrapper}>
            <span className={styles.dash}></span>
            <span className={styles.tagText}>OUR ENVIRONMENT</span>
            <span className={styles.dash}></span>
          </div>

          <h2 className={styles.title}>
            Our <span className={styles.gradientText}>Environment</span>
          </h2>

          <p className={styles.description}>
            At Comet AI Institute, we provide a positive, inclusive, and technology-enabled learning environment where students feel inspired to learn, innovate, and grow. Our classrooms encourage collaboration, practical learning, creativity, and professional development in a safe, supportive, and student-friendly atmosphere.
          </p>

          {/* Quote Card */}
          <div className={styles.quoteCard}>
            <div className={styles.quoteIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <div className={styles.quoteText}>
              We believe the right environment creates the right opportunities. <br />
              <strong className={styles.quoteHighlight}>At Comet AI Institute, we build more than skills - we build futures.</strong>
            </div>
          </div>
        </div>

        {/* Right Column Interactive Diagram */}
        <div className={styles.diagramCol}>
          {/* Highlights Banner */}
          <div className={styles.highlightsBadge}>HIGHLIGHTS</div>

          <div className={styles.radialContainer}>
            {/* Center Logo Hub */}
            <div className={styles.centerHub}>
              <div className={styles.hubRing}></div>
              <svg viewBox="0 0 100 100" className={styles.hubLogo}>
                <defs>
                  <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2fe" />
                    <stop offset="100%" stopColor="#ffb300" />
                  </linearGradient>
                </defs>
                <ellipse
                  cx="50"
                  cy="45"
                  rx="35"
                  ry="16"
                  transform="rotate(-30 50 45)"
                  fill="none"
                  stroke="url(#hubGrad)"
                  strokeWidth="6"
                />
                <circle cx="65" cy="32" r="7" fill="#ffd700" />
              </svg>
              <div className={styles.hubTitle}>COMET AI</div>
              <div className={styles.hubSub}>INSTITUTE</div>
              <div className={styles.hubCaption}>
                A positive environment today, a successful future tomorrow.
              </div>
            </div>

            {/* Connecting Lines SVG */}
            <svg className={styles.svgLines} viewBox="0 0 600 600">
              {/* Lines from center to left items */}
              <line x1="300" y1="300" x2="180" y2="70" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="300" y1="300" x2="150" y2="180" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="300" y1="300" x2="140" y2="300" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="300" y1="300" x2="150" y2="420" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="300" y1="300" x2="180" y2="530" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Lines from center to right items */}
              <line x1="300" y1="300" x2="420" y2="70" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="300" y1="300" x2="450" y2="180" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="300" y1="300" x2="460" y2="300" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="300" y1="300" x2="450" y2="420" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="300" y1="300" x2="420" y2="530" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            {/* Left Items Column (01 to 05) */}
            <div className={styles.leftNodes}>
              {leftItems.map((item) => (
                <div key={item.num} className={styles.nodeRowLeft}>
                  <div className={styles.nodeTextLeft}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className={styles.iconCircle}>
                    {item.icon}
                  </div>
                  <div className={styles.numBadge}>{item.num}</div>
                </div>
              ))}
            </div>

            {/* Right Items Column (06 to 10) */}
            <div className={styles.rightNodes}>
              {rightItems.map((item) => (
                <div key={item.num} className={styles.nodeRowRight}>
                  <div className={styles.numBadge}>{item.num}</div>
                  <div className={styles.iconCircle}>
                    {item.icon}
                  </div>
                  <div className={styles.nodeTextRight}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

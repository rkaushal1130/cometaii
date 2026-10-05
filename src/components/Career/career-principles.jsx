import styles from './career-principles.module.css'

export default function CareerPrinciples() {
  const principles = [
    {
      id: 'student-centric',
      title: 'Student-Centric Learning',
      desc: 'We place learners at the heart of everything we do, delivering personalized guidance and meaningful learning experiences.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5"/>
          <path d="M20 21a8 8 0 1 0-16 0"/>
        </svg>
      )
    },
    {
      id: 'excellence',
      title: 'Excellence in Education',
      desc: 'We strive for academic excellence through quality teaching, practical learning, and continuous improvement.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      )
    },
    {
      id: 'innovation-tech',
      title: 'Innovation & Technology',
      desc: 'We embrace emerging technologies and innovative teaching methods to prepare learners for the future.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/>
        </svg>
      )
    },
    {
      id: 'practical-approach',
      title: 'Practical & Industry-Oriented Approach',
      desc: 'Our programs focus on real-world applications, hands-on projects, internships, and career readiness.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      id: 'integrity-ethics',
      title: 'Integrity & Ethics',
      desc: 'We uphold honesty, transparency, professionalism, and ethical practices in all our interactions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      )
    },
    {
      id: 'inclusivity',
      title: 'Inclusivity & Lifelong Learning',
      desc: 'We create opportunities for learners of all ages and backgrounds, promoting continuous personal and professional growth.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      id: 'collaboration-partnership',
      title: 'Collaboration & Partnership',
      desc: 'We foster strong relationships with students, parents, industry experts, educational institutions, and organizations to create meaningful learning opportunities.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      id: 'research-entrepreneurship',
      title: 'Research & Entrepreneurship',
      desc: 'We encourage critical thinking, research, creativity, innovation, and entrepreneurial mindset to solve real-world challenges.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
        </svg>
      )
    },
    {
      id: 'continuous-growth',
      title: 'Continuous Growth',
      desc: 'We are committed to adapting, improving, and evolving with changing industry needs and technological advancements.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      )
    },
    {
      id: 'social-responsibility',
      title: 'Social Responsibility',
      desc: 'We aim to contribute to society by empowering individuals with knowledge, skills, and values that create a positive impact.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      )
    }
  ]

  return (
    <section className={styles.principlesSection}>
      <div className={styles.wrap}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.tagWrapper}>
            <span className={styles.dash}></span>
            <h2 className={styles.tagText}>Our Operating Principles</h2>
            <span className={styles.dash}></span>
          </div>

          <p className={styles.subTitle}>
            Core values and principles guiding our commitment to academic excellence, student success, and innovation.
          </p>

          {/* Cards Grid */}
          <div className={styles.grid}>
            {principles.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.iconCircle}>
                  {item.icon}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

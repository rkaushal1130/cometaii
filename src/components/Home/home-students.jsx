import styles from './home-students.module.css'
import collageImg from '../../assets/images/webp/collage.webp'

export default function HomeStudents() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      title: 'Expert Faculty',
      desc: 'Learn directly from seasoned educators and tech industry leaders.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Practical Learning',
      desc: 'Master concepts through real-world applications and hands-on coding.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      title: 'Industry-Relevant Courses',
      desc: 'Cutting-edge curriculum built to match enterprise industry standards.'
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
      title: 'Personalized Mentorship',
      desc: 'One-on-one direction and support tailored to your career goals.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Career-Focused Training',
      desc: 'Comprehensive interview prep, resume building, and placement support.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
      title: 'Flexible Learning',
      desc: 'Hybrid, online, and on-campus schedule options to fit your lifestyle.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Affordable Education',
      desc: 'High-impact technical education at accessible and transparent pricing.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: 'Supportive Environment',
      desc: 'Collaborative learning community pushing you towards excellence.'
    }
  ]

  return (
    <section className={styles.students}>
      <div className={styles.wrap}>
        <div className={styles.scard}>
          <div className={styles.bgPattern} />
          <div className={styles.bgGlow} />

          <div className={styles.content}>
            <span className={styles.badge}>WHY STUDENTS CHOOSE US</span>
            <h2>Trusted By <span className={styles.accent}>Students</span></h2>
            <p className={styles.intro}>
              At Comet AI, we empower aspiring professionals with practical, industry-focused AI education designed for real-world success. Our expert-led training, hands-on projects, and personalized mentorship help students build the confidence and skills needed to thrive in today's AI-driven world.
            </p>
            <div className={styles.feats}>
              {features.map((f, i) => (
                <div key={i} className={styles.feat}>
                  <div className={styles.featIcon}>{f.icon}</div>
                  <div>
                    <b>{f.title}</b>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.media}>
            <div className={styles.orbit}>
              <img src={collageImg} alt="Students collage" loading="lazy" decoding="async" />
            </div>
            <div className={styles.statCard}>
              <b>1,000+</b>
              <span>Students Trained</span>
            </div>
            <div className={styles.statCard2}>
              <b>95%</b>
              <span>Student Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

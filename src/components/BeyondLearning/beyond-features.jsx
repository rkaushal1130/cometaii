import styles from './beyond-features.module.css'

export default function BeyondFeatures() {
  const features = [
    {
      id: 'industrial-training',
      title: 'Industrial Training',
      description:
        'Get hands-on experience with real industry projects, expert mentoring, and the latest technologies to bridge the gap between learning and industry.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Factory building outline with gear */}
          <path d="M8 40V22L20 28V20L32 26V14L40 18V40H8Z" />
          <path d="M12 40V32H18V40" />
          <circle cx="36" cy="10" r="4" />
          <path d="M36 4v2M36 14v2M30 10h2M40 10h2" />
        </svg>
      ),
      linkText: 'View Details',
      href: '#'
    },
    {
      id: 'interview-preparation',
      title: 'Interview Preparation',
      description:
        'Prepare with mock interviews, aptitude sessions, resume building and expert guidance to crack technical and HR rounds with confidence.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* People talking with speech bubbles */}
          <path d="M16 26a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
          <path d="M8 40v-4a6 6 0 0 1 6-6h4" />
          <path d="M32 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
          <path d="M40 40v-4a5 5 0 0 0-5-5h-3" />
          <path d="M26 8h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4l-4 4v-4h-4" />
        </svg>
      ),
      linkText: 'View Details',
      href: '#'
    },
    {
      id: 'internship-programs',
      title: 'Internship Programs',
      description:
        'Gain real-world exposure by working on live projects, collaborating with industry experts, and building a strong foundation for your professional journey.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Person with briefcase */}
          <circle cx="24" cy="14" r="6" />
          <path d="M12 38v-4a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v4" />
          <rect x="28" y="26" width="14" height="10" rx="2" />
          <path d="M32 26v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        </svg>
      ),
      linkText: 'View Details',
      href: '#'
    },
    {
      id: 'success-stories',
      title: 'Success Stories',
      description:
        'Be inspired by our students who turned their learning into successful careers. Their journeys reflect our commitment to your future success.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Trophy icon */}
          <path d="M14 10h20v14a10 10 0 0 1-20 0V10Z" />
          <path d="M14 14H8a4 4 0 0 0-4 4v2a6 6 0 0 0 6 6h4" />
          <path d="M34 14h6a4 4 0 0 1 4 4v2a6 6 0 0 1-6 6h-4" />
          <path d="M24 24v10" />
          <path d="M16 40h16v-6H16v6Z" />
        </svg>
      ),
      linkText: 'View Details',
      href: '#'
    }
  ]

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          {features.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

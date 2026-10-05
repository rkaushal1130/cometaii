import styles from './career-culture.module.css'

export default function CareerCulture() {
  const cards = [
    {
      id: 'collaborative',
      title: 'Collaborative Environment',
      desc: 'Work alongside experienced mentors, trainers, and industry professionals in a supportive, knowledge-sharing culture.',
      badgeClass: 'blueBadge',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="7" r="4"/>
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          <path d="M21 21v-2a4 4 0 0 0-3-3.85"/>
        </svg>
      )
    },
    {
      id: 'growth',
      title: 'Career Growth',
      desc: 'Grow your career with clear advancement opportunities, leadership roles, performance recognition, and professional development.',
      badgeClass: 'blueBadge',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/>
          <path d="M9 12H4.5s.55-3.03 2-4.5c1.47-1.47 4.5-2 4.5-2"/>
          <path d="M12 9v4.5s3.03-.55 4.5-2c1.47-1.47 2-4.5 2-4.5"/>
        </svg>
      )
    },
    {
      id: 'wellbeing',
      title: 'Employee Well-being',
      desc: 'We value work-life balance with a positive workplace, flexible support, team activities and a culture built on respect and inclusion.',
      badgeClass: 'redBadge',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
    {
      id: 'innovation',
      title: 'Innovation First',
      desc: 'Bring your ideas to life. We encourage creativity, experimentation, and the adoption of modern teaching methods and emerging technologies.',
      badgeClass: 'cyanBadge',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
        </svg>
      )
    },
    {
      id: 'impact',
      title: 'Student Impact',
      desc: "Every contribution helps shape students' future. Make a meaningful difference by empowering learners with practical, industry-ready skills.",
      badgeClass: 'blueBadge',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      )
    },
    {
      id: 'balance',
      title: 'Healthy Work-Life Balance',
      desc: 'We believe a positive work environment, engaging experiences, and career-focused education lead to long-term success.',
      badgeClass: 'purpleBadge',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
          <path d="M7 21h10"/>
          <path d="M12 3v18"/>
          <path d="M3 7h18"/>
        </svg>
      )
    },
    {
      id: 'education',
      title: 'Empower Through Education',
      desc: "Every role contributes to shaping students' careers and empowering the next generation of technology professionals.",
      badgeClass: 'orangeBadge',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
          <path d="M4 22h16"/>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
        </svg>
      )
    },
    {
      id: 'inclusive',
      title: 'Inclusive Workplace',
      desc: 'We value diversity, respect every perspective, and create an inclusive environment where everyone can thrive.',
      badgeClass: 'purpleBadge',
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
      id: 'engagement',
      title: 'Team Engagement',
      desc: 'From team outings and workshops to festive celebrations and knowledge-sharing events, we build strong connections beyond work.',
      badgeClass: 'pinkBadge',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      )
    }
  ]

  return (
    <section className={styles.culture}>
      <div className={styles.wrap}>
        {/* Section Tag */}
        <div className={styles.tagWrapper}>
          <span className={styles.dash}></span>
          <span className={styles.tagText}>Work culture</span>
          <span className={styles.dash}></span>
        </div>

        {/* Intro */}
        <p className={styles.introText}>
          At Comet AI Institute, we foster a workplace where passionate educators, mentors, and professionals collaborate to inspire the next generation of technology leaders. We believe in continuous learning, teamwork, and creating meaningful impact every day.
        </p>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={`${styles.iconBadge} ${styles[card.badgeClass]}`}>
                {card.icon}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

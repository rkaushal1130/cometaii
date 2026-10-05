import styles from './about-infrastructure.module.css'

const cards = [
  {
    title: 'Smart Classrooms',
    desc: 'Well-equipped classrooms with smart boards, projectors and audio systems for an interactive learning experience.',
    img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=225&fit=crop&auto=format',
    accent: 'accentBlue',
    titleClr: 'titleBlue',
  },
  {
    title: 'Advanced Computer Labs',
    desc: 'High-performance systems with the latest software and tools to support practical learning and innovation.',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=225&fit=crop&auto=format',
    accent: 'accentTeal',
    titleClr: 'titleTeal',
  },
  {
    title: 'Digital Learning Resource Center',
    desc: 'Access to e-books, online journals and industry resources to support research and continuous learning.',
    img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=225&fit=crop&auto=format',
    accent: 'accentOrange',
    titleClr: 'titleOrange',
  },
  {
    title: 'Student Counselling & Mentorship',
    desc: 'Personalized mentoring and counselling to guide students in academics, career and personal growth.',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=225&fit=crop&auto=format',
    accent: 'accentPurple',
    titleClr: 'titlePurple',
  },
  {
    title: 'Comfortable Learning Environment',
    desc: 'Air-conditioned, clean and well-maintained campus with student-friendly spaces.',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=225&fit=crop&auto=format',
    accent: 'accentGreen',
    titleClr: 'titleGreen',
  },
  {
    title: 'Safe & Secure Campus',
    desc: '24/7 security, CCTV surveillance and safe infrastructure for a worry-free learning environment.',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=225&fit=crop&auto=format',
    accent: 'accentIndigo',
    titleClr: 'titleIndigo',
  },
]

export default function AboutInfrastructure() {
  return (
    <section className={styles.infra}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.bgGrid} />

      <div className={styles.wrap}>
        <div className={styles.headWrap}>
          <div className={styles.overline}>Our Facilities</div>
          <h2>World-Class <span>Infrastructure</span></h2>
          <p className={styles.subtitle}>
            A future-ready campus designed to inspire innovation, collaboration,
            and excellence in AI education.
          </p>
        </div>

        <div className={styles.cards}>
          {cards.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardBg} />
              <div className={styles.cardContent}>
                <div className={`${styles.iconCircle} ${styles[card.accent]}`}>
                  <svg viewBox="0 0 24 24" fill="none">
                    {i === 0 && <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 22h8M12 18v4" /></>}
                    {i === 1 && <><rect x="4" y="4" width="16" height="12" rx="1" /><path d="M9 20h6M12 16v4" /></>}
                    {i === 2 && <><path d="M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v14a1 1 0 01-1 1H6.5A2.5 2.5 0 004 19.5z" /><path d="M14 2v14" /></>}
                    {i === 3 && <><circle cx="12" cy="8" r="3" /><path d="M5 20c0-4 3-7 7-7s7 3 7 7" /></>}
                    {i === 4 && <><path d="M4 18v-3a4 4 0 014-4h8a4 4 0 014 4v3M6 18h12" /><path d="M8 11V8a4 4 0 018 0v3" /></>}
                    {i === 5 && <><path d="M4 8l8-4 8 4M6 8v10h12V8" /><circle cx="12" cy="12" r="2" /></>}
                  </svg>
                </div>
                <h4 className={styles[card.titleClr]}>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
              <div className={`${styles.cardImageWrap} ${styles[card.accent]}`}>
                <div className={styles.cardImage}>
                  <img src={card.img} alt={card.title} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

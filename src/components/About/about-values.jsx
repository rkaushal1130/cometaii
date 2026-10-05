import styles from './about-values.module.css'

export default function AboutValues() {
  const values = [
    {
      id: 'excellence',
      title: 'EXCELLENCE',
      desc: 'We strive for the highest standards in teaching, learning and personal growth.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"/>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
      ),
      color: 'c-excellence'
    },
    {
      id: 'integrity',
      title: 'INTEGRITY',
      desc: 'We believe in honesty, transparency and strong ethical practices.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      ),
      color: 'c-integrity'
    },
    {
      id: 'learning',
      title: 'LEARNING',
      desc: 'We are committed to continuous learning and empowering curious minds.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      color: 'c-learning'
    },
    {
      id: 'innovation',
      title: 'INNOVATION',
      desc: 'We embrace creativity and new ideas to create better learning experiences.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
        </svg>
      ),
      color: 'c-innovation'
    },
    {
      id: 'respect',
      title: 'RESPECT',
      desc: 'We value every individual and foster a culture of respect and inclusion.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="7" r="4"/>
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
          <circle cx="17" cy="8" r="2.5"/>
          <path d="M21 21v-2a3 3 0 0 0-2.3-2.9"/>
        </svg>
      ),
      color: 'c-respect'
    },
    {
      id: 'responsibility',
      title: 'RESPONSIBILITY',
      desc: 'We take responsibility for our actions and contribute positively to society.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10h-10V2z"/>
          <path d="M22 12A10 10 0 0 0 12 2v10h10z"/>
          <path d="M12 12 7 7"/>
        </svg>
      ),
      color: 'c-responsibility'
    }
  ]

  return (
    <section className={styles.values}>
      <div className={styles.wrap}>
        <h2>CORE VALUES</h2>
        <div className={styles.sub}>
          <span>The Principles That Guide Everything We Do</span>
        </div>
        <div className={styles.diagram}>
          <div className={styles.vcol}>
            {values.slice(0, 3).map(value => (
              <div key={value.id} className={styles.vitem}>
                <div className={`${styles.vbadge} ${styles[value.color]}`}>
                  {value.icon}
                </div>
                <div>
                  <h3 className={styles[`t-${value.id}`]}>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.centerCircle}>
            <div className={styles.ring}></div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18M4 21V10l8-5 8 5v11M9 21v-6h6v6M3 10h18"/>
            </svg>
            <div className={styles.c1}>COMMITTED TO</div>
            <div className={styles.c2}>EXCELLENCE<br/>IN EDUCATION</div>
            <div className={styles.stars}>★ ★ ★</div>
          </div>

          <div className={`${styles.vcol} ${styles.right}`}>
            {values.slice(3).map(value => (
              <div key={value.id} className={styles.vitem}>
                <div className={`${styles.vbadge} ${styles[value.color]}`}>
                  {value.icon}
                </div>
                <div>
                  <h3 className={styles[`t-${value.id}`]}>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

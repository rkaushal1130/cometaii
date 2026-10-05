import styles from './beyond-workshops.module.css'

export default function BeyondWorkshops() {
  const workshops = [
    {
      title: 'Expert-Led Seminars',
      desc: 'Interactive knowledge sessions conducted by industry leaders and academic pioneers.',
      icon: '🎓',
      badge: 'Expert Series'
    },
    {
      title: 'Industry Workshops',
      desc: 'Hands-on practical sessions focused on solving real-world corporate challenges.',
      icon: '🏭',
      badge: 'Corporate'
    },
    {
      title: 'AI & Technology Workshops',
      desc: 'Deep dives into Artificial Intelligence, Machine Learning, and next-gen tech stacks.',
      icon: '🤖',
      badge: 'AI Specialization'
    },
    {
      title: 'Commerce & Management Sessions',
      desc: 'Strategic business insights, financial modeling, and managerial leadership training.',
      icon: '📊',
      badge: 'Management'
    },
    {
      title: 'Career Guidance Seminars',
      desc: 'Personalized career roadmapping, resume crafting, and high-impact interview preparation.',
      icon: '🎯',
      badge: 'Career Boost'
    },
    {
      title: 'Entrepreneurship Workshops',
      desc: 'Startup incubation fundamentals, pitch deck strategy, and business scaling guidance.',
      icon: '🚀',
      badge: 'Incubation'
    },
    {
      title: 'Personality Development Programs',
      desc: 'Professional etiquette, executive presence, and confidence-building bootcamps.',
      icon: '✨',
      badge: 'Soft Skills'
    },
    {
      title: 'Communication Skills Workshops',
      desc: 'Master public speaking, corporate articulation, and persuasive negotiation techniques.',
      icon: '🗣️',
      badge: 'Communication'
    },
    {
      title: 'Faculty Development Programs (FDPs)',
      desc: 'Empowering educators with modern AI pedagogical tools and innovative teaching methods.',
      icon: '👨‍🏫',
      badge: 'For Educators'
    },
    {
      title: 'Guest Lectures by Industry Experts',
      desc: 'Exclusive keynote addresses and Q&A sessions with top tech and business executives.',
      icon: '💡',
      badge: 'Keynote'
    },
    {
      title: 'Hands-on Training Sessions',
      desc: 'Live coding labs, tool practice, and real-time execution environment training.',
      icon: '💻',
      badge: 'Practical Lab'
    },
    {
      title: 'Certification Workshops',
      desc: 'Skill-focused intensives offering industry-recognized professional certification credentials.',
      icon: '📜',
      badge: 'Certified'
    }
  ]

  return (
    <section className={styles.section} id="seminars-workshops">
      <div className={styles.wrap}>
        <div className={styles.header}>
          <span className={styles.badge}>LEARNING &amp; EXPOSURE</span>
          <h2 className={styles.title}>Seminars &amp; <span className={styles.accent}>Workshops</span></h2>
          <p className={styles.subtitle}>
            Comprehensive skill-building bootcamps, expert-led seminars, and specialized training programs designed to accelerate your growth.
          </p>
        </div>

        <div className={styles.grid}>
          {workshops.map((w, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.iconCircle}>{w.icon}</span>
                <span className={styles.tagBadge}>{w.badge}</span>
              </div>
              <h3 className={styles.cardTitle}>{w.title}</h3>
              <p className={styles.cardDesc}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

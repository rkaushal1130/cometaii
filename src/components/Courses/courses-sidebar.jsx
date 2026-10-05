import styles from './courses-sidebar.module.css'

export default function CoursesSidebar({ activeLevel, setActiveLevel, activeMode, setActiveMode }) {
  const levels = [
    { id: 'beginner', name: 'Beginner', desc: 'Start your learning journey', colorClass: 'green' },
    { id: 'intermediate', name: 'Intermediate', desc: 'Build strong fundamentals', colorClass: 'blue' },
    { id: 'advanced', name: 'Advanced', desc: 'Master in-demand skills', colorClass: 'purple' },
    { id: 'all-levels', name: 'All Levels', desc: 'Explore all courses', colorClass: 'orange' }
  ]

  const modes = [
    { id: 'live', name: 'Live Classes', desc: 'Learn with expert instructors', colorClass: 'red' },
    { id: 'self-paced', name: 'Self-Paced', desc: 'Learn at your own pace', colorClass: 'gold' },
    { id: 'hybrid', name: 'Hybrid', desc: 'Live + Recorded sessions', colorClass: 'blue' },
    { id: 'weekend', name: 'Weekend Batches', desc: 'Learn on weekends', colorClass: 'purple' }
  ]

  return (
    <aside className={styles.sidebar}>
      {/* Course Level Filter Box */}
      <div className={styles.filterCard}>
        <h4 className={styles.cardTitle}>Course Level</h4>
        <div className={styles.optionList}>
          {levels.map((item) => (
            <div
              key={item.id}
              className={`${styles.optionItem} ${activeLevel === item.id ? styles.active : ''}`}
              onClick={() => setActiveLevel(activeLevel === item.id ? null : item.id)}
            >
              <div className={`${styles.iconBadge} ${styles[item.colorClass]}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className={styles.optionContent}>
                <span className={styles.optionName}>{item.name}</span>
                <span className={styles.optionDesc}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Mode Filter Box */}
      <div className={styles.filterCard}>
        <h4 className={styles.cardTitle}>Course Mode</h4>
        <div className={styles.optionList}>
          {modes.map((item) => (
            <div
              key={item.id}
              className={`${styles.optionItem} ${activeMode === item.id ? styles.active : ''}`}
              onClick={() => setActiveMode(activeMode === item.id ? null : item.id)}
            >
              <div className={`${styles.iconBadge} ${styles[item.colorClass]}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </div>
              <div className={styles.optionContent}>
                <span className={styles.optionName}>{item.name}</span>
                <span className={styles.optionDesc}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

import styles from './courses-hero.module.css'

export default function CoursesHero({ searchQuery, setSearchQuery }) {
  const popularSearches = [
    'Data Science',
    'Machine Learning',
    'AWS',
    'Cybersecurity',
    'Full Stack'
  ]

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const trendingSec = document.getElementById('trending-courses')
    if (trendingSec) {
      trendingSec.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTagClick = (tag) => {
    setSearchQuery(tag)
    const trendingSec = document.getElementById('trending-courses')
    if (trendingSec) {
      trendingSec.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow}></div>
      <div className={styles.gridOverlay}></div>

      <div className={styles.wrap}>
        {/* Left Column: Heading & Subtitle */}
        <div className={styles.leftCol}>
          <h1 className={styles.title}>
            Find the Right Course <br />
            for <span className={styles.highlight}>Your Future</span>
          </h1>
          <p className={styles.desc}>
            Industry-designed programs to build in-demand skills and accelerate your career.
          </p>
        </div>

        {/* Right Column: Search Box & Tags */}
        <div className={styles.rightCol}>
          <form className={styles.searchBar} onSubmit={handleSearchSubmit}>
            <div className={styles.inputWrapper}>
              <svg viewBox="0 0 24 24" className={styles.searchIcon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search for courses, skills, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            {searchQuery && (
              <button
                type="button"
                className={styles.clearBtn}
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
            <button type="submit" className={styles.searchBtn}>
              Search
            </button>
          </form>

          {/* Popular Searches */}
          <div className={styles.popularWrapper}>
            <span className={styles.popularLabel}>Popular Searches:</span>
            <div className={styles.tagList}>
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`${styles.tagPill} ${searchQuery === tag ? styles.activeTag : ''}`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

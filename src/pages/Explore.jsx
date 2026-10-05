import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareerHero from '../components/Career/career-hero'
import CareerCulture from '../components/Career/career-culture'
import CareerPrinciples from '../components/Career/career-principles'
import CareerEnvironment from '../components/Career/career-environment'
import { articlesData, blogsData } from '../data/exploreData'
import styles from '../styles/explore.module.css'

export default function Explore() {
  const navigate = useNavigate()

  // Initialize active tab from URL hash if available
  const getInitialTab = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase()
    if (['career', 'articles', 'blogs', 'all'].includes(hash)) {
      return hash
    }
    return 'all'
  }

  const [activeTab, setActiveTab] = useState(getInitialTab)

  useEffect(() => {
    document.title = 'Explore | Comet AI Institute'
    window.scrollTo(0, 0)

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase()
      if (['career', 'articles', 'blogs', 'all'].includes(hash)) {
        setActiveTab(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSelectTab = (tabId, shouldScroll = true) => {
    setActiveTab(tabId)
    window.history.replaceState(null, '', `#${tabId}`)

    if (shouldScroll) {
      setTimeout(() => {
        const contentEl = document.getElementById('explore-content')
        if (contentEl) {
          const yOffset = -90
          const y = contentEl.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
        }
      }, 50)
    }
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '84px' }}>
        {/* Explore Hero Showcase */}
        <section className={styles.exploreHeroBanner}>
          <div className={styles.exploreHeroInner}>
            <span className={styles.exploreBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
              Discover Comet AI
            </span>

            <h1 className={styles.exploreHeroTitle}>
              Explore <span>Our Universe</span>
            </h1>

            <p className={styles.exploreHeroSubtitle}>
              Dive into high-impact career opportunities, deep technical articles, and our latest AI perspectives all in one place.
            </p>

            {/* Segmented Pill Filter Controls */}
            <div className={styles.pillSwitchWrapper}>
              <div className={styles.pillSwitcher} role="tablist" aria-label="Explore Sections">
                <button
                  role="tab"
                  aria-selected={activeTab === 'career'}
                  className={`${styles.pillButton} ${activeTab === 'career' ? styles.activePill : ''}`}
                  onClick={() => handleSelectTab('career')}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>Careers</span>
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === 'articles'}
                  className={`${styles.pillButton} ${activeTab === 'articles' ? styles.activePill : ''}`}
                  onClick={() => handleSelectTab('articles')}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span>Articles</span>
                  <span className={styles.pillCount}>{articlesData.length}</span>
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === 'blogs'}
                  className={`${styles.pillButton} ${activeTab === 'blogs' ? styles.activePill : ''}`}
                  onClick={() => handleSelectTab('blogs')}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                  <span>Blogs</span>
                  <span className={styles.pillCount}>{blogsData.length}</span>
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === 'all'}
                  className={`${styles.pillButton} ${activeTab === 'all' ? styles.activePill : ''}`}
                  onClick={() => handleSelectTab('all')}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <span>View All</span>
                </button>
              </div>
            </div>

            {/* Interactive Gateway Cards */}
            <div className={styles.gatewayGrid}>
              {/* Card 1: Careers */}
              <div
                className={`${styles.gatewayCard} ${activeTab === 'career' ? styles.gatewayCardActive : ''}`}
                onClick={() => handleSelectTab('career')}
              >
                <div>
                  <div className={styles.gatewayIconRow}>
                    <div className={styles.gatewayIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <span className={styles.gatewayTag}>Hiring Now</span>
                  </div>
                  <h3 className={styles.gatewayTitle}>Career Opportunities</h3>
                  <p className={styles.gatewayDesc}>
                    Join our team of researchers, educators, and engineers building next-generation AI education.
                  </p>
                </div>
                <div className={styles.gatewayAction}>
                  <span>Explore Careers</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>

              {/* Card 2: Articles */}
              <div
                className={`${styles.gatewayCard} ${activeTab === 'articles' ? styles.gatewayCardActive : ''}`}
                onClick={() => handleSelectTab('articles')}
              >
                <div>
                  <div className={styles.gatewayIconRow}>
                    <div className={styles.gatewayIcon} style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc', borderColor: 'rgba(165, 180, 252, 0.3)' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </div>
                    <span className={styles.gatewayTag} style={{ color: '#a5b4fc', borderColor: 'rgba(165, 180, 252, 0.3)' }}>
                      {articlesData.length} Guides
                    </span>
                  </div>
                  <h3 className={styles.gatewayTitle}>Technical Articles</h3>
                  <p className={styles.gatewayDesc}>
                    Detailed architectural comparisons, framework deep-dives, and practical tech career roadmaps.
                  </p>
                </div>
                <div className={styles.gatewayAction} style={{ color: '#a5b4fc' }}>
                  <span>Read Articles</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>

              {/* Card 3: Blogs */}
              <div
                className={`${styles.gatewayCard} ${activeTab === 'blogs' ? styles.gatewayCardActive : ''}`}
                onClick={() => handleSelectTab('blogs')}
              >
                <div>
                  <div className={styles.gatewayIconRow}>
                    <div className={styles.gatewayIcon} style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#d8b4fe', borderColor: 'rgba(216, 180, 254, 0.3)' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <span className={styles.gatewayTag} style={{ color: '#d8b4fe', borderColor: 'rgba(216, 180, 254, 0.3)' }}>
                      {blogsData.length} Posts
                    </span>
                  </div>
                  <h3 className={styles.gatewayTitle}>Latest Blogs</h3>
                  <p className={styles.gatewayDesc}>
                    Perspectives on autonomous systems, student transformations, and life inside Comet AI Institute.
                  </p>
                </div>
                <div className={styles.gatewayAction} style={{ color: '#d8b4fe' }}>
                  <span>View Blogs</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Destination Area */}
        <div id="explore-content">
          {/* 1. Career Section */}
          {(activeTab === 'career' || activeTab === 'all') && (
            <section id="career" className={styles.sectionContent}>
              {activeTab === 'all' && (
                <div style={{ paddingTop: '50px', textAlign: 'center' }}>
                  <span className={styles.sectionBadge}>WORK WITH US</span>
                  <h2 className={styles.sectionTitle}>Careers at Comet AI</h2>
                </div>
              )}
              <CareerHero />
              <CareerCulture />
              <CareerPrinciples />
              <CareerEnvironment />
            </section>
          )}

          {/* 2. Article Section */}
          {(activeTab === 'articles' || activeTab === 'all') && (
            <section
              id="articles"
              className={`${styles.exploreContainer} ${styles.sectionContent}`}
              style={{
                paddingTop: activeTab === 'articles' ? '60px' : '40px',
                paddingBottom: activeTab === 'articles' ? '100px' : '40px'
              }}
            >
              {activeTab === 'all' && <hr className={styles.sectionDivider} />}
              <div className={styles.sectionHeaderWrapper}>
                <span className={styles.sectionBadge}>KNOWLEDGE BASE</span>
                <h2 className={styles.sectionTitle}>Featured Technical Articles</h2>
                <p className={styles.sectionSubtitle}>
                  In-depth architectural comparisons, practical skill guides, and expert engineering analysis.
                </p>
              </div>

              <div className={styles.grid}>
                {articlesData.map((article) => (
                  <article key={article.id} className={styles.card}>
                    <div className={styles.cardImageWrapper}>
                      <img src={article.image} alt={article.title} className={styles.cardImage} />
                      <span className={styles.cardBadge}>{article.category}</span>
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardMeta}>
                        <div className={styles.cardMetaItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                          <span>{article.date}</span>
                        </div>
                        <div className={styles.cardMetaItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <h3 className={styles.cardTitle}>{article.title}</h3>
                      <p className={styles.cardExcerpt}>{article.excerpt}</p>
                      <button
                        className={styles.readMoreBtn}
                        onClick={() => navigate(`/explore/article/${article.id}`)}
                      >
                        Read Article
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* 3. Blog Section */}
          {(activeTab === 'blogs' || activeTab === 'all') && (
            <section
              id="blogs"
              className={`${styles.exploreContainer} ${styles.sectionContent}`}
              style={{
                paddingTop: activeTab === 'blogs' ? '60px' : '20px',
                paddingBottom: '100px'
              }}
            >
              {activeTab === 'all' && <hr className={styles.sectionDivider} />}
              <div className={styles.sectionHeaderWrapper}>
                <span className={styles.sectionBadge}>COMMUNITY &amp; INSIGHTS</span>
                <h2 className={styles.sectionTitle}>Latest Blogs &amp; Stories</h2>
                <p className={styles.sectionSubtitle}>
                  Perspectives on autonomous systems, student transformations, and life inside Comet AI Institute.
                </p>
              </div>

              <div className={styles.grid}>
                {blogsData.map((blog) => (
                  <article key={blog.id} className={styles.card}>
                    <div className={styles.cardImageWrapper}>
                      <img src={blog.image} alt={blog.title} className={styles.cardImage} />
                      <span className={styles.cardBadge}>{blog.category}</span>
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardMeta}>
                        <div className={styles.cardMetaItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                          <span>{blog.date}</span>
                        </div>
                        <div className={styles.cardMetaItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                          <span>{blog.author}</span>
                        </div>
                      </div>
                      <h3 className={styles.cardTitle}>{blog.title}</h3>
                      <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                      <button
                        className={styles.readMoreBtn}
                        onClick={() => navigate(`/explore/blog/${blog.id}`)}
                      >
                        Read Blog
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

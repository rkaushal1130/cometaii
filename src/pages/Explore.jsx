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
    if (['all', 'career', 'articles', 'blogs'].includes(hash)) {
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
      if (['all', 'career', 'articles', 'blogs'].includes(hash)) {
        setActiveTab(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId)
    window.history.replaceState(null, '', `#${tabId}`)

    if (window.scrollY > 300) {
      const contentEl = document.getElementById('explore-content')
      if (contentEl) {
        const yOffset = -90
        const y = contentEl.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '84px' }}>
        {/* Simple & Elegant Hero Banner */}
        <section className={styles.exploreHeroBanner}>
          <div className={styles.exploreHeroInner}>
            {/* Top-Left Category Tabs */}
            <div className={styles.tabsWrapper}>
              <div className={styles.tabs} role="tablist" aria-label="Explore Categories">
                <button
                  role="tab"
                  aria-selected={activeTab === 'all'}
                  className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
                  onClick={() => handleSelectTab('all')}
                >
                  All
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === 'career'}
                  className={`${styles.tab} ${activeTab === 'career' ? styles.activeTab : ''}`}
                  onClick={() => handleSelectTab('career')}
                >
                  Careers
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === 'articles'}
                  className={`${styles.tab} ${activeTab === 'articles' ? styles.activeTab : ''}`}
                  onClick={() => handleSelectTab('articles')}
                >
                  Articles
                  <span className={styles.tabBadge}>{articlesData.length}</span>
                </button>

                <button
                  role="tab"
                  aria-selected={activeTab === 'blogs'}
                  className={`${styles.tab} ${activeTab === 'blogs' ? styles.activeTab : ''}`}
                  onClick={() => handleSelectTab('blogs')}
                >
                  Blogs
                  <span className={styles.tabBadge}>{blogsData.length}</span>
                </button>
              </div>
            </div>

            {/* Hero Text */}
            <div className={styles.heroContent}>
              <span className={styles.exploreBadge}>
                Discover Comet AI
              </span>

              <h1 className={styles.exploreHeroTitle}>
                Explore <span>Comet AI</span>
              </h1>

              <p className={styles.exploreHeroSubtitle}>
                Discover high-impact career opportunities, expert educational articles, and our latest AI perspectives all in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <div id="explore-content">
          {/* 1. Career Section */}
          {(activeTab === 'career' || activeTab === 'all') && (
            <section id="career" className={styles.sectionContent}>
              {activeTab === 'all' && (
                <div style={{ paddingTop: '40px', textAlign: 'center' }}>
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
                paddingTop: activeTab === 'articles' ? '50px' : '40px',
                paddingBottom: activeTab === 'articles' ? '90px' : '40px'
              }}
            >
              {activeTab === 'all' && <hr className={styles.sectionDivider} />}
              <div className={styles.sectionHeaderWrapper}>
                <span className={styles.sectionBadge}>KNOWLEDGE &amp; GUIDES</span>
                <h2 className={styles.sectionTitle}>Featured Articles</h2>
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
                paddingTop: activeTab === 'blogs' ? '50px' : '20px',
                paddingBottom: '90px'
              }}
            >
              {activeTab === 'all' && <hr className={styles.sectionDivider} />}
              <div className={styles.sectionHeaderWrapper}>
                <span className={styles.sectionBadge}>COMMUNITY &amp; INSIGHTS</span>
                <h2 className={styles.sectionTitle}>Latest Blogs</h2>
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

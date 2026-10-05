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
  const [scrolled, setScrolled] = useState(false)

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

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase()
      if (['career', 'articles', 'blogs', 'all'].includes(hash)) {
        setActiveTab(hash)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    window.history.replaceState(null, '', `#${tabId}`)

    // Smooth scroll to content
    const navEl = document.getElementById('explore-nav')
    if (navEl) {
      const topOffset = scrolled ? 76 : 84
      const targetY = navEl.getBoundingClientRect().top + window.scrollY - topOffset
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '84px' }}>
        {/* Explore Hero Banner */}
        <div className={styles.exploreHeroBanner}>
          <div className={styles.exploreHeroInner}>
            <span className={styles.exploreBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
              Comet AI Knowledge &amp; Opportunities
            </span>
            <h1 className={styles.exploreHeroTitle}>
              Explore <span>Comet AI</span>
            </h1>
            <p className={styles.exploreHeroSubtitle}>
              Explore high-impact career opportunities, expert educational articles, and our latest AI perspectives all in one place.
            </p>
          </div>
        </div>

        {/* Sticky Explore Navigation Bar */}
        <nav
          id="explore-nav"
          className={`${styles.exploreNavbarWrapper} ${scrolled ? styles.scrolledNav : ''}`}
          aria-label="Explore Sections"
        >
          <div className={styles.exploreNavContainer}>
            <div className={styles.exploreNavBrand}>
              <span className={styles.exploreNavBrandIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </span>
              <span>Explore Sections</span>
            </div>

            <div className={styles.exploreNavLinks}>
              {/* Career Section Nav Link */}
              <button
                className={`${styles.navLinkBtn} ${activeTab === 'career' ? styles.activeNavLink : ''}`}
                onClick={() => handleTabChange('career')}
                aria-current={activeTab === 'career' ? 'page' : undefined}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                <span>Career Section</span>
              </button>

              {/* Article Section Nav Link */}
              <button
                className={`${styles.navLinkBtn} ${activeTab === 'articles' ? styles.activeNavLink : ''}`}
                onClick={() => handleTabChange('articles')}
                aria-current={activeTab === 'articles' ? 'page' : undefined}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <span>Article Section</span>
                <span className={styles.navBadge}>{articlesData.length}</span>
              </button>

              {/* Blog Section Nav Link */}
              <button
                className={`${styles.navLinkBtn} ${activeTab === 'blogs' ? styles.activeNavLink : ''}`}
                onClick={() => handleTabChange('blogs')}
                aria-current={activeTab === 'blogs' ? 'page' : undefined}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                <span>Blog Section</span>
                <span className={styles.navBadge}>{blogsData.length}</span>
              </button>

              {/* All Sections Nav Link */}
              <button
                className={`${styles.navLinkBtn} ${activeTab === 'all' ? styles.activeNavLink : ''}`}
                onClick={() => handleTabChange('all')}
                aria-current={activeTab === 'all' ? 'page' : undefined}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
                <span>All Sections</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <div id="explore-content">
          {/* 1. Career Section */}
          {(activeTab === 'career' || activeTab === 'all') && (
            <section id="career" className={styles.sectionContent}>
              {activeTab === 'all' && (
                <div style={{ paddingTop: '40px', textAlign: 'center' }}>
                  <span className={styles.sectionBadge}>CAREERS &amp; CULTURE</span>
                  <h2 className={styles.sectionTitle}>Join Our Mission</h2>
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
                <span className={styles.sectionBadge}>KNOWLEDGE &amp; TUTORIALS</span>
                <h2 className={styles.sectionTitle}>Featured Articles</h2>
                <p className={styles.sectionSubtitle}>
                  In-depth architectural comparisons, skills breakdowns, and forward-looking AI guides.
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
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          <span>{article.date}</span>
                        </div>
                        <div className={styles.cardMetaItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
                <span className={styles.sectionBadge}>NEWS &amp; PERSPECTIVES</span>
                <h2 className={styles.sectionTitle}>Latest Blogs</h2>
                <p className={styles.sectionSubtitle}>
                  Fresh perspectives, updates, and analysis on generative models, intelligent systems, and AI careers.
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
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          <span>{blog.date}</span>
                        </div>
                        <div className={styles.cardMetaItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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

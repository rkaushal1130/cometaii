import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareerHero from '../components/Career/career-hero'
import CareerOpenings from '../components/Career/career-openings'
import CareerCulture from '../components/Career/career-culture'
import CareerPrinciples from '../components/Career/career-principles'
import CareerEnvironment from '../components/Career/career-environment'
import ArticleFeaturedSection from '../components/Explore/article-featured-section'
import BlogFeaturedSection from '../components/Explore/blog-featured-section'
import { articlesData, blogsData } from '../data/exploreData'
import styles from '../styles/explore.module.css'

export default function Explore({ initialTab }) {
  const navigate = useNavigate()

  // Initialize active tab from prop, URL hash or default to 'all'
  const getInitialTab = () => {
    if (initialTab && ['all', 'career', 'articles', 'blogs'].includes(initialTab)) {
      return initialTab
    }
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

    const contentEl = document.getElementById('explore-content')
    if (contentEl) {
      const yOffset = -90
      const y = contentEl.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
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
              <CareerOpenings />
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
              
              {/* Full Featured Article by Dr. Shruti Avasthi */}
              <ArticleFeaturedSection />

              <div className={styles.sectionHeaderWrapper} style={{ marginTop: '60px' }}>
                <span className={styles.sectionBadge}>MORE ARTICLES</span>
                <h2 className={styles.sectionTitle}>Articles Library</h2>
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
                      {/* Author Headshot & Meta */}
                      <div className={styles.authorBadgeRow} style={{ marginBottom: '12px' }}>
                        <img
                          src={article.authorAvatar}
                          alt={article.author}
                          className={styles.authorHeadshotSmall}
                        />
                        <div>
                          <strong className={styles.authorNameSmall}>{article.author}</strong>
                          <span className={styles.metaSub}>{article.date} • {article.readTime}</span>
                        </div>
                      </div>

                      <h3 className={styles.cardTitle}>{article.title}</h3>
                      <p className={styles.cardExcerpt}>{article.excerpt}</p>
                      <button
                        className={styles.readMoreBtn}
                        onClick={() => navigate(`/article/${article.id}`)}
                      >
                        Read Article
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
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

              {/* Full Featured Blog by Ms. Shivani Tayal */}
              <BlogFeaturedSection />

              <div className={styles.sectionHeaderWrapper} style={{ marginTop: '60px' }}>
                <span className={styles.sectionBadge}>MORE BLOGS</span>
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
                      {/* Author Headshot & Meta */}
                      <div className={styles.authorBadgeRow} style={{ marginBottom: '12px' }}>
                        <img
                          src={blog.authorAvatar}
                          alt={blog.author}
                          className={styles.authorHeadshotSmall}
                        />
                        <div>
                          <strong className={styles.authorNameSmall}>{blog.author}</strong>
                          <span className={styles.metaSub}>{blog.date} • {blog.readTime}</span>
                        </div>
                      </div>

                      <h3 className={styles.cardTitle}>{blog.title}</h3>
                      <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                      <button
                        className={styles.readMoreBtn}
                        onClick={() => navigate(`/blog/${blog.id}`)}
                      >
                        Read Blog
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
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

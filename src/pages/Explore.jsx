import { useEffect } from 'react'
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

  useEffect(() => {
    document.title = 'Explore | Comet AI Institute'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <div className={styles.exploreContainer} style={{ paddingBottom: '30px' }}>
          <div className={styles.exploreHeader} style={{ marginBottom: '30px' }}>
            <h1 className={styles.exploreTitle}>Explore <span>Comet AI</span></h1>
            <p className={styles.exploreSubtitle}>
              Discover our careers, educational articles, and latest updates all in one place.
            </p>
          </div>
        </div>

        {/* 1. Careers Section */}
        <section>
          <CareerHero />
          <CareerCulture />
          <CareerPrinciples />
          <CareerEnvironment />
        </section>

        {/* 2. Articles Section */}
        <section className={styles.exploreContainer} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <hr className={styles.sectionDivider} style={{ marginTop: '40px' }} />
          <h2 className={styles.sectionTitle}>Featured Articles</h2>
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

        {/* 3. Blogs Section */}
        <section className={styles.exploreContainer} style={{ paddingTop: '20px', paddingBottom: '100px' }}>
          <hr className={styles.sectionDivider} />
          <h2 className={styles.sectionTitle}>Latest Blogs</h2>
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
      </main>
      <Footer />
    </>
  )
}

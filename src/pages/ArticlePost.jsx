import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { articlesData } from '../data/exploreData'
import styles from '../styles/explore.module.css'

export default function ArticlePost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const article = articlesData.find((art) => art.id === id)

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Explore Comet AI`
    } else {
      document.title = 'Article Not Found | Comet AI'
    }
    window.scrollTo(0, 0)
  }, [article])

  if (!article) {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: '120px', paddingBottom: '100px', textAlign: 'center' }}>
          <h2>Article Not Found</h2>
          <p>The article you are looking for does not exist.</p>
          <button className={styles.backBtn} style={{ margin: '20px auto 0' }} onClick={() => navigate('/explore')}>
            Back to Explore
          </button>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <div className={styles.postDetailContainer}>
          <button className={styles.backBtn} onClick={() => navigate('/explore')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Explore
          </button>

          <header className={styles.postHeader}>
            <div className={styles.postMeta}>
              <div className={styles.cardMetaItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>{article.date}</span>
              </div>
              <div className={styles.cardMetaItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>By {article.author}</span>
              </div>
              <div className={styles.cardMetaItem}>
                <span style={{ color: 'var(--accent)', fontWeight: '700' }}>{article.category}</span>
              </div>
            </div>
            <h1 className={styles.postTitle}>{article.title}</h1>
          </header>

          <div className={styles.postImageWrapper}>
            <img src={article.image} alt={article.title} className={styles.postImage} />
          </div>

          <div 
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

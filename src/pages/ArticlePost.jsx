import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { articlesData } from '../data/exploreData'
import styles from '../styles/explore.module.css'

export default function ArticlePost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const article = articlesData.find((art) => art.id === id) || articlesData[0]

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | COMET AI Articles`
    } else {
      document.title = 'Article Not Found | COMET AI'
    }
    window.scrollTo(0, 0)
  }, [article])

  const otherArticles = articlesData.filter((art) => art.id !== article.id).slice(0, 2)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', paddingBottom: '90px' }}>
        <div className={styles.postDetailContainer}>
          <button className={styles.backBtn} onClick={() => navigate('/explore#articles')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Explore Articles
          </button>

          <header className={styles.postHeader}>
            <div className={styles.postMeta}>
              <span className={styles.detailCategoryBadge}>{article.category}</span>
              <span className={styles.detailDateText}>{article.date}</span>
              <span className={styles.detailReadTime}>• {article.readTime}</span>
            </div>

            <h1 className={styles.postTitle}>{article.title}</h1>

            {/* Author Headshot Profile Bar */}
            <div className={styles.authorProfileBar}>
              <img
                src={article.authorAvatar}
                alt={article.author}
                className={styles.detailAuthorAvatar}
              />
              <div className={styles.authorProfileText}>
                <div className={styles.authorProfileName}>{article.author}</div>
                <div className={styles.authorProfileRole}>{article.authorRole}</div>
              </div>
            </div>
          </header>

          <div className={styles.postImageWrapper}>
            <img src={article.image} alt={article.title} className={styles.postImage} />
          </div>

          <div 
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Biography Box */}
          <div className={styles.authorBioBox}>
            <img
              src={article.authorAvatar}
              alt={article.author}
              className={styles.bioAvatar}
            />
            <div className={styles.bioContent}>
              <span className={styles.bioBadge}>ABOUT THE AUTHOR</span>
              <h3 className={styles.bioName}>{article.author}</h3>
              <p className={styles.bioRole}>{article.authorRole}</p>
              <p className={styles.bioDesc}>{article.authorBio}</p>
            </div>
          </div>

          {/* Other Articles Recommendation */}
          {otherArticles.length > 0 && (
            <div className={styles.relatedSection}>
              <h3 className={styles.relatedTitle}>Recommended Articles</h3>
              <div className={styles.relatedGrid}>
                {otherArticles.map((rel) => (
                  <div key={rel.id} className={styles.relatedCard} onClick={() => navigate(`/article/${rel.id}`)}>
                    <img src={rel.image} alt={rel.title} className={styles.relatedImg} />
                    <div className={styles.relatedBody}>
                      <span className={styles.relatedBadge}>{rel.category}</span>
                      <h4 className={styles.relatedCardTitle}>{rel.title}</h4>
                      <span className={styles.relatedAuthor}>By {rel.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

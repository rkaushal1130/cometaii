import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogsData } from '../data/exploreData'
import styles from '../styles/explore.module.css'

export default function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const blog = blogsData.find((b) => b.id === id) || blogsData[0]

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} | COMET AI Blogs`
    } else {
      document.title = 'Blog Not Found | COMET AI'
    }
    window.scrollTo(0, 0)
  }, [blog])

  const otherBlogs = blogsData.filter((b) => b.id !== blog.id).slice(0, 2)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', paddingBottom: '90px' }}>
        <div className={styles.postDetailContainer}>
          <button className={styles.backBtn} onClick={() => navigate('/explore#blogs')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Explore Blogs
          </button>

          <header className={styles.postHeader}>
            <div className={styles.postMeta}>
              <span className={styles.detailCategoryBadge}>{blog.category}</span>
              <span className={styles.detailDateText}>{blog.date}</span>
              <span className={styles.detailReadTime}>• {blog.readTime}</span>
            </div>

            <h1 className={styles.postTitle}>{blog.title}</h1>

            {/* Author Headshot Profile Bar */}
            <div className={styles.authorProfileBar}>
              <img
                src={blog.authorAvatar}
                alt={blog.author}
                className={styles.detailAuthorAvatar}
              />
              <div className={styles.authorProfileText}>
                <div className={styles.authorProfileName}>{blog.author}</div>
                <div className={styles.authorProfileRole}>{blog.authorRole}</div>
              </div>
            </div>
          </header>

          <div className={styles.postImageWrapper}>
            <img src={blog.image} alt={blog.title} className={styles.postImage} />
          </div>

          <div 
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Author Biography Box */}
          <div className={styles.authorBioBox}>
            <img
              src={blog.authorAvatar}
              alt={blog.author}
              className={styles.bioAvatar}
            />
            <div className={styles.bioContent}>
              <span className={styles.bioBadge}>ABOUT THE AUTHOR</span>
              <h3 className={styles.bioName}>{blog.author}</h3>
              <p className={styles.bioRole}>{blog.authorRole}</p>
              <p className={styles.bioDesc}>{blog.authorBio}</p>
            </div>
          </div>

          {/* Other Blogs Recommendation */}
          {otherBlogs.length > 0 && (
            <div className={styles.relatedSection}>
              <h3 className={styles.relatedTitle}>Recommended Blogs</h3>
              <div className={styles.relatedGrid}>
                {otherBlogs.map((rel) => (
                  <div key={rel.id} className={styles.relatedCard} onClick={() => navigate(`/blog/${rel.id}`)}>
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

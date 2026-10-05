import styles from './about-gallery.module.css'
import leadershipImg from '../../assets/images/webp/leadership.webp'
import tallentImg from '../../assets/images/webp/tallent.webp'
import milestoneImg from '../../assets/images/webp/milestone.webp'

export default function AboutGallery() {
  const galleries = [
    { id: 1, title: 'Leadership in Action', img: leadershipImg, tag: 'Campus Life' },
    { id: 2, title: 'Recognizing Talent &amp; Excellence', img: tallentImg, tag: 'Achievements' },
    { id: 3, title: 'Celebrating Milestone Together', img: milestoneImg, tag: 'Events' }
  ]

  return (
    <section className={styles.gallery}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <span className={styles.badge}>OUR STORIES</span>
          <h2>Gallery</h2>
          <p className={styles.lead}>
            Celebrating our journey of empowering professionals and creating leaders in the tech industry.
          </p>
        </div>
        <div className={styles.gcards}>
          {galleries.map(item => (
            <div key={item.id} className={styles.gcard}>
              <img src={item.img} alt={item.title} className={styles.gimg} loading="lazy" decoding="async" />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <span className={styles.tag}>{item.tag}</span>
                <span className={styles.title}>{item.title}</span>
              </div>
              <div className={styles.glow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

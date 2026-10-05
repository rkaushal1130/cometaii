import styles from './beyond-hero.module.css'
import heroLogo from '../../assets/images/beyond_learning/Logo.png'

export default function BeyondHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      <div className={styles.wrap}>
        <div className={styles.left}>
          <h1 className={styles.title}>Beyond Learning</h1>
          <h2 className={styles.subtitle}>Experiences That Build Careers</h2>
          <p className={styles.description}>
            At Comet AI, we go beyond classrooms to shape industry-ready professionals. Explore real-world training, internships, expert guidance, and success stories that inspire.
          </p>
        </div>

        <div className={styles.right}>
          <img src={heroLogo} alt="Comet AI Institute" className={styles.logoImage} />
        </div>
      </div>
    </section>
  )
}

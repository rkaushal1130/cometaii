import styles from './beyond-cta.module.css'
import avatarImg from '../../assets/images/beyond_learning/avatar.png'
import logo from '../../assets/images/webp/logo.webp'

export default function BeyondCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.banner}>
          <div className={styles.pattern} />

          <div className={styles.foundersCol}>
            <img src={avatarImg} alt="Comet AI Leadership" className={styles.foundersImg} />
          </div>

          <div className={styles.contentCol}>
            <h2 className={styles.heading}>Your Journey Beyond Learning</h2>
            <p className={styles.text}>
              Take the next step towards a rewarding career with Comet AI's industry-aligned programs and expert support.
            </p>

            <div className={styles.actions}>
              <a href="/contact" className={styles.btnPrimary}>
                JOIN THE PROGRAM
              </a>
              <a href="/contact" className={styles.btnSecondary}>
                TALK TO ADVISOR
              </a>
            </div>
          </div>

          <div className={styles.logoCol}>
            <img src={logo} alt="Comet AI Institute" className={styles.logoImg} />
          </div>
        </div>
      </div>
    </section>
  )
}

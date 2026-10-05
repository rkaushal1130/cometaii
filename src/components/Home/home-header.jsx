import styles from './home-header.module.css'
import logo from '../../assets/images/webp/logo.webp'

export default function HomeHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.logo}>
          <img src={logo} alt="Comet AI" className={styles.logoImage} /> Comet AI
        </a>
        <div className={styles.navlinks}>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">About Us</a>
          <a href="#">Courses</a>
          <a href="#">Beyond Learning</a>
          <a href="#">Career</a>
          <a href="#">Contact US</a>
          <a href="#" className={styles.enroll}>ENROLL NOW</a>
        </div>
      </nav>
    </header>
  )
}

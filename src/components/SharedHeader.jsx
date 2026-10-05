import { Link } from 'react-router-dom'
import styles from './SharedHeader.module.css'
import logo from '../assets/images/webp/logo.webp'

export default function SharedHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Comet AI" className={styles.logoImage} /> Comet AI
        </Link>
        <div className={styles.navlinks}>
          <Link to="/" className={styles.active}>Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="#">Courses</Link>
          <Link to="#">Beyond Learning</Link>
          <Link to="#">Career</Link>
          <Link to="#">Contact US</Link>
          <a href="#" className={styles.enroll}>ENROLL NOW</a>
        </div>
      </nav>
    </header>
  )
}

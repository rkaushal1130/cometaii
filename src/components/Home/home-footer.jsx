import styles from './home-footer.module.css'
import logo from '../../assets/images/webp/logo.webp'

export default function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.fgrid}>
          <div className={styles.fbrand}>
            <a className={styles.logo}>
              <img src={logo} alt="Comet AI" className={styles.logoImage} /> Comet Ai
            </a>
            <p>Delivering global excellence in intelligence through advanced architecture, innovation, and expert-led practice.</p>
          </div>
          <div>
            <h5>Solutions</h5>
            <ul>
              <li><a href="#">Neural Network Training</a></li>
              <li><a href="#">Enterprise Data Science</a></li>
              <li><a href="#">Edge Infrastructure</a></li>
              <li><a href="#">Consulting &amp; Strategy</a></li>
            </ul>
          </div>
          <div>
            <h5>Academy</h5>
            <ul>
              <li><a href="#">Executive Data Courses</a></li>
              <li><a href="#">AI Bootcamp Program</a></li>
              <li><a href="#">Engineering Careers</a></li>
              <li><a href="#">Certificate Registry</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Governance</a></li>
              <li><a href="#">Terms of Engagement</a></li>
              <li><a href="#">SLA Agreements</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.fbot}>
          <div>&copy; 2024 Comet AI Institute. All Rights Reserved.</div>
          <div className={styles.soc}>
            <a href="#">TWITTER</a>
            <a href="#">LINKEDIN</a>
            <a href="#">GITHUB</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

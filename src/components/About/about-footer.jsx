import styles from './about-footer.module.css'

export default function AboutFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.fgrid}>
          <div className={styles.fbrand}>
            <div className={styles.brand}>
              <div className={styles.logo}>C</div>
              <div><b>CometAi</b></div>
            </div>
            <p>The premier hub for AI innovation and learning. Empowering minds, shaping futures.</p>
            <div className={styles.fsoc}>
              <a href="#">f</a>
              <a href="#">in</a>
              <a href="#">t</a>
            </div>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">About CometAi</a></li>
              <li><a href="#">Courses Offered</a></li>
              <li><a href="#">Infrastructure</a></li>
              <li><a href="#">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact Info</h5>
            <ul className={styles.contact}>
              <li>📍 Rajpura, Punjab, 140401, India</li>
              <li>✉️ info@cometai.com</li>
              <li>☎️ +91-XXXXX-XXXXX</li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>&copy; 2026 CometAi Professional AI Institute. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

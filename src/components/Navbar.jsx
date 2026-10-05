import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/images/webp/logo.webp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Comet AI" className={styles.logoImage} />
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Comet AI</span>
            <span className={styles.logoSub}>INSTITUTE</span>
          </div>
        </Link>

        <div className={`${styles.navlinks} ${mobileOpen ? styles.navOpen : ""}`}>
          <Link to="/" className={isActive("/") ? styles.active : ""}>
            Home
          </Link>
          <Link to="/about" className={isActive("/about") ? styles.active : ""}>
            About Us
          </Link>
          <Link to="/courses" className={isActive("/courses") ? styles.active : ""}>Courses</Link>
          <Link to="/beyond-learning" className={isActive("/beyond-learning") ? styles.active : ""}>
            Beyond Learning
          </Link>
          <Link to="/explore" className={isActive("/explore") ? styles.active : ""}>Explore</Link>
          <Link to="/contact" className={isActive("/contact") ? styles.active : ""}>
            Contact Us
          </Link>
          <Link to="/contact" className={styles.enroll}>
            Enroll Now
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {mobileOpen && <div className={styles.backdrop} onClick={() => setMobileOpen(false)} />}
    </header>
  );
}

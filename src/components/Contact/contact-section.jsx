import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './contact-section.module.css'

export default function ContactSection() {
  const [searchParams] = useSearchParams()
  const courseParam = searchParams.get('course')

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    contactNo: '',
    subject: courseParam ? `Enrollment Inquiry: ${courseParam}` : 'Enterprise Solutions',
    message: courseParam ? `Hello, I would like to enroll in the "${courseParam}" program at Comet AI Institute.` : ''
  })

  useEffect(() => {
    if (courseParam) {
      setFormData((prev) => ({
        ...prev,
        subject: `Enrollment Inquiry: ${courseParam}`,
        message: `Hello, I would like to enroll in the "${courseParam}" program at Comet AI Institute.`
      }))
    }
  }, [courseParam])
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: '',
        workEmail: '',
        contactNo: '',
        subject: 'Enterprise Solutions',
        message: ''
      })
    }, 4000)
  }

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        {/* Header Block */}
        <div className={styles.header}>
          <span className={styles.badge}>GET IN TOUCH</span>
          <h1 className={styles.title}>WE’RE HERE TO HELP!</h1>
          <p className={styles.subtitle}>
            Have questions about admissions, courses, internships, workshops, or corporate training?<br />
            Our team is here to help you choose the right learning path.
          </p>
        </div>

        {/* Grid Container */}
        <div className={styles.grid}>
          {/* Left Column: Direct Inquiry Form */}
          <div className={styles.formCard}>
            <div className={styles.formCardHeader}>
              <h2 className={styles.cardTitle}>Direct Inquiry</h2>
              <div className={styles.cardBadges}>
                <span>Quick Response</span>
                <span>Secure</span>
              </div>
            </div>

            {submitted && (
              <div className={styles.successBanner}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Thank you! Your inquiry has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="fullName">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="workEmail">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    WORK EMAIL
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    placeholder="john@enterprise.com"
                    value={formData.workEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="contactNo">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                    CONTACT NO
                  </label>
                  <input
                    type="tel"
                    id="contactNo"
                    name="contactNo"
                    placeholder="+91 1234567890"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="subject">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    SUBJECT
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="Enterprise Solutions">Enterprise Solutions</option>
                      <option value="Course & Admissions">Course & Admissions</option>
                      <option value="Corporate Training">Corporate Training</option>
                      <option value="Career & Internships">Career & Internships</option>
                      <option value="General Support">General Support</option>
                    </select>
                    <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="message">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="How can our technical team assist your digital transformation?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.buttonRow}>
                <button type="submit" className={styles.submitBtn}>
                  <span>Send Inquiry</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </form>

            {/* Form Footer — Hours + Social */}
            <div className={styles.formFooter}>
              <div className={styles.footerHours}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <div>
                  <span className={styles.footerLabel}>Office Hours</span>
                  <span className={styles.footerText}>Mon–Sat, 9:00 AM – 6:00 PM <span className={styles.footerDivider}>|</span> Sunday <b className={styles.footerClosed}>Closed</b></span>
                </div>
              </div>
              <div className={styles.footerSocial}>
                <span className={styles.footerLabel}>Follow Us</span>
                <div className={styles.socialIcons}>
                  <a href="https://www.facebook.com/share/19JPEXA5kv/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/cometai" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://www.threads.net/@cometai_institute" target="_blank" rel="noreferrer" aria-label="Threads" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24.004c-3.15 0-5.888-.958-7.92-2.77C2.128 19.324 1 16.71 1 13.68c0-3.344 1.176-6.19 3.498-8.46C6.776 2.99 9.878 1.83 13.67 1.83c3.782 0 6.828 1.135 9.053 3.375 2.046 2.057 3.09 4.8 3.09 8.148 0 3.824-1.284 6.86-3.712 9.022-2.227 1.983-5.23 2.984-8.925 2.984h-.233v-2.316h.233c3.044 0 5.48-.804 7.24-2.39 1.96-1.765 2.994-4.27 2.994-7.29 0-2.65-.805-4.81-2.394-6.42-1.748-1.77-4.184-2.67-7.243-2.67-3.08 0-5.55.93-7.34 2.76-1.84 1.89-2.77 4.29-2.77 7.13 0 2.45.9 4.54 2.6 6.04 1.57 1.39 3.69 2.1 6.3 2.1h.44v2.32h-.44z"/></svg>
                  </a>
                  <a href="https://instagram.com/cometai_institute" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Channels & Map */}
          <div className={styles.rightCol}>
            {/* Channels Box */}
            <div className={styles.channelsCard}>
              <div className={styles.channelsCardHeader}>
                <h3 className={styles.channelsTitle}>Communication Channels</h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>

              <div className={styles.channelList}>
                {/* Email Us */}
                <div className={`${styles.channelItem} ${styles.channelEmail}`}>
                  <div className={styles.channelIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel}>EMAIL US</span>
                    <a href="mailto:infocometaiinstitute@gmail.com" className={styles.channelValue}>
                      infocometaiinstitute@gmail.com
                    </a>
                    <span className={styles.channelMeta}>We reply within 24 hrs</span>
                  </div>
                </div>

                {/* Call Support */}
                <div className={`${styles.channelItem} ${styles.channelPhone}`}>
                  <div className={styles.channelIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel}>CALL SUPPORT</span>
                    <div className={styles.channelValuesGroup}>
                      <a href="tel:+918437999664" className={styles.channelValue}>+91 84379 99664</a>
                      <a href="tel:+917355823045" className={styles.channelValue}>+91 73558 23045</a>
                    </div>
                    <span className={styles.channelMeta}>Mon–Sat, 9:00 AM – 6:00 PM</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className={`${styles.channelItem} ${styles.channelWhatsApp}`}>
                  <div className={styles.channelIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                    </svg>
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel}>WHATSAPP NO.</span>
                    <a href="https://wa.me/918437999664" target="_blank" rel="noreferrer" className={styles.channelValue}>
                      +91 84379 99664
                    </a>
                    <span className={styles.channelMeta}>Typically replies in minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Styled Map Card */}
            <div className={styles.mapCard}>
              <div className={styles.mapHeader}>
                <div className={styles.mapHeaderLeft}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Sector 70, Mohali</span>
                </div>
                <span className={styles.mapLogo}>CometAI</span>
              </div>

              <div className={styles.mapGraphic}>
                <div className={styles.mapFallback}>
                  <div className={styles.fallbackPin}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className={styles.fallbackTitle}>Comet AI Institute</div>
                  <div className={styles.fallbackAddr}>D-201, Ivory Towers, Sector 70, Mohali, Punjab – 160071</div>
                  <a href="https://share.google/7n78tfQbRE26CzeYe" target="_blank" rel="noreferrer" className={styles.fallbackBtn}>
                    Open in Google Maps ↗
                  </a>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.8164913263804!2d76.7063517750361!3d30.695438887434946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feeeb511d3f97%3A0xe67e4049ea87f82b!2sIvory%20Towers%2C%20LIG3113%2C%20Sector%2070%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160071!5e0!3m2!1sen!2sin!4v1784710379180!5m2!1sen!2sin"
                  className={styles.mapIframe}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="CometAI location"
                />
              </div>

              <a href="https://share.google/7n78tfQbRE26CzeYe" target="_blank" rel="noreferrer" className={styles.mapFooter}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>D-201, Ivory Towers, Sector 70, Mohali, Punjab – 160071</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

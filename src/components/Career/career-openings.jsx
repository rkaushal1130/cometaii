import { useState, useEffect } from 'react'
import styles from './career-openings.module.css'

export default function CareerOpenings() {
  const [selectedRole, setSelectedRole] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    profileUrl: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const roles = [
    {
      id: 'ai-ml-trainer',
      title: 'AI & Machine Learning Trainers',
      department: 'Tech & Artificial Intelligence',
      type: 'Full-Time / Flexible',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11a2 2 0 0 0 2 2h1a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2V9.5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z" />
          <circle cx="9" cy="6" r="1" fill="currentColor" />
          <circle cx="15" cy="6" r="1" fill="currentColor" />
        </svg>
      ),
      description: 'Lead hands-on training sessions in Machine Learning, Deep Learning, Generative AI models, and real-world AI pipelines.'
    },
    {
      id: 'python-trainer',
      title: 'Python Trainers',
      department: 'Programming & Automation',
      type: 'Full-Time / Flexible',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      description: 'Instruct learners in Python fundamentals, object-oriented design, backend APIs, data structures, and script automation.'
    },
    {
      id: 'data-science-trainer',
      title: 'Data Science & Analytics Trainers',
      department: 'Data & Intelligence',
      type: 'Full-Time / Flexible',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      ),
      description: 'Guide students through Data Analytics, SQL, Power BI, Advanced Excel, statistical modeling, and business dashboards.'
    },
    {
      id: 'digital-marketing-trainer',
      title: 'Digital Marketing Trainers',
      department: 'Growth & Digital Strategy',
      type: 'Full-Time / Flexible',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.2 8.4c.5.38.8.97.8 1.6v4a2 2 0 0 1-.8 1.6l-8 6a2 2 0 0 1-2.4 0l-8-6A2 2 0 0 1 2 14v-4c0-.63.3-1.22.8-1.6l8-6a2 2 0 0 1 2.4 0l8 6z" />
          <path d="m12 16 4-3-4-3-4 3 4 3z" />
        </svg>
      ),
      description: 'Teach performance marketing, SEO, SEM, content strategy, social media campaigns, and AI-driven growth techniques.'
    },
    {
      id: 'business-finance-trainer',
      title: 'Business & Finance Trainers',
      department: 'Business & Corporate Finance',
      type: 'Full-Time / Flexible',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      description: 'Empower learners with financial modelling, business acumen, market analysis, budgeting, and corporate finance frameworks.'
    },
    {
      id: 'soft-skills-trainer',
      title: 'Communication & Soft Skills Trainers',
      department: 'Executive Development',
      type: 'Full-Time / Flexible',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8" />
          <path d="M8 13h6" />
        </svg>
      ),
      description: 'Coach students in public speaking, professional writing, interview readiness, assertive presentation, and leadership communication.'
    },
    {
      id: 'career-mentor',
      title: 'Career Mentors',
      department: 'Mentorship & Placements',
      type: 'Mentorship & Advisory',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
      description: 'Provide personalized 1-on-1 mentorship, resume/portfolio audits, mock interviews, and career roadmap planning.'
    },
    {
      id: 'academic-coordinator',
      title: 'Academic Coordinators',
      department: 'Academic Operations',
      type: 'Full-Time',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      ),
      description: 'Manage cohort schedules, monitor curriculum progression, synchronize trainer operations, and elevate student satisfaction.'
    },
    {
      id: 'bd-marketing',
      title: 'Business Development & Marketing Professionals',
      department: 'Institutional Partnerships',
      type: 'Full-Time',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      description: 'Forge partnerships with universities, corporate enterprises, and student communities to scale COMET AI educational initiatives.'
    },
    {
      id: 'internship-mentor',
      title: 'Internship Mentors',
      department: 'Industry Projects',
      type: 'Mentorship & Project Lead',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      description: 'Supervise real-world capstone assignments, guide student teams through industry sprints, and review technical deliverables.'
    }
  ]

  const benefits = [
    {
      id: 1,
      title: 'Work with Emerging Technologies',
      desc: 'Stay at the frontier of Generative AI, machine learning architectures, automated developer tooling, and modern data platforms.'
    },
    {
      id: 2,
      title: 'Flexible Teaching & Training Opportunities',
      desc: 'Customizable schedules, hybrid teaching environments, masterclasses, and weekend batches designed to accommodate your commitments.'
    },
    {
      id: 3,
      title: 'Industry-Oriented Learning Environment',
      desc: 'Collaborate within an ecosystem deeply connected to actual corporate standards, practical application, and enterprise projects.'
    },
    {
      id: 4,
      title: 'Work with Students, Professionals & Businesses',
      desc: 'Engage with energetic student cohorts, ambitious upskilling graduates, and corporate enterprise teams to broaden your impact.'
    },
    {
      id: 5,
      title: 'Growth and Collaboration Opportunities',
      desc: 'Expand your professional profile, publish educational content, build leadership stature, and collaborate with visionary founders.'
    }
  ]

  const handleOpenModal = (roleTitle = '') => {
    setSelectedRole(roleTitle)
    setFormData(prev => ({ ...prev, role: roleTitle }))
    setIsModalOpen(true)
    setIsSubmitted(false)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Prepare a mailto link with prefilled details
    const subject = encodeURIComponent(`Application for ${formData.role || 'Career Opportunity'} - ${formData.name}`)
    const body = encodeURIComponent(
      `Hello COMET AI Team,\n\nI would like to apply for the position: ${formData.role}\n\n` +
      `Candidate Details:\n` +
      `- Name: ${formData.name}\n` +
      `- Email: ${formData.email}\n` +
      `- Phone: ${formData.phone}\n` +
      `- CV / Portfolio URL: ${formData.profileUrl}\n\n` +
      `Contribution to COMET AI Learning Ecosystem:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    )

    // Open mail client
    window.location.href = `mailto:careers@cometaii.com?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  return (
    <div id="career-openings" className={styles.container}>
      <div className={styles.wrap}>
        {/* Section 1: We're Looking For */}
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>CURRENT OPPORTUNITIES</span>
          <h2 className={styles.mainHeading}>We’re Looking For</h2>
          <p className={styles.subHeading}>
            Explore open roles across technical training, academic coordination, student mentorship, and business development.
          </p>
        </div>

        <div className={styles.rolesGrid}>
          {roles.map((role) => (
            <div key={role.id} className={styles.roleCard}>
              <div className={styles.roleCardTop}>
                <div className={styles.roleIconWrapper}>
                  {role.icon}
                </div>
                <span className={styles.roleTypeTag}>{role.type}</span>
              </div>

              <div className={styles.roleBody}>
                <span className={styles.roleDepartment}>{role.department}</span>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <p className={styles.roleDesc}>{role.description}</p>
              </div>

              <div className={styles.roleFooter}>
                <button
                  type="button"
                  className={styles.applyBtn}
                  onClick={() => handleOpenModal(role.title)}
                >
                  Apply for Role
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Why Join COMET AI? */}
        <div className={styles.whyJoinSection}>
          <div className={styles.whyHeader}>
            <span className={styles.badge}>PERKS &amp; IMPACT</span>
            <h2 className={styles.whyTitle}>Why Join COMET AI?</h2>
            <p className={styles.whySubtitle}>
              Be part of a forward-thinking institution dedicated to democratizing artificial intelligence and career acceleration.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((b, idx) => (
              <div key={b.id} className={styles.benefitCard}>
                <div className={styles.benefitNumber}>0{idx + 1}</div>
                <div className={styles.benefitContent}>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: CTA "Want to Work With Us?" */}
        <div id="work-with-us" className={styles.ctaBox}>
          <div className={styles.ctaGlow}></div>
          <div className={styles.ctaInner}>
            <span className={styles.ctaBadge}>JOIN THE TEAM</span>
            <h2 className={styles.ctaTitle}>Want to Work With Us?</h2>
            <p className={styles.ctaDesc}>
              Send us your CV/profile and tell us how you can contribute to the COMET AI learning ecosystem.
            </p>

            <div className={styles.ctaActions}>
              <button
                type="button"
                className={styles.ctaMainBtn}
                onClick={() => handleOpenModal('General Application')}
              >
                Send CV / Profile
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              <a
                href="mailto:careers@cometaii.com?subject=CV%20Submission%20-%20COMET%20AI"
                className={styles.ctaEmailBtn}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                careers@cometaii.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={handleCloseModal}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalBadge}>CAREER APPLICATION</span>
                <h3 id="modal-title" className={styles.modalTitle}>Apply to COMET AI</h3>
                <p className={styles.modalSub}>
                  {selectedRole ? `Position: ${selectedRole}` : 'Join our educators and mentors'}
                </p>
              </div>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={handleCloseModal}
                aria-label="Close application modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {isSubmitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h4>Application Prepared!</h4>
                <p>
                  Your email client has been opened with your submission details. You can also send your updated CV directly to <strong>careers@cometaii.com</strong>.
                </p>
                <button
                  type="button"
                  className={styles.modalCloseDoneBtn}
                  onClick={handleCloseModal}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.appForm}>
                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="app-name">Full Name *</label>
                    <input
                      id="app-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="app-email">Email Address *</label>
                    <input
                      id="app-email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="app-phone">Phone Number</label>
                    <input
                      id="app-phone"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="app-role">Role Interested In *</label>
                    <select
                      id="app-role"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="">Select a Role</option>
                      {roles.map(r => (
                        <option key={r.id} value={r.title}>{r.title}</option>
                      ))}
                      <option value="Other / General Contributor">Other / General Contributor</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="app-url">LinkedIn Profile or Google Drive CV Link *</label>
                  <input
                    id="app-url"
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/... or drive.google.com/..."
                    value={formData.profileUrl}
                    onChange={(e) => setFormData({ ...formData, profileUrl: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="app-message">How can you contribute to the COMET AI learning ecosystem? *</label>
                  <textarea
                    id="app-message"
                    required
                    rows="3"
                    placeholder="Tell us about your teaching experience, technical expertise, or why you'd like to join..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className={styles.formActions}>
                  <button type="submit" className={styles.submitBtn}>
                    Send Application &amp; CV
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

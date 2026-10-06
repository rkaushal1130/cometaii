import { Link } from 'react-router-dom'
import styles from './article-featured-section.module.css'
import shrutiHeadshot from '../../assets/images/webp/1000064992.webp'
import conclaveImg from '../../assets/images/gallery/young-presenters-conclave.png'

export default function ArticleFeaturedSection() {

  const sevenSkills = [
    {
      num: '01',
      title: 'AI & Digital Literacy',
      desc: 'Professionals do not necessarily need to become AI developers. But understanding AI tools, digital platforms, automation, and responsible technology use can provide a significant advantage.'
    },
    {
      num: '02',
      title: 'Communication Skills',
      desc: 'Technical knowledge has limited impact if you cannot communicate your ideas. Written communication, presentations, professional conversations, and interpersonal skills remain essential across industries.'
    },
    {
      num: '03',
      title: 'Data & Analytical Thinking',
      desc: 'Businesses generate enormous amounts of information. Professionals who can understand data, identify patterns, and make informed decisions can contribute more effectively.'
    },
    {
      num: '04',
      title: 'Problem-Solving',
      desc: 'Employers value people who can identify problems and work towards practical solutions rather than simply wait for instructions.'
    },
    {
      num: '05',
      title: 'Adaptability',
      desc: 'Technology will continue to evolve. A skill that is valuable today may change tomorrow. The ability to learn, adapt, and continuously upgrade your knowledge is therefore becoming an important career advantage.'
    },
    {
      num: '06',
      title: 'Practical Experience',
      desc: 'Knowing a concept is different from being able to apply it. Projects, internships, assignments, case studies, presentations, and practical applications help students transform theoretical knowledge into demonstrable skills.'
    },
    {
      num: '07',
      title: 'Continuous Learning',
      desc: 'Learning should not stop when college ends. Professionals who continuously develop their skills can remain better prepared for changing technologies, roles, and opportunities.'
    }
  ]

  const aiDomains = [
    {
      role: 'Marketing',
      icon: '📈',
      use: 'Use AI for deep audience research, personalized campaigns, and automated content planning.'
    },
    {
      role: 'Finance',
      icon: '📊',
      use: 'Use technology for accelerated financial analytics, risk modeling, and precision reporting.'
    },
    {
      role: 'Business Management',
      icon: '💼',
      use: 'Leverage AI to eliminate repetitive overhead, optimize operations, and improve strategic decision-making.'
    },
    {
      role: 'Students & Learners',
      icon: '🎓',
      use: 'Use AI tools to rapidly research, practice coding, simulate real scenarios, and build demonstrable projects.'
    }
  ]

  const hybridCombos = [
    'Finance + Data Analytics + AI',
    'Marketing + Digital Marketing + AI',
    'Business + Data + Technology',
    'Programming + AI',
    'Communication + Technology'
  ]

  return (
    <div className={styles.articleSectionWrapper}>
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <span className={styles.badge}>FEATURED ARTICLE &amp; PERSPECTIVE</span>
        <h2 className={styles.mainTitle}>The Future of Careers: Why Skills Matter More Than Degrees</h2>
        <p className={styles.mainSubtitle}>
          An authoritative analysis by COMET AI leadership on navigating the rapid evolution of workforce demands, automation, and applied intelligence.
        </p>
      </div>

      {/* Main Article Container */}
      <article className={styles.articleCard}>
        {/* Author Header Bar */}
        <div className={styles.authorBar}>
          <div className={styles.authorProfile}>
            <img
              src={shrutiHeadshot}
              alt="Dr. Shruti Avasthi"
              className={styles.authorHeadshot}
            />
            <div className={styles.authorInfo}>
              <div className={styles.authorNameRow}>
                <h3 className={styles.authorName}>Dr. Shruti Avasthi</h3>
                <span className={styles.verifiedBadge}>Verified Leadership</span>
              </div>
              <p className={styles.authorRole}>Founder &amp; Academic Director, COMET AI • 20+ Years in Education</p>
            </div>
          </div>

          <div className={styles.articleMeta}>
            <span className={styles.metaTag}>Future of Work</span>
            <span className={styles.metaDate}>Oct 6, 2026</span>
            <span className={styles.metaReadTime}>• 6 min read</span>
          </div>
        </div>

        {/* Hero Photo Banner */}
        <div className={styles.heroBannerWrapper}>
          <img
            src={conclaveImg}
            alt="Young Presenters at National Conclave Podium"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroCaption}>
              <span>National Conclave Podium</span> — Empowering young innovators with practical capability over theoretical credentials.
            </div>
          </div>
        </div>

        {/* Lead Introduction */}
        <div className={styles.leadBlock}>
          <p className={styles.leadPara}>
            The world of work is changing faster than ever. Technology, Artificial Intelligence, automation, and digital transformation are changing how businesses operate—and they are also changing what professionals need to succeed.
          </p>
          <p>
            A degree continues to be an important foundation for a career. But in today’s competitive environment, academic qualifications alone may not be enough.
          </p>
          <p>
            <strong>The real advantage comes from combining education with practical skills, adaptability, and the ability to apply knowledge in real-world situations.</strong>
          </p>
        </div>

        {/* Highlight 1: Qualifications to Capabilities */}
        <div className={styles.calloutCard}>
          <div className={styles.calloutIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 14 14" />
            </svg>
          </div>
          <div className={styles.calloutContent}>
            <h4>From Qualifications to Capabilities</h4>
            <div className={styles.pathwayRow}>
              <span className={styles.oldPath}>Complete a degree</span>
              <span className={styles.arrow}>→</span>
              <span className={styles.oldPath}>Find a job</span>
              <span className={styles.arrow}>→</span>
              <span className={styles.oldPath}>Build a career</span>
            </div>
            <p>
              Today, the journey is more dynamic. Employers need professionals who can learn new technologies, solve problems, communicate effectively, analyse information, and adapt to changing business requirements.
            </p>
            <p className={styles.shiftQuestion}>
              This means students should not focus only on what qualification they will earn. They should also ask:
              <br />
              <strong>“What will I be able to do after completing my education?”</strong>
            </p>
            <p className={styles.shiftConclusion}>That shift—from qualifications to capabilities—is becoming increasingly important.</p>
          </div>
        </div>

        {/* Highlight 2: AI Is Changing Every Career */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionHeading}>AI Is Changing Almost Every Career</h3>
          <p>
            Artificial Intelligence is no longer limited to technology companies. AI is becoming relevant to marketing, finance, education, healthcare, management, customer service, entrepreneurship, and many other areas.
          </p>

          <div className={styles.domainGrid}>
            {aiDomains.map((dom) => (
              <div key={dom.role} className={styles.domainCard}>
                <div className={styles.domainTop}>
                  <span className={styles.domainIcon}>{dom.icon}</span>
                  <strong className={styles.domainRole}>{dom.role}</strong>
                </div>
                <p className={styles.domainUse}>{dom.use}</p>
              </div>
            ))}
          </div>

          <div className={styles.insightBox}>
            <p>
              The future is not simply about replacing people with AI. 
              <br />
              <strong>It is increasingly about people who know how to work effectively with technology.</strong>
            </p>
          </div>
        </div>

        {/* Highlight 3: The 7 Skills Future Professionals Need */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionHeading}>The Skills Future Professionals Need</h3>
          <p className={styles.sectionSub}>
            Mastering these core competencies provides the ultimate competitive moat in any industry:
          </p>

          <div className={styles.skillsList}>
            {sevenSkills.map((sk) => (
              <div key={sk.num} className={styles.skillRow}>
                <div className={styles.skillNum}>{sk.num}</div>
                <div className={styles.skillDetails}>
                  <h4 className={styles.skillTitle}>{sk.title}</h4>
                  <p className={styles.skillDesc}>{sk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight 4: How Students Can Become Future-Ready */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionHeading}>How Students Can Become Future-Ready</h3>
          <p>
            Students don’t need to learn everything at once. A better approach is to build skills progressively:
          </p>

          <div className={styles.stepperContainer}>
            <div className={styles.stepBubble}><span className={styles.stepDot}>1</span> Learn</div>
            <span className={styles.stepSeparator}>→</span>
            <div className={styles.stepBubble}><span className={styles.stepDot}>2</span> Practise</div>
            <span className={styles.stepSeparator}>→</span>
            <div className={styles.stepBubble}><span className={styles.stepDot}>3</span> Build</div>
            <span className={styles.stepSeparator}>→</span>
            <div className={styles.stepBubble}><span className={styles.stepDot}>4</span> Showcase</div>
            <span className={styles.stepSeparator}>→</span>
            <div className={styles.stepBubble}><span className={styles.stepDot}>5</span> Improve</div>
          </div>

          <ul className={styles.bulletList}>
            <li><strong>Start with one relevant skill.</strong> Focus deeply on mastering its fundamental mechanics.</li>
            <li><strong>Practise it through assignments or projects.</strong> Practical repetition solidifies muscle memory.</li>
            <li><strong>Build something that demonstrates what you have learned.</strong> Concrete projects are proof of competency.</li>
            <li><strong>Create a portfolio or professional profile.</strong> Showcase your work to recruiters, mentors, and peers.</li>
            <li><strong>Then continue improving.</strong> Iterate and refine through feedback.</li>
          </ul>

          <p className={styles.capabilityNote}>
            This approach helps students move from simply having knowledge to <strong>demonstrating capability</strong>.
          </p>
        </div>

        {/* Highlight 5: The Rise of Hybrid Professionals */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionHeading}>The Rise of Hybrid Professionals</h3>
          <p>
            The professionals of the future may increasingly combine multiple skill sets. For example:
          </p>

          <div className={styles.combosWrapper}>
            {hybridCombos.map((combo) => (
              <div key={combo} className={styles.comboPill}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>{combo}</span>
              </div>
            ))}
          </div>

          <p className={styles.hybridExplanation}>
            These combinations help professionals understand both their domain and the technology transforming it. The goal is not to become an expert in everything. <strong>The goal is to develop a strong core skill set and complement it with relevant future-ready capabilities.</strong>
          </p>
        </div>

        {/* Highlight 6: What Parents & Students Should Think About */}
        <div className={styles.contrastCard}>
          <div className={styles.contrastColumn}>
            <span className={styles.contrastLabelOld}>THE TRADITIONAL QUESTION</span>
            <h4 className={styles.contrastTitle}>“What certificate will I receive?”</h4>
            <p>Certificates can document attendance and completed hours, but they cannot prove execution.</p>
          </div>

          <div className={styles.contrastDivider}>VS</div>

          <div className={styles.contrastColumnHighlight}>
            <span className={styles.contrastLabelNew}>THE FUTURE-READY QUESTION</span>
            <h4 className={styles.contrastTitleHighlight}>“What skills will I actually develop?”</h4>
            <p>Look for learning experiences that provide opportunities to practise, create, communicate, solve problems, and apply knowledge.</p>
            <strong className={styles.punchline}>Certificates document learning. Skills demonstrate capability.</strong>
          </div>
        </div>

        {/* The COMET AI Approach */}
        <div className={styles.approachBlock}>
          <h3 className={styles.approachHeading}>The COMET AI Approach</h3>
          <p>
            At COMET AI, we believe that education should prepare learners not only for examinations, but also for a rapidly evolving professional world.
          </p>
          <p>
            Our focus is on combining technology, practical skills, AI awareness, communication, and career development to help learners become more confident and future-ready.
          </p>
          <p>
            Whether you are a student beginning your career, a graduate preparing for employment, a professional looking to upskill, or an entrepreneur exploring new technologies, continuous learning can help you stay prepared for what comes next.
          </p>
        </div>

        {/* Final CTA Banner */}
        <div className={styles.articleCta}>
          <div className={styles.ctaGlow}></div>
          <div className={styles.ctaContent}>
            <span className={styles.ctaBadge}>TAKE THE NEXT STEP</span>
            <h3 className={styles.ctaTitle}>Ready to Build Skills for the Future?</h3>
            <p className={styles.ctaDesc}>
              The future belongs to professionals who are prepared to learn, adapt, and apply their knowledge.
            </p>
            <p className={styles.ctaHighlight}>
              At COMET AI, we help students, graduates, professionals, and aspiring entrepreneurs build practical, future-ready skills across Artificial Intelligence, Python, Data Science, Data Analytics, Digital Marketing, Business, Finance, and professional development.
            </p>
            <div className={styles.motto}>
              <span>Learn.</span> <span>Build.</span> <span>Grow.</span> <span>Lead.</span>
            </div>
            <p className={styles.ctaSub}>
              Don’t wait for the future to decide whether you’re ready for it. Start building the skills your future demands today.
            </p>
            <div className={styles.ctaButtonRow}>
              <Link to="/courses" className={styles.ctaPrimaryBtn}>
                Explore COMET AI Programs
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/contact" className={styles.ctaSecondaryBtn}>
                Talk to a Career Advisor
              </Link>
            </div>
            <div className={styles.brandSignature}>
              COMET AI — Igniting Minds, Shaping Intelligence.
            </div>
          </div>
        </div>

        {/* Author Bio Box */}
        <div className={styles.authorBioFooter}>
          <img
            src={shrutiHeadshot}
            alt="Dr. Shruti Avasthi"
            className={styles.bioFooterAvatar}
          />
          <div className={styles.bioFooterText}>
            <span className={styles.bioFooterLabel}>ABOUT THE AUTHOR</span>
            <h4 className={styles.bioFooterName}>Dr. Shruti Avasthi</h4>
            <p className={styles.bioFooterRole}>Founder &amp; Academic Director, COMET AI Institute</p>
            <p className={styles.bioFooterDesc}>
              Dr. Shruti Avasthi brings over two decades of academic leadership, curriculum design, and educational innovation. Her passion for shaping young minds drives COMET AI’s commitment to bridge academia with modern industry requirements and applied artificial intelligence.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

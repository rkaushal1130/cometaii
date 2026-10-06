import { Link } from 'react-router-dom'
import styles from './article-featured-section.module.css'
import shivaniHeadshot from '../../assets/images/webp/Shivani mam.webp'
import cgcImg from '../../assets/images/gallery/cgc-landran-auditorium.png'

export default function BlogFeaturedSection() {
  const fiveSkills = [
    {
      num: '01',
      title: 'Artificial Intelligence Skills',
      desc: 'Artificial Intelligence is becoming part of almost every industry. Students don’t necessarily need to become AI specialists, but understanding AI tools and their practical applications can give them a significant advantage across research, productivity, and marketing.'
    },
    {
      num: '02',
      title: 'Data Analytics',
      desc: 'Businesses rely heavily on data to make decisions. Students who understand Data Analytics, Advanced Excel, Power BI and Business Analytics can apply these skills across multiple career areas including finance, marketing, and operations.'
    },
    {
      num: '03',
      title: 'Communication & Professional Skills',
      desc: 'Strong communication remains one of the most valuable career skills. Students should build confidence in professional communication, public speaking, presentations, interviews, business writing, and team collaboration.'
    },
    {
      num: '04',
      title: 'Practical & Industry-Oriented Learning',
      desc: 'One of the biggest gaps between education and employment is the ability to apply knowledge. Students should look beyond textbooks and focus on practical exercises, internships, case studies, and live projects.'
    },
    {
      num: '05',
      title: 'Continuous Learning',
      desc: 'The skills required today may not be the same skills required five years from now. Future-ready professionals need a learning mindset. Instead of simply collecting certificates, develop skills you can actually demonstrate.'
    }
  ]

  const combinations = [
    'B.Com + Advanced Excel + Financial Modelling + AI Tools',
    'BCA + Python + AI + Data Analytics',
    'BBA + Digital Marketing + AI + Business Analytics',
    'MBA + Data Analytics + AI + Communication Skills'
  ]

  return (
    <div className={styles.articleSectionWrapper}>
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <span className={styles.badge}>FEATURED BLOG &amp; CAREER GUIDE</span>
        <h2 className={styles.mainTitle}>From Degree to Career: How Students Can Become Job-Ready in 2026</h2>
        <p className={styles.mainSubtitle}>
          Strategic roadmap by COMET AI technical leadership on transforming academic qualifications into high-impact corporate employability.
        </p>
      </div>

      <article className={styles.articleCard}>
        {/* Author Header Bar */}
        <div className={styles.authorBar}>
          <div className={styles.authorProfile}>
            <img
              src={shivaniHeadshot}
              alt="Ms. Shivani Tayal"
              className={styles.authorHeadshot}
            />
            <div className={styles.authorInfo}>
              <div className={styles.authorNameRow}>
                <h3 className={styles.authorName}>Ms. Shivani Tayal</h3>
                <span className={styles.verifiedBadge}>Verified Leadership</span>
              </div>
              <p className={styles.authorRole}>Founder &amp; Technical Director, COMET AI Institute</p>
            </div>
          </div>

          <div className={styles.articleMeta}>
            <span className={styles.metaTag}>Career Preparation</span>
            <span className={styles.metaDate}>Oct 6, 2026</span>
            <span className={styles.metaReadTime}>• 5 min read</span>
          </div>
        </div>

        {/* Hero Photo Banner */}
        <div className={styles.heroBannerWrapper}>
          <img
            src={cgcImg}
            alt="CGC Landran Auditorium Group Photo"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroCaption}>
              <span>CGC Landran Auditorium Conclave</span> — Preparing student delegations for real-world employment and high-growth tech careers.
            </div>
          </div>
        </div>

        {/* Lead Introduction */}
        <div className={styles.leadBlock}>
          <p className={styles.leadPara}>
            The world of work is changing faster than ever. Technology, artificial intelligence and digital transformation are reshaping industries and creating new expectations from employers.
          </p>
          <p>
            For students and young professionals, earning a degree is still important—but a degree alone may not be enough to stand out in today’s competitive job market.
          </p>
          <p>
            <strong>The real advantage comes from combining academic knowledge with practical, industry-relevant skills.</strong>
          </p>
        </div>

        {/* Highlight 1: What Does It Mean to Be Job-Ready? */}
        <div className={styles.calloutCard}>
          <div className={styles.calloutIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className={styles.calloutContent}>
            <h4>What Does It Mean to Be Job-Ready?</h4>
            <p>
              Being job-ready means having the knowledge, skills and confidence to apply what you have learned in a real workplace. A job-ready candidate can:
            </p>
            <ul className={styles.bulletList} style={{ marginTop: '10px', marginBottom: '12px' }}>
              <li>Use relevant digital and technology tools</li>
              <li>Communicate ideas effectively</li>
              <li>Analyse information and solve problems</li>
              <li>Adapt to new technologies</li>
              <li>Work independently and collaboratively</li>
              <li>Apply theoretical knowledge to practical situations</li>
            </ul>
            <p className={styles.shiftConclusion}>
              This is why students should start building employability skills well before graduation.
            </p>
          </div>
        </div>

        {/* Highlight 2: 5 Skills Students Should Develop */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionHeading}>5 Skills Students Should Develop for a Future-Ready Career</h3>
          <p className={styles.sectionSub}>
            Five core disciplines that transform candidate profiles into top-tier recruitment prospects:
          </p>

          <div className={styles.skillsList}>
            {fiveSkills.map((sk) => (
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

        {/* Highlight 3: Progressive Learning Cycle */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionHeading}>Practical &amp; Industry-Oriented Learning</h3>
          <p>
            One of the biggest gaps between education and employment is the ability to apply knowledge. Students should look beyond textbooks and focus on:
          </p>

          <div className={styles.stepperContainer}>
            <div className={styles.stepBubble}><span className={styles.stepDot}>1</span> Learn</div>
            <span className={styles.stepSeparator}>→</span>
            <div className={styles.stepBubble}><span className={styles.stepDot}>2</span> Practise</div>
            <span className={styles.stepSeparator}>→</span>
            <div className={styles.stepBubble}><span className={styles.stepDot}>3</span> Apply</div>
            <span className={styles.stepSeparator}>→</span>
            <div className={styles.stepBubble}><span className={styles.stepDot}>4</span> Build</div>
          </div>

          <p>
            Projects, assignments, internships, case studies and practical exercises help learners understand how their skills work in real-world workplace scenarios.
          </p>
        </div>

        {/* Highlight 4: Build a Skill Combination, Not Just a Qualification */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionHeading}>Build a Skill Combination, Not Just a Qualification</h3>
          <p>
            One powerful way to improve your career profile is to build complementary skills around your academic qualification. For example:
          </p>

          <div className={styles.combosWrapper}>
            {combinations.map((comb) => (
              <div key={comb} className={styles.comboPill}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span>{comb}</span>
              </div>
            ))}
          </div>

          <p className={styles.hybridExplanation}>
            This approach creates a stronger professional profile by connecting foundational degree education with high-demand practical capabilities.
          </p>
        </div>

        {/* Highlight 5: Start Before You Graduate */}
        <div className={styles.calloutCard} style={{ background: '#f8fafc', borderLeftColor: '#38bdf8' }}>
          <div className={styles.calloutContent}>
            <h4>Start Before You Graduate</h4>
            <p>
              Career preparation should not begin after graduation. The earlier students start developing practical skills, the more time they have to practise, build projects and gain confidence.
            </p>
            <p className={styles.shiftQuestion}>
              A strong career journey can begin with one simple question:
              <br />
              <strong>“What skills will make me more valuable in the career I want?”</strong>
            </p>
            <p className={styles.shiftConclusion}>From there, identify the right skills, learn them systematically and keep applying them.</p>
          </div>
        </div>

        {/* How COMET AI Helps Learners Prepare */}
        <div className={styles.approachBlock}>
          <h3 className={styles.approachHeading}>How COMET AI Helps Learners Prepare for the Future</h3>
          <p>
            At COMET AI, our focus is on helping learners develop practical, future-focused skills for an evolving world.
          </p>
          <p>
            Our learning ecosystem covers areas such as Artificial Intelligence, Python, Data Analytics, Power BI, Advanced Excel, Digital Marketing, Business Analytics, Financial Modelling, Communication Skills and professional development.
          </p>
          <p>
            The objective is not simply to complete another course. <strong>It is to help learners understand, practise and apply skills that matter.</strong>
          </p>
        </div>

        {/* Your Career Is Built One Skill at a Time */}
        <div className={styles.contentSection}>
          <h3 className={styles.sectionHeading}>Your Career Is Built One Skill at a Time</h3>
          <div className={styles.stepperContainer} style={{ background: '#0a1b44' }}>
            <div className={styles.stepBubble} style={{ color: '#ffffff' }}>Your degree gives you a foundation</div>
            <span className={styles.stepSeparator}>•</span>
            <div className={styles.stepBubble} style={{ color: '#ffffff' }}>Your skills build capabilities</div>
            <span className={styles.stepSeparator}>•</span>
            <div className={styles.stepBubble} style={{ color: '#ffffff' }}>Experience builds confidence</div>
          </div>
          <p>
            And your willingness to keep learning can shape your long-term career. Don’t wait for the job market to tell you what skills you need. Start preparing today.
          </p>
        </div>

        {/* Final CTA Banner */}
        <div className={styles.articleCta}>
          <div className={styles.ctaGlow}></div>
          <div className={styles.ctaContent}>
            <span className={styles.ctaBadge}>START YOUR JOURNEY</span>
            <h3 className={styles.ctaTitle}>Ready to Build Your Future Skills?</h3>
            <p className={styles.ctaDesc}>
              Explore skill-based and industry-oriented learning opportunities with COMET AI.
            </p>
            <div className={styles.motto}>
              <span>Learn.</span> <span>Apply.</span> <span>Grow.</span>
            </div>
            <div className={styles.ctaButtonRow}>
              <a href="https://www.cometaii.com" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimaryBtn}>
                Visit www.cometaii.com
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <Link to="/courses" className={styles.ctaSecondaryBtn}>
                Explore Programs
              </Link>
            </div>
            <div className={styles.brandSignature}>
              COMET AI – Igniting Minds, Shaping Intelligence.
            </div>
          </div>
        </div>

        {/* Author Bio Box */}
        <div className={styles.authorBioFooter}>
          <img
            src={shivaniHeadshot}
            alt="Ms. Shivani Tayal"
            className={styles.bioFooterAvatar}
          />
          <div className={styles.bioFooterText}>
            <span className={styles.bioFooterLabel}>ABOUT THE AUTHOR</span>
            <h4 className={styles.bioFooterName}>Ms. Shivani Tayal</h4>
            <p className={styles.bioFooterRole}>Founder &amp; Technical Director, COMET AI Institute</p>
            <p className={styles.bioFooterDesc}>
              Ms. Shivani Tayal is an experienced technologist, developer mentor, and academic leader. She directs curriculum architectures across Artificial Intelligence, Python, Data Analytics, and practical technical execution.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

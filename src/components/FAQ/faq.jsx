import { useState, useRef } from 'react'
import styles from './faq.module.css'

export default function FAQ({ faqs, title = 'Frequently Asked Questions', subtitle = 'Get Your Answers Here' }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={styles.faq}>
      <div className={styles.bgGlow} />
      <div className={styles.wrap}>
        <div className={styles.h}>
          <span className={styles.badge}>{subtitle}</span>
          <h2>{title}</h2>
        </div>
        <div className={styles.qa}>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={i === openIndex}
              onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null)

  return (
    <div
      className={`${styles.item} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      <div className={styles.q}>
        <span>{faq.question}</span>
        <svg
          className={styles.chevron}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
      <div
        className={styles.a}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0' }}
      >
        <div ref={contentRef} className={styles.ansInner}>
          {faq.answer}
        </div>
      </div>
    </div>
  )
}

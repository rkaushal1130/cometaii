import FAQ from '../FAQ/faq'

const faqs = [
  {
    question: 'Q1. How can I contact CometAi?',
    answer: 'You can reach us via email at infocometaiinstitute@gmail.com, call us at +91 84379 99664 or +91 73558 23045, or connect on WhatsApp at +91 84379 99664. Our team is available Monday to Saturday, 9:00 AM to 6:00 PM.'
  },
  {
    question: 'Q2. What is the admission process?',
    answer: 'Our admission process is simple — fill out the inquiry form on this page or contact us directly. Our team will guide you through the course selection, enrollment, and payment steps.'
  },
  {
    question: 'Q3. Do you offer corporate training programs?',
    answer: 'Yes, we offer corporate training programs tailored to organizational needs. Select "Corporate Training" in the subject dropdown or reach out to us directly for a custom training plan.'
  },
  {
    question: 'Q4. Can I visit the institute campus?',
    answer: 'Yes, you can schedule a campus visit by contacting our support team. We\'d be happy to give you a tour and introduce you to our programs.'
  }
]

export default function HomeFAQ() {
  return <FAQ faqs={faqs} title="Frequently Asked Questions" subtitle="Get Your Answers Here" />
}

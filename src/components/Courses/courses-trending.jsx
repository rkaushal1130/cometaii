import { useState, useMemo } from 'react'
import CoursesSidebar from './courses-sidebar'
import styles from './courses-trending.module.css'

const ALL_COURSES = [
  {
    id: 'python-ai',
    title: 'Python With AI',
    desc: 'Master Python programming with AI-powered tools for automation, analytics, and intelligent application development.',
    level: 'Advanced',
    duration: '12 Weeks',
    rating: '4.8',
    reviews: '1.2K',
    price: '$899',
    originalPrice: '$1,299',
    discount: '31% OFF',
    keywords: ['python', 'ai', 'data science', 'machine learning', 'automation', 'programming'],
    gradientBg: 'linear-gradient(135deg, #051937, #004d7a, #008793, #00bf72)',
    syllabus: [
      { title: '1. PYTHON FUNDAMENTALS', details: 'Variables • Data Types • Operators • Conditions • Loops • Functions' },
      { title: '2. DATA STRUCTURES', details: 'List • Tuple • Set • Dictionary • Strings' },
      { title: '3. PYTHON LIBRARIES', details: 'NumPy • Pandas • Matplotlib • Seaborn' },
      { title: '4. DATA ANALYSIS', details: 'Data Cleaning • Data Visualization • CSV / Excel Data' },
      { title: '5. MACHINE LEARNING', details: 'Scikit-learn • Regression • Classification • Clustering' },
      { title: '6. AI WITH PYTHON', details: 'AI Concepts • Generative AI • Prompt Engineering • LLMs' },
      { title: '7. AI LIBRARIES & APIs', details: 'OpenAI API • Hugging Face • TensorFlow / Keras • LangChain' },
      { title: '🚀 8. REAL-WORLD AI PROJECTS', details: 'AI Chatbot • Voice Assistant • Sentiment Analyzer • Image Classifier • AI Content Generator' }
    ]
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    desc: 'Create intelligent AI solutions using modern generative models for text, images, code, and business applications.',
    level: 'Advanced',
    duration: 'Cohort Based',
    rating: '4.7',
    reviews: '874',
    price: '$849',
    originalPrice: '$1,199',
    discount: '29% OFF',
    keywords: ['generative ai', 'ai', 'copilot', 'llm', 'full stack', 'cloud'],
    gradientBg: 'linear-gradient(135deg, #0a192f, #112240, #233554)',
    syllabus: [
      { title: '1. AI FUNDAMENTALS', details: 'AI & ML Basics • Deep Learning • Neural Networks' },
      { title: '2. GENERATIVE AI BASICS', details: 'What is GenAI? • LLMs • Transformers • Tokens & Embeddings' },
      { title: '3. PROMPT ENGINEERING', details: 'Basic Prompts • Role & Context • Few-shot Prompting • Chain-of-Thought • Prompt Optimization' },
      { title: '4. GENAI TOOLS', details: 'ChatGPT • Gemini • Claude • Microsoft Copilot' },
      { title: '5. AI CONTENT CREATION', details: 'Text & Blogs • Images • Videos • Presentations • Voice & Music' },
      { title: '6. AI DEVELOPMENT', details: 'APIs • Python + AI • OpenAI API • Hugging Face • LangChain' },
      { title: '7. ADVANCED GENAI', details: 'RAG • Vector Databases • Fine-tuning • AI Agents • Multimodal AI' },
      { title: '🚀 8. REAL-WORLD PROJECTS', details: 'AI Chatbot • AI Assistant • RAG Document Bot • AI Content Generator • AI Agent' }
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    desc: 'Design and build autonomous, goal-driven multi-agent systems that utilize advanced planning, tools, and memory frameworks.',
    level: 'Advanced',
    duration: '10 Weeks',
    rating: '4.9',
    reviews: '412',
    price: '$899',
    originalPrice: '$1,299',
    discount: '31% OFF',
    keywords: ['agentic ai', 'agents', 'ai', 'crewai', 'langchain', 'langgraph'],
    gradientBg: 'linear-gradient(135deg, #311b92, #4527a0, #7b1fa2)',
    syllabus: [
      { title: '1. AI FUNDAMENTALS', details: 'AI & ML Basics • LLMs • Transformers' },
      { title: '2. GENERATIVE AI', details: 'Prompt Engineering • Embeddings • Context Windows • LLM APIs' },
      { title: '3. AI AGENTS', details: 'What is an Agent? • Goals & Planning • Memory • Reasoning • Decision Making' },
      { title: '4. TOOLS & ACTIONS', details: 'APIs • Web Search • Python Tools • Databases • Function Calling' },
      { title: '5. RAG & MEMORY', details: 'RAG • Vector Databases • Long-term Memory • Knowledge Bases' },
      { title: '6. AGENT FRAMEWORKS', details: 'LangChain • LangGraph • CrewAI • AutoGen' },
      { title: '7. MULTI-AGENT AI', details: 'Agent Teams • Collaboration • Task Delegation • Workflow Design' },
      { title: '8. DEPLOYMENT', details: 'APIs & Backend • Cloud Deployment • Monitoring • Security & Guardrails' },
      { title: '🚀 9. AI AGENT PROJECTS', details: 'Research Agent • Customer Support • Coding Agent • Data Analyst • Personal Assistant' }
    ]
  },
  {
    id: 'cpp-programming',
    title: 'C++ Programming',
    desc: 'Master object-oriented programming, template library (STL), advanced memory management, and pointers in C++.',
    level: 'Beginner',
    duration: '8 Weeks',
    rating: '4.8',
    reviews: '620',
    price: '$599',
    originalPrice: '$899',
    discount: '33% OFF',
    keywords: ['c++', 'cpp', 'programming', 'oop', 'stl', 'data structures'],
    gradientBg: 'linear-gradient(135deg, #0d47a1, #1565c0, #1976d2)',
    syllabus: [
      { title: '1. C++ FUNDAMENTALS', details: 'Syntax & Structure • Variables & Data • Input / Output • Operators' },
      { title: '2. CONTROL FLOW', details: 'if / else • switch • for / while loops • break / continue' },
      { title: '3. FUNCTIONS & ARRAYS', details: 'Functions • Parameters • Recursion • Arrays & Strings' },
      { title: '4. OOP CONCEPTS', details: 'Classes & Objects • Constructors • Encapsulation • Inheritance • Polymorphism' },
      { title: '5. POINTERS & MEMORY', details: 'Pointers • References • Dynamic Memory • new / delete' },
      { title: '6. STL', details: 'vector • stack & queue • map & set • Iterators • Algorithms' },
      { title: '7. ADVANCED C++', details: 'Templates • Exception Handling • File Handling • Lambda Functions • Smart Pointers' },
      { title: '🚀 8. PROJECTS', details: 'Calculator • Student Management • Banking System • Library Management • Mini Games' }
    ]
  },
  {
    id: 'c-programming',
    title: 'C Programming',
    desc: 'Build rock-solid computer science fundamentals, learning low-level memory allocation, pointers, structs, and file handling.',
    level: 'Beginner',
    duration: '8 Weeks',
    rating: '4.7',
    reviews: '530',
    price: '$499',
    originalPrice: '$799',
    discount: '37% OFF',
    keywords: ['c', 'programming', 'pointers', 'memory', 'data structures'],
    gradientBg: 'linear-gradient(135deg, #0f172a, #1e293b, #3b82f6)',
    syllabus: [
      { title: '1. C FUNDAMENTALS', details: 'Introduction to C • Structure of C • Variables & Data Types • Input / Output' },
      { title: '2. OPERATORS & CONTROL FLOW', details: 'Operators • if / else • switch • for / while / do-while' },
      { title: '3. FUNCTIONS', details: 'Functions • Parameters • Return Values • Recursion' },
      { title: '4. ARRAYS & STRINGS', details: '1D & 2D Arrays • Strings • String Functions' },
      { title: '5. POINTERS', details: 'Pointer Basics • Pointer Arithmetic • Pointers & Arrays • Pointers & Functions' },
      { title: '6. STRUCTURES', details: 'struct • union • enum • typedef' },
      { title: '7. FILE HANDLING', details: 'File I/O • Read / Write Files • Command Line Args' },
      { title: '8. DYNAMIC MEMORY', details: 'malloc() • calloc() • realloc() • free()' },
      { title: '🚀 9. PROJECTS', details: 'Calculator • Student Management • Quiz Application • Banking System • Library Management' }
    ]
  },
  {
    id: 'java-programming',
    title: 'Java Programming',
    desc: 'Learn standard enterprise-grade programming using Java, collections, OOP, exception handling, multithreading, and databases.',
    level: 'Beginner',
    duration: '10 Weeks',
    rating: '4.8',
    reviews: '810',
    price: '$699',
    originalPrice: '$999',
    discount: '30% OFF',
    keywords: ['java', 'programming', 'oop', 'collections', 'multithreading'],
    gradientBg: 'linear-gradient(135deg, #bf360c, #d84315, #e64a19)',
    syllabus: [
      { title: '1. JAVA FUNDAMENTALS', details: 'Java Basics • Variables & Data • Data Types • Input / Output • Operators' },
      { title: '2. CONTROL FLOW', details: 'if / else • switch • for / while loops • break / continue' },
      { title: '3. ARRAYS & STRINGS', details: 'Arrays • 2D Arrays • String & StringBuilder • Common Methods' },
      { title: '4. OOP CONCEPTS', details: 'Classes & Objects • Constructors • Encapsulation • Inheritance • Polymorphism • Abstraction' },
      { title: '5. EXCEPTION & FILES', details: 'Exception Handling • try / catch / finally • File Handling • Packages' },
      { title: '6. COLLECTIONS', details: 'ArrayList • LinkedList • HashSet • HashMap • Iterators' },
      { title: '7. ADVANCED JAVA', details: 'Generics • Lambda Expressions • Streams • Multithreading • JDBC & Databases' },
      { title: '🚀 8. PROJECTS', details: 'Calculator • Student Management • Banking System • Library Management • Quiz Application' }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing With AI',
    desc: 'Learn AI-driven digital marketing strategies to optimize campaigns, content, SEO, and customer engagement.',
    level: 'Advanced',
    duration: 'Cohort Based',
    rating: '4.9',
    reviews: '932',
    price: '$999',
    originalPrice: '$1,499',
    discount: '33% OFF',
    keywords: ['digital marketing', 'meta ads', 'seo', 'ai', 'marketing', 'social'],
    gradientBg: 'linear-gradient(135deg, #0f172a, #1e293b, #334155)'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    desc: 'Build predictive models and intelligent systems using industry-standard machine learning algorithms and techniques.',
    level: 'Advanced',
    duration: '12 Weeks',
    rating: '4.8',
    reviews: '645',
    price: '$799',
    originalPrice: '$1,099',
    discount: '27% OFF',
    keywords: ['machine learning', 'data science', 'ai', 'python', 'analytics'],
    gradientBg: 'linear-gradient(135deg, #0284c7, #0369a1, #075985)'
  },
  {
    id: 'cacs-coaching',
    title: 'CA/CS coaching',
    desc: 'Comprehensive coaching for CA & CS aspirants with expert guidance, conceptual learning, and exam-focused preparation.',
    level: 'Intermediate',
    duration: '8 Weeks',
    rating: '4.7',
    reviews: '512',
    price: '$699',
    originalPrice: '$999',
    discount: '30% OFF',
    keywords: ['ca', 'cs', 'finance', 'business analytics', 'coaching'],
    gradientBg: 'linear-gradient(135deg, #1e1b4b, #312e81, #4338ca)'
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud & Cybersecurity',
    desc: 'Master cloud architecture, security compliance, network defense, and infrastructure scaling on Amazon Web Services.',
    level: 'Intermediate',
    duration: '10 Weeks',
    rating: '4.9',
    reviews: '1.4K',
    price: '$899',
    originalPrice: '$1,299',
    discount: '31% OFF',
    keywords: ['aws', 'cybersecurity', 'cloud', 'security', 'full stack'],
    gradientBg: 'linear-gradient(135deg, #0f172a, #1d4ed8, #00d2ff)'
  },
  {
    id: 'fullstack-web',
    title: 'Full Stack Web Technologies with AI',
    desc: 'Build scalable modern web applications using React, Node.js, databases, and AI integration for high-paying dev roles.',
    level: 'Beginner',
    duration: '16 Weeks',
    rating: '4.8',
    reviews: '2.1K',
    price: '$949',
    originalPrice: '$1,399',
    discount: '32% OFF',
    keywords: ['full stack', 'web technologies', 'react', 'python', 'computer programming'],
    gradientBg: 'linear-gradient(135deg, #1e293b, #0f766e, #0d9488)'
  }
]

export default function CoursesTrending({ searchQuery = '', setSearchQuery, onSelectCourse }) {
  const [activeLevel, setActiveLevel] = useState(null)
  const [activeMode, setActiveMode] = useState(null)

  const filteredCourses = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return ALL_COURSES.filter((course) => {
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.desc.toLowerCase().includes(q) ||
        course.level.toLowerCase().includes(q) ||
        course.keywords.some((k) => k.toLowerCase().includes(q))

      const matchesLevel =
        !activeLevel ||
        activeLevel === 'all-levels' ||
        course.level.toLowerCase() === activeLevel.toLowerCase()

      return matchesSearch && matchesLevel
    })
  }, [searchQuery, activeLevel])

  const clearAllFilters = () => {
    if (setSearchQuery) setSearchQuery('')
    setActiveLevel(null)
    setActiveMode(null)
  }

  const handleCardClick = (course) => {
    if (onSelectCourse) {
      onSelectCourse(course)
    }
  }

  return (
    <section id="trending-courses" className={styles.trendingSection}>
      <div className={styles.wrap}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.titleGroup}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.fireEmoji}>🔥</span>{' '}
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Trending Courses'}
            </h2>
            {searchQuery && (
              <span className={styles.resultsBadge}>
                {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
              </span>
            )}
          </div>

          {searchQuery && (
            <button type="button" className={styles.clearSearchBtn} onClick={clearAllFilters}>
              Clear Search & Filter ✕
            </button>
          )}
        </div>

        {/* Main Content Layout (Grid + Sidebar) */}
        <div className={styles.contentLayout}>
          {/* Cards Carousel/Grid */}
          <div className={styles.mainGridWrapper}>
            {filteredCourses.length > 0 ? (
              <div className={styles.coursesGrid}>
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className={styles.card}
                    onClick={() => handleCardClick(course)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleCardClick(course)}
                  >
                    {/* Thumbnail Header */}
                    <div className={styles.cardThumb} style={{ background: course.gradientBg }}>
                      <div className={styles.thumbGlow}></div>
                      <div className={styles.thumbGraphic}>
                        <svg viewBox="0 0 100 100" className={styles.thumbSvg}>
                          <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(0, 210, 255, 0.6)" strokeWidth="3" />
                          <circle cx="50" cy="50" r="20" fill="none" stroke="#00d2ff" strokeWidth="2" strokeDasharray="4 4" />
                          <circle cx="50" cy="50" r="8" fill="#ffffff" />
                        </svg>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className={styles.cardBody}>
                      <h3 className={styles.courseTitle}>{course.title}</h3>
                      <p className={styles.courseDesc}>{course.desc}</p>

                      {/* Badges */}
                      <div className={styles.badgeRow}>
                        <span className={styles.tagBadge}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                          {course.level}
                        </span>
                        <span className={styles.tagBadge}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                          {course.duration}
                        </span>
                      </div>

                      {/* Rating & Price Footer */}
                      <div className={styles.cardFooter}>
                        <div className={styles.ratingBox}>
                          <span className={styles.starIcon}>★</span>
                          <span className={styles.ratingVal}>{course.rating}</span>
                          <span className={styles.reviewsCnt}>({course.reviews})</span>
                        </div>

                        <div className={styles.priceContainer}>
                          <div className={styles.priceRow}>
                            <span className={styles.mainPrice}>{course.price}</span>
                            <span className={styles.origPrice}>{course.originalPrice}</span>
                          </div>
                          <span className={styles.discountPill}>{course.discount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🔍</div>
                <h3>No courses found matching "{searchQuery}"</h3>
                <p>Try searching for topics like "Python", "Machine Learning", "AWS", "Data Science", or "Full Stack".</p>
                <button type="button" className={styles.resetBtn} onClick={clearAllFilters}>
                  Show All Courses
                </button>
              </div>
            )}
          </div>

          {/* Right Sidebar Filter */}
          <CoursesSidebar
            activeLevel={activeLevel}
            setActiveLevel={setActiveLevel}
            activeMode={activeMode}
            setActiveMode={setActiveMode}
          />
        </div>
      </div>
    </section>
  )
}

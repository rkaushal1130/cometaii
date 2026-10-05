import styles from './courses-categories.module.css'

export default function CoursesCategories({ onSelectCourse }) {
  const technicalCourses = [
    {
      id: 'python-ai',
      title: 'Python With AI',
      desc: 'Master Python programming with AI-powered tools for automation, analytics, and intelligent application development.',
      icon: '🐍',
      level: 'Advanced',
      duration: '12 Weeks',
      rating: '4.8',
      reviews: '1.2K',
      price: '$899',
      originalPrice: '$1,299',
      discount: '31% OFF',
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
      icon: '🤖',
      level: 'Advanced',
      duration: 'Cohort Based',
      rating: '4.7',
      reviews: '874',
      price: '$849',
      originalPrice: '$1,199',
      discount: '29% OFF',
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
      icon: '🕵️‍♂️',
      level: 'Advanced',
      duration: '10 Weeks',
      rating: '4.9',
      reviews: '412',
      price: '$899',
      originalPrice: '$1,299',
      discount: '31% OFF',
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
      icon: '⚙️',
      level: 'Beginner',
      duration: '8 Weeks',
      rating: '4.8',
      reviews: '620',
      price: '$599',
      originalPrice: '$899',
      discount: '33% OFF',
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
      icon: '🛡️',
      level: 'Beginner',
      duration: '8 Weeks',
      rating: '4.7',
      reviews: '530',
      price: '$499',
      originalPrice: '$799',
      discount: '37% OFF',
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
      icon: '☕',
      level: 'Beginner',
      duration: '10 Weeks',
      rating: '4.8',
      reviews: '810',
      price: '$699',
      originalPrice: '$999',
      discount: '30% OFF',
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
      id: 'ai-data-science',
      title: 'Artificial Intelligence & Data Science',
      desc: 'Master AI algorithms, deep learning, data engineering, and predictive analytics to solve complex business problems.',
      icon: '🤖',
      level: 'Advanced',
      duration: '14 Weeks',
      rating: '4.9',
      reviews: '1.8K',
      price: '$999',
      originalPrice: '$1,499',
      discount: '33% OFF',
      gradientBg: 'linear-gradient(135deg, #051937, #004d7a, #008793)'
    },
    {
      id: 'computer-programming',
      title: 'Computer Programming',
      desc: 'Build strong computer science fundamentals, data structures, algorithms, and object-oriented programming skills.',
      icon: '💻',
      level: 'Beginner',
      duration: '12 Weeks',
      rating: '4.8',
      reviews: '1.1K',
      price: '$699',
      originalPrice: '$999',
      discount: '30% OFF',
      gradientBg: 'linear-gradient(135deg, #0f172a, #1e293b, #3b82f6)'
    },
    {
      id: 'ai-design',
      title: 'AI Design & Digital Creativity',
      desc: 'Harness generative AI design tools, UI/UX automation, prompt engineering, and visual media creation.',
      icon: '🎨',
      level: 'Intermediate',
      duration: '8 Weeks',
      rating: '4.7',
      reviews: '740',
      price: '$749',
      originalPrice: '$1,099',
      discount: '31% OFF',
      gradientBg: 'linear-gradient(135deg, #311b92, #4527a0, #7b1fa2)'
    },
    {
      id: 'web-technologies-ai',
      title: 'Web Technologies with AI',
      desc: 'Integrate OpenAI, Claude, LLMs, and custom AI agents into modern full-stack web applications.',
      icon: '🌐',
      level: 'Intermediate',
      duration: '10 Weeks',
      rating: '4.8',
      reviews: '1.3K',
      price: '$849',
      originalPrice: '$1,199',
      discount: '29% OFF',
      gradientBg: 'linear-gradient(135deg, #004d40, #00695c, #00897b)'
    },
    {
      id: 'ms-apps-ai',
      title: 'Microsoft Applications with AI',
      desc: 'Empower enterprise workflows by integrating AI into Excel, Power BI, Azure, and Microsoft 365 stack.',
      icon: '📊',
      level: 'Beginner',
      duration: '6 Weeks',
      rating: '4.7',
      reviews: '920',
      price: '$599',
      originalPrice: '$899',
      discount: '33% OFF',
      gradientBg: 'linear-gradient(135deg, #0d47a1, #1565c0, #1976d2)'
    },
    {
      id: 'ms-copilot',
      title: 'Microsoft Copilot Course',
      desc: 'Master Copilot for Microsoft 365, GitHub Copilot, and Azure AI to automate coding and document generation.',
      icon: '✨',
      level: 'All Levels',
      duration: '4 Weeks',
      rating: '4.9',
      reviews: '2.4K',
      price: '$499',
      originalPrice: '$799',
      discount: '37% OFF',
      gradientBg: 'linear-gradient(135deg, #1b5e20, #2e7d32, #388e3c)'
    }
  ]

  const professionalCourses = [
    {
      id: 'digital-marketing-ai',
      title: 'Digital Marketing with AI',
      desc: 'Run high-ROI ad campaigns, automated SEO, copy generation, and data-driven customer acquisition using AI.',
      icon: '📢',
      level: 'Advanced',
      duration: '8 Weeks',
      rating: '4.9',
      reviews: '950',
      price: '$799',
      originalPrice: '$1,199',
      discount: '33% OFF',
      gradientBg: 'linear-gradient(135deg, #880e4f, #ad1457, #c2185b)'
    },
    {
      id: 'business-analytics',
      title: 'Business Analytics',
      desc: 'Transform raw enterprise data into actionable business intelligence with SQL, Tableau, and Python analytics.',
      icon: '📈',
      level: 'Intermediate',
      duration: '10 Weeks',
      rating: '4.8',
      reviews: '1.1K',
      price: '$849',
      originalPrice: '$1,249',
      discount: '32% OFF',
      gradientBg: 'linear-gradient(135deg, #1a237e, #283593, #303f9f)'
    },
    {
      id: 'communication-softskills',
      title: 'Communication & Soft Skills',
      desc: 'Master executive presence, public speaking, negotiation, and cross-functional leadership in tech teams.',
      icon: '💬',
      level: 'All Levels',
      duration: '4 Weeks',
      rating: '4.9',
      reviews: '680',
      price: '$399',
      originalPrice: '$599',
      discount: '33% OFF',
      gradientBg: 'linear-gradient(135deg, #e65100, #ef6c00, #f57c00)'
    },
    {
      id: 'entrepreneurship-innovation',
      title: 'Entrepreneurship & Innovation',
      desc: 'Learn startup building, MVP prototyping, venture capital fundraising, and product-market fit strategies.',
      icon: '💡',
      level: 'Intermediate',
      duration: '8 Weeks',
      rating: '4.8',
      reviews: '820',
      price: '$799',
      originalPrice: '$1,199',
      discount: '33% OFF',
      gradientBg: 'linear-gradient(135deg, #bf360c, #d84315, #e64a19)'
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads & Audience Targeting',
      desc: 'Master Facebook & Instagram ad algorithms, custom audiences, retargeting funnels, and ROAS optimization.',
      icon: '🎯',
      level: 'Intermediate',
      duration: '6 Weeks',
      rating: '4.8',
      reviews: '1.5K',
      price: '$599',
      originalPrice: '$899',
      discount: '33% OFF',
      gradientBg: 'linear-gradient(135deg, #0d47a1, #1976d2, #2196f3)'
    },
    {
      id: 'ai-machine-learning',
      title: 'AI Machine Learning Engineer',
      desc: 'Develop end-to-end ML pipelines, neural networks, PyTorch, TensorFlow, and MLOps deployment.',
      icon: '🧠',
      level: 'Advanced',
      duration: '14 Weeks',
      rating: '4.9',
      reviews: '1.9K',
      price: '$999',
      originalPrice: '$1,499',
      discount: '33% OFF',
      gradientBg: 'linear-gradient(135deg, #311b92, #512da8, #673ab7)'
    },
    {
      id: 'generative-ai-tools',
      title: 'Generative AI Tools & Workflows',
      desc: 'Automate business tasks using ChatGPT, Midjourney, Claude, LangChain, and custom AI agents.',
      icon: '⚙️',
      level: 'Beginner',
      duration: '6 Weeks',
      rating: '4.8',
      reviews: '1.2K',
      price: '$649',
      originalPrice: '$949',
      discount: '31% OFF',
      gradientBg: 'linear-gradient(135deg, #006064, #00838f, #0097a7)'
    }
  ]

  const newLaunches = [
    {
      id: 'financial-literacy',
      title: 'Financial Literacy',
      desc: 'Manage money smartly, master personal budgeting, wealth building, and financial planning.',
      isNew: true,
      level: 'Beginner',
      duration: '6 Weeks',
      rating: '4.9',
      reviews: '420',
      price: '$499',
      originalPrice: '$799',
      discount: '37% OFF',
      gradientBg: 'linear-gradient(135deg, #1b5e20, #2e7d32, #43a047)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    },
    {
      id: 'stock-marketing',
      title: 'Stock Marketing Investing',
      desc: 'Learn fundamental analysis, technical chart patterns, risk management, and portfolio growth.',
      isNew: true,
      level: 'Intermediate',
      duration: '8 Weeks',
      rating: '4.8',
      reviews: '560',
      price: '$699',
      originalPrice: '$999',
      discount: '30% OFF',
      gradientBg: 'linear-gradient(135deg, #0d47a1, #1565c0, #00d2ff)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    }
  ]

  const handleSelect = (course) => {
    if (onSelectCourse) {
      onSelectCourse(course)
    }
  }

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          {/* Column 1: Technical Courses */}
          <div className={styles.column}>
            <div className={styles.colHeader}>
              <div className={`${styles.headerBadge} ${styles.blueBadge}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>TECHNICAL COURSES</h3>
            </div>
            <ul className={styles.courseList}>
              {technicalCourses.map((item) => (
                <li
                  key={item.id}
                  className={styles.courseItem}
                  onClick={() => handleSelect(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleSelect(item)}
                >
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <span className={styles.itemName}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Professional Courses */}
          <div className={styles.column}>
            <div className={styles.colHeader}>
              <div className={`${styles.headerBadge} ${styles.purpleBadge}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>PROFESSIONAL COURSES</h3>
            </div>
            <ul className={styles.courseList}>
              {professionalCourses.map((item) => (
                <li
                  key={item.id}
                  className={styles.courseItem}
                  onClick={() => handleSelect(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleSelect(item)}
                >
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <span className={styles.itemName}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: New Launches */}
          <div className={styles.column}>
            <div className={styles.colHeader}>
              <div className={`${styles.headerBadge} ${styles.rocketBadge}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/>
                </svg>
              </div>
              <h3>NEW LAUNCHES</h3>
            </div>

            <div className={styles.launchesList}>
              {newLaunches.map((launch) => (
                <div
                  key={launch.id}
                  className={styles.launchCard}
                  onClick={() => handleSelect(launch)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleSelect(launch)}
                >
                  <div className={styles.launchIconBox}>
                    {launch.icon}
                  </div>
                  <div className={styles.launchContent}>
                    <div className={styles.launchTop}>
                      <h4>{launch.title}</h4>
                      {launch.isNew && <span className={styles.newBadge}>New</span>}
                    </div>
                    <p>{launch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

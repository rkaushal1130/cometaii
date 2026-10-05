import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Explore from './pages/Explore'
import ArticlePost from './pages/ArticlePost'
import BlogPost from './pages/BlogPost'
import Courses from './pages/Courses'
import BeyondLearning from './pages/BeyondLearning'
import ScrollToTop from './components/ScrollToTop'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/beyond-learning" element={<BeyondLearning />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/article/:id" element={<ArticlePost />} />
        <Route path="/explore/blog/:id" element={<BlogPost />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  )
}

export default App

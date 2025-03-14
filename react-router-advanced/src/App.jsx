import React from 'react'
//integrate react-router-dom
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
//import components
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile Page</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/*Dynamic Route for blog post*/}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Nested Routes for profile
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
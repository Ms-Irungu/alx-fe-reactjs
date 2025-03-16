import React from 'react'
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
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import useAuth from './components/useAuth'

const App = () => {

  const { isAuthenticated, login, logout } = useAuth(); // Use custom hook


  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/profile">Profile Page</Link> */}
        <Link to="/blog">Blog</Link>
        {/* Show Profile & Logout only if authenticated */}
        {isAuthenticated ? (
          <>
            <Link to="/profile">Profile Page</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/*Dynamic Route for blog post*/}
        <Route path="/login" element={<LoginPage login={login} />} />
        
        {/* Protected Route */}
        <Route
          path="/profile/*"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="*" element={<Profile />} />
        </Route>


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
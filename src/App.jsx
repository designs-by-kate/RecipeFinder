import { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Contact from './pages/Contact'
import './App.css'


const validRoutes = ['/RecipeFinder/', '/home', '/favourite', '/contact'];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // Add logic to redirect to home page if the path is not recognized
  if (!validRoutes.includes(pathname)) {
    return <Navigate to="/RecipeFinder/" replace />;
  }

  return null; // This component doesn't render anything
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/RecipeFinder/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

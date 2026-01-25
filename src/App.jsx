import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Insights from './pages/Insights';
import ClaimYourCrown from './pages/ClaimYourCrown';
import SoulLounge from './pages/SoulLounge';
import GetInTouch from './pages/GetInTouch';
import './styles/global.css';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page transition wrapper
function PageTransition({ children }) {
  return (
    <div className="page-transition">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/claim-your-crown" element={<ClaimYourCrown />} />
          <Route path="/soul-lounge" element={<SoulLounge />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>
      </PageTransition>
    </Router>
  );
}

export default App;

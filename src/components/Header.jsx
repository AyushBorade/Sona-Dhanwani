import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide if scrolling down significantly and menu is closed
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !mobileMenuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${hidden ? 'hidden' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <Link to="/">Sona Dhanwani</Link>
      </div>

      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/programs" className={location.pathname === '/programs' ? 'active' : ''}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="/insights" className={location.pathname === '/insights' ? 'active' : ''}>
              Insights
            </Link>
          </li>
          <li>
            <Link to="/claim-your-crown" className={location.pathname === '/claim-your-crown' ? 'active' : ''}>
              Claim Your Crown
            </Link>
          </li>
          <li>
            <Link to="/soul-lounge" className={location.pathname === '/soul-lounge' ? 'active' : ''}>
              Soul Lounge
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

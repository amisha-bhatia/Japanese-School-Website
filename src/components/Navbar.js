import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/courses", label: "Courses" },
    { path: "/contact", label: "Contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo-main">
              <span className="logo-japanese">なますて日本語</span>
              <h1 className="logo-title">Namaste Nihongo</h1>
            </div>
            <p className="logo-subtitle">Japanese Language & Culture School</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="active-indicator"></span>
                  )}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link to="/contact" className="nav-btn">
                Start Learning
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`navbar-mobile ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu">
            <div className="mobile-header">
              <div className="mobile-logo">
                <span className="logo-japanese">なますて日本語</span>
                <span className="logo-title">Namaste Nihongo</span>
              </div>
              <button 
                className="close-menu"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="mobile-nav-item">
                  <Link
                    to={link.path}
                    className={`mobile-nav-link ${location.pathname === link.path ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mobile-nav-item">
                <Link 
                  to="/contact" 
                  className="mobile-nav-btn"
                  onClick={closeMenu}
                >
                  Start Learning
                </Link>
              </li>
            </ul>

            <div className="mobile-contact-info">
              <p className="school-tagline">Japanese Language & Culture School</p>
              <div className="contact-details">
                <a href="tel:+911234567890" className="contact-link">
                  📞 +91 123 456 7890
                </a>
                <a href="mailto:info@namastenihongo.com" className="contact-link">
                  ✉️ info@namastenihongo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
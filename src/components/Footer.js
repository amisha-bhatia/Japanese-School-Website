import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/courses", label: "Courses" },
    { path: "/contact", label: "Contact" },
    { path: "/faq", label: "FAQ" },
    { path: "/privacy", label: "Privacy Policy" }
  ];

  const coursesLinks = [
    { label: "Basic Japanese (N5)", level: "Beginner" },
    { label: "Intermediate (N4)", level: "Intermediate" },
    { label: "Advanced (N3-N2)", level: "Advanced" },
    { label: "Business Japanese", level: "Professional" },
    { label: "JLPT Preparation", level: "Exam Focus" },
    { label: "Cultural Workshops", level: "Cultural" }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com/namastenihongo", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com/namastenihongo", label: "Instagram" },
    { icon: <FaTwitter />, url: "https://twitter.com/namastenihongo", label: "Twitter" },
    { icon: <FaYoutube />, url: "https://youtube.com/namastenihongo", label: "YouTube" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, info: "123 Japanese Street, Language District, Tokyo, Japan 100-0001" },
    { icon: <FaPhone />, info: "+81 3-1234-5678 (Japan) | +91 98765 43210 (India)" },
    { icon: <FaEnvelope />, info: "info@namastenihongo.com" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-column brand-column">
            <div className="footer-logo">
              <span className="logo-japanese">なますて日本語</span>
              <h3 className="logo-title">Namaste Nihongo</h3>
            </div>
            <p className="brand-tagline">
              Bridging Cultures Through Japanese Language Education
            </p>
            <p className="brand-description">
              A premier Japanese language institute combining authentic language training 
              with cultural immersion for comprehensive learning experiences.
            </p>
            
            <div className="social-links">
              <h4 className="social-title">Follow Us</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column */}
          <div className="footer-column">
            <h4 className="footer-title">Our Courses</h4>
            <ul className="courses-list">
              {coursesLinks.map((course, index) => (
                <li key={index} className="course-item">
                  <span className="course-name">{course.label}</span>
                  <span className="course-level">{course.level}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="contact-list">
              {contactInfo.map((contact, index) => (
                <li key={index} className="contact-item">
                  <span className="contact-icon">{contact.icon}</span>
                  <span className="contact-info">{contact.info}</span>
                </li>
              ))}
            </ul>
            
            <div className="newsletter">
              <h4 className="newsletter-title">Newsletter</h4>
              <p className="newsletter-text">Subscribe for updates & tips</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                  aria-label="Email for newsletter subscription"
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Namaste Nihongo | Indo-Japanese Language Institute. All rights reserved.
            </p>
            
            <div className="footer-badges">
              <span className="badge">JLPT Certified</span>
              <span className="badge">ISO 9001:2015</span>
              <span className="badge">Govt. Recognized</span>
            </div>
            
            <div className="footer-extra">
              <Link to="/terms" className="extra-link">Terms of Service</Link>
              <Link to="/privacy" className="extra-link">Privacy Policy</Link>
              <Link to="/sitemap" className="extra-link">Sitemap</Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* HERO / INTRO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Learning Begins With Us</h1>
          <p className="hero-description">
            <span className="brand-name">NAMASTE NIHONGO</span> is a Japanese language school for learners passionate about
            Japanese language, culture, and career opportunities in Japan. We focus on
            practical communication, cultural understanding, and confidence building.
          </p>
          <Link to="/contact" className="btn-primary">Start Your Journey →</Link>
        </div>
        <div className="hero-image">
          <img
            src="/images/intro/classroom-intro.jpeg"
            alt="Japanese language classroom"
            className="hero-img"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-choose-us">
        <div className="section-header">
          <h2 className="section-title">Why Choose <span className="brand-name">NAMASTE NIHONGO</span>?</h2>
          <p className="section-subtitle">Discover what makes us different</p>
        </div>
        <div className="features-grid">
          {[
            { icon: "👨‍🏫", title: "Expert Teachers", desc: "Japanese & Indian language experts" },
            { icon: "🗣️", title: "Kaiwa Focus", desc: "Strong emphasis on conversation practice" },
            { icon: "🈁", title: "Kanji Made Easy", desc: "Practical learning methods" },
            { icon: "👥", title: "Small Batches", desc: "Individual attention guaranteed" },
            { icon: "📝", title: "Regular Assessments", desc: "Weekly tests & progress tracking" },
            { icon: "🇯🇵", title: "Career Support", desc: "Job placement assistance in Japan" }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS SECTION */}
      <section className="success-section">
        <div className="section-header">
          <h2 className="section-title">Students Placed in Japan 🇯🇵</h2>
          <p className="section-subtitle">
            Our students are successfully studying and working across Japan,
            building bright futures through language and cultural skills.
          </p>
        </div>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="gallery-item">
              <img 
                src={`/images/success/success${num}.jpeg`} 
                alt={`Student success story ${num}`}
                loading="lazy"
              />
              <div className="image-overlay">
                <span>Success Story</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section className="section activities">
        <div className="activities-content">
          <div className="text-content">
            <h2 className="section-title">Interactive Classroom Activities</h2>
            <p className="section-description">
              Learning at <span className="brand-name">Namaste Nihongo</span> is immersive and cultural. 
              Students experience Japanese traditions, hands-on Kanji practice, and real-world scenarios 
              to build authentic confidence.
            </p>
            <ul className="activities-list">
              <li>🎌 Cultural workshops (Tea ceremony, Calligraphy)</li>
              <li>✍️ Practical Kanji writing sessions</li>
              <li>🎤 Real conversation practice with natives</li>
              <li>🎮 Interactive language games</li>
            </ul>
          </div>
          <div className="activities-gallery">
            {[1, 2].map((num) => (
              <div key={num} className="activity-image">
                <img 
                  src={`/images/activities/activity${num}.jpeg`} 
                  alt={`Classroom activity ${num}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Start Your Japanese Journey Today</h2>
          <p className="cta-description">
            Join <span className="brand-name">NAMASTE NIHONGO</span> and take your first step toward 
            studying, working, and living in Japan. Limited seats available!
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary btn-large">Enroll Now →</Link>
            <Link to="/courses" className="btn-secondary">View Courses</Link>
          </div>
          <div className="cta-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students Trained</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">In Japan</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
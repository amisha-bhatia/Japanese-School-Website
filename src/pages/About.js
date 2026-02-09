import { motion } from 'framer-motion';
import './About.css';

function About() {
  const sections = [
    {
      title: "Who We Are",
      content: "NAMASTE NIHONGO is a dedicated Japanese language and intercultural training institute. We combine academic quality, practical learning, and Japanese cultural values to create a unique learning experience.",
      icon: "🏫",
      color: "#ff6b6b"
    },
    {
      title: "Our Mission",
      content: "To build confident Japanese language speakers who can successfully study, work, and live in Japan through immersive language training and cultural education.",
      icon: "🎯",
      color: "#4ecdc4"
    },
    {
      title: "Our Vision",
      content: "To become the most trusted bridge between Indian learners and opportunities in Japan, creating a vibrant community of Japan enthusiasts.",
      icon: "🌟",
      color: "#45b7d1"
    }
  ];

  const teachingApproach = [
    "Relaxed & supportive learning environment",
    "Focus on real-life Japanese usage",
    "Clear explanations and easy techniques",
    "Step-by-step progress tracking",
    "Cultural immersion activities",
    "Personalized feedback sessions"
  ];

  const smallBatchBenefits = [
    { icon: "👥", text: "Maximum 15 students per batch", detail: "Optimal class size for learning" },
    { icon: "🎯", text: "Individual attention", detail: "Personalized guidance for each student" },
    { icon: "💬", text: "Better interaction", detail: "More speaking practice opportunities" },
    { icon: "⚡", text: "Faster improvement", detail: "Quick progress and clarity" }
  ];

  const teachers = [
    {
      name: "Japanese Instructors",
      description: "Native speakers with teaching certification and years of experience",
      expertise: ["JLPT Preparation", "Business Japanese", "Cultural Etiquette"]
    },
    {
      name: "Indian Instructors",
      description: "JLPT N1/N2 certified with extensive teaching experience",
      expertise: ["Grammar Focus", "Exam Strategies", "Learning Hacks"]
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            About <span className="brand-name">NAMASTE NIHONGO</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Bridging Cultures Through Language Education
          </motion.p>
        </div>
      </section>

      {/* Introduction Cards */}
      <section className="intro-cards">
        {sections.map((section, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="intro-card"
            style={{ borderTop: `4px solid ${section.color}` }}
          >
            <div className="card-icon" style={{ background: section.color }}>
              {section.icon}
            </div>
            <h3 className="card-title">{section.title}</h3>
            <p className="card-content">{section.content}</p>
          </motion.div>
        ))}
      </section>

      {/* Teaching Approach */}
      <section className="teaching-approach">
        <div className="section-header">
          <h2 className="section-title">Our Teaching Philosophy</h2>
          <p className="section-subtitle">Innovative methods for effective learning</p>
        </div>
        
        <div className="approach-content">
          <div className="approach-image">
            <img 
              src="/images/about/teaching.jpg" 
              alt="Teaching Japanese language" 
              className="approach-img"
            />
          </div>
          <div className="approach-list">
            {teachingApproach.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="approach-item"
              >
                <div className="item-icon">✓</div>
                <span className="item-text">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Batch Benefits */}
      <section className="benefits-section">
        <div className="section-header">
          <h2 className="section-title">Why Small Batches Work Better</h2>
          <p className="section-subtitle">Personalized attention leads to faster progress</p>
        </div>
        
        <div className="benefits-grid">
          {smallBatchBenefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="benefit-card"
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.text}</h3>
              <p className="benefit-detail">{benefit.detail}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="batch-size">
          <div className="size-indicator">
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot active"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
            <div className="size-dot"></div>
          </div>
          <p className="size-label">Maximum <span className="highlight">15 students</span> per batch</p>
        </div>
      </section>

      {/* Our Teachers */}
      <section className="teachers-section">
        <div className="section-header">
          <h2 className="section-title">Meet Our Expert Instructors</h2>
          <p className="section-subtitle">Dedicated professionals guiding your Japanese journey</p>
        </div>
        
        <div className="teachers-grid">
          {teachers.map((teacher, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="teacher-card"
            >
              <h3 className="teacher-name">{teacher.name}</h3>
              <p className="teacher-description">{teacher.description}</p>
              <div className="expertise-list">
                {teacher.expertise.map((skill, skillIndex) => (
                  <span key={skillIndex} className="expertise-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="teacher-quote">
          <blockquote className="quote">
            "Our teachers don't just teach Japanese - they mentor students through their 
            entire journey, from basic greetings to professional workplace communication."
          </blockquote>
          <cite className="quote-author">- Our Teaching Philosophy</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Japanese Journey?</h2>
          <p className="cta-description">
            Join our community of learners and experience the NAMASTE NIHONGO difference.
          </p>
          <div className="cta-buttons">
            <a href="/courses" className="btn-primary">View Courses</a>
            <a href="/contact" className="btn-secondary">Book Free Demo</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Courses.css';

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Basic Japanese (N5 Level)',
      level: 'Beginner',
      duration: '3 Months',
      format: 'Offline & Online',
      price: '₹15,000',
      description: 'Start your Japanese journey with fundamentals - alphabets, basic grammar, and daily conversation.',
      features: [
        'Hiragana & Katakana mastery',
        'Basic vocabulary (500+ words)',
        'Simple sentence formation',
        'Daily conversation practice',
        'Cultural introduction'
      ],
      icon: '🎌',
      category: 'foundation',
      popular: true
    },
    {
      id: 2,
      title: 'Intermediate Japanese (N4 Level)',
      level: 'Intermediate',
      duration: '4 Months',
      format: 'Offline & Online',
      price: '₹20,000',
      description: 'Build confidence in daily conversations and understand basic written Japanese.',
      features: [
        'Kanji introduction (200+ characters)',
        'Complex sentence structures',
        'Listening comprehension',
        'Reading simple articles',
        'Travel Japanese'
      ],
      icon: '🗾',
      category: 'foundation',
      popular: true
    },
    {
      id: 3,
      title: 'Pre-Advanced Japanese (N3 Level)',
      level: 'Pre-Advanced',
      duration: '5 Months',
      format: 'Offline & Online',
      price: '₹25,000',
      description: 'Develop fluency for work and social situations in Japan.',
      features: [
        'Kanji (600+ characters)',
        'Business communication basics',
        'News comprehension',
        'Essay writing',
        'JLPT N3 preparation'
      ],
      icon: '🏯',
      category: 'advancement'
    },
    {
      id: 4,
      title: 'Advanced Japanese (N2 Level)',
      level: 'Advanced',
      duration: '6 Months',
      format: 'Offline & Online',
      price: '₹30,000',
      description: 'Master Japanese for professional environments and academic purposes.',
      features: [
        'Kanji (1000+ characters)',
        'Professional correspondence',
        'Academic reading',
        'Presentation skills',
        'JLPT N2 intensive'
      ],
      icon: '🎓',
      category: 'advancement'
    },
    {
      id: 5,
      title: 'Business Japanese',
      level: 'Professional',
      duration: '3 Months',
      format: 'Offline & Online',
      price: '₹18,000',
      description: 'Specialized course for workplace communication and business etiquette.',
      features: [
        'Business vocabulary',
        'Meeting participation',
        'Email writing',
        'Corporate culture',
        'Interview preparation'
      ],
      icon: '💼',
      category: 'specialized'
    },
    {
      id: 6,
      title: 'JLPT Intensive Preparation',
      level: 'Exam Focus',
      duration: '2 Months',
      format: 'Offline & Online',
      price: '₹12,000',
      description: 'Focused training for JLPT certification with mock tests and strategies.',
      features: [
        'Full mock test series',
        'Time management',
        'Weakness analysis',
        'Exam strategies',
        'Score improvement'
      ],
      icon: '📝',
      category: 'specialized',
      popular: true
    }
  ];

  const supportServices = [
    {
      title: 'JLPT Exam Support',
      description: 'Comprehensive preparation for N5 to N2 levels',
      icon: '🎯',
      items: ['Mock tests', 'Strategy sessions', 'Score analysis', 'Last-minute tips']
    },
    {
      title: 'Career Support for Japan',
      description: 'Complete assistance for job opportunities in Japan',
      icon: '🇯🇵',
      items: ['Engineer Visa guidance', 'SSW/TITP support', 'Resume preparation', 'Interview training']
    },
    {
      title: 'Cultural Training',
      description: 'Immerse yourself in Japanese culture and etiquette',
      icon: '🎎',
      items: ['Etiquette workshops', 'Cultural activities', 'Festival participation', 'Traditional arts']
    },
    {
      title: 'Speaking Confidence',
      description: 'Special sessions to build conversational fluency',
      icon: '🗣️',
      items: ['Group discussions', 'Role-plays', 'Pronunciation clinic', 'Public speaking']
    }
  ];

  const studentSuccess = [
    { number: '95%', label: 'JLPT Pass Rate' },
    { number: '150+', label: 'Students in Japan' },
    { number: '50+', label: 'Companies Partnered' },
    { number: '1000+', label: 'Students Trained' }
  ];

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'foundation', label: 'Foundation' },
    { id: 'advancement', label: 'Advancement' },
    { id: 'specialized', label: 'Specialized' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="courses-container">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="hero-overlay">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Master Japanese with Structured Learning
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Choose from our carefully designed courses and start your journey to fluency
          </motion.p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="categories-section">
        <div className="section-header">
          <h2 className="section-title">Explore Our Courses</h2>
          <p className="section-subtitle">Filter by category to find your perfect fit</p>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="courses-grid">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`course-card ${course.popular ? 'popular' : ''}`}
            >
              {course.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="course-header">
                <div className="course-icon">{course.icon}</div>
                <div className="course-meta">
                  <span className="course-level">{course.level}</span>
                  <span className="course-duration">{course.duration}</span>
                </div>
              </div>

              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>

              <div className="course-features">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="feature">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="course-footer">
                <div className="course-price">
                  <span className="price-label">Course Fee</span>
                  <span className="price-value">{course.price}</span>
                </div>
                <div className="course-format">
                  <span className="format-label">Format</span>
                  <span className="format-value">{course.format}</span>
                </div>
              </div>

              <button className="enroll-btn">
                Enroll Now →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Services */}
      <section className="support-services">
        <div className="section-header">
          <h2 className="section-title">Additional Support & Services</h2>
          <p className="section-subtitle">Beyond the classroom - everything you need to succeed</p>
        </div>

        <div className="services-grid">
          {supportServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.items.map((item, idx) => (
                  <li key={idx} className="service-feature">
                    <span className="feature-dot"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stats */}
      <section className="success-stats">
        <div className="stats-container">
          <div className="stats-header">
            <h2 className="stats-title">Student Success Stories</h2>
            <p className="stats-subtitle">Join hundreds of successful learners who transformed their lives with Japanese</p>
          </div>

          <div className="stats-grid">
            {studentSuccess.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-card"
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="testimonial">
            <p className="testimonial-text">
              "NAMASTE NIHONGO helped me clear JLPT N3 and secure a job in Tokyo. 
              The structured courses and career guidance made all the difference!"
            </p>
            <p className="testimonial-author">- Priya Sharma, Software Engineer in Tokyo</p>
          </div>
        </div>
      </section>

      {/* Course Comparison */}
      <section className="comparison-section">
        <div className="section-header">
          <h2 className="section-title">Find Your Level</h2>
          <p className="section-subtitle">Not sure which course is right for you?</p>
        </div>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Course Level</th>
                <th>JLPT Equivalent</th>
                <th>Duration</th>
                <th>Ideal For</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Japanese</td>
                <td>N5</td>
                <td>3 Months</td>
                <td>Absolute beginners</td>
                <td>Daily conversations</td>
              </tr>
              <tr>
                <td>Intermediate</td>
                <td>N4</td>
                <td>4 Months</td>
                <td>Basic knowledge holders</td>
                <td>Travel & basic work</td>
              </tr>
              <tr>
                <td>Pre-Advanced</td>
                <td>N3</td>
                <td>5 Months</td>
                <td>Intermediate speakers</td>
                <td>Workplace communication</td>
              </tr>
              <tr>
                <td>Advanced</td>
                <td>N2</td>
                <td>6 Months</td>
                <td>Advanced learners</td>
                <td>Professional fluency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="courses-cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-description">
            Book a free consultation session with our course advisor to find the perfect course for your goals.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Book Free Consultation</button>
            <button className="btn-secondary">Download Course Brochure</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
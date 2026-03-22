import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="#" className="logo" onClick={closeMobileMenu}>
            <img src="/dyf-logo.svg" alt="DYF - Diabetes Youth Families" className="logo-image" />
          </a>
          
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#programs" onClick={closeMobileMenu}>Programs</a>
            <a href="#events" onClick={closeMobileMenu}>Events</a>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#impact" onClick={closeMobileMenu}>Impact</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            <a href="https://dyf.org/donate/" className="btn-donate">Donate</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <svg className="dots-animation" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#00ADEE" opacity="0.15">
                  <animate attributeName="opacity" values="0.15;0.4;0.15" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="40" cy="40" r="2" fill="#F6921E" opacity="0.15">
                  <animate attributeName="opacity" values="0.15;0.4;0.15" dur="5s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="70" cy="20" r="2" fill="#86C244" opacity="0.15">
                  <animate attributeName="opacity" values="0.15;0.4;0.15" dur="6s" repeatCount="indefinite" begin="2s" />
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
            
            {/* Floating accent dots */}
            <circle cx="100" cy="100" r="4" fill="#00ADEE" opacity="0.3">
              <animate attributeName="cy" values="100;80;100" dur="8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="150" r="3" fill="#F6921E" opacity="0.3">
              <animate attributeName="cy" values="150;130;150" dur="10s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="10s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="500" r="5" fill="#86C244" opacity="0.3">
              <animate attributeName="cy" values="500;480;500" dur="12s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="12s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="450" r="3" fill="#00ADEE" opacity="0.3">
              <animate attributeName="cy" values="450;430;450" dur="9s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="9s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="200" r="4" fill="#F6921E" opacity="0.3">
              <animate attributeName="cy" values="200;180;200" dur="11s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="11s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">🏕️ Empowering T1D Families Since 1938</div>
            <h1 className="hero-title">
              Where kids with diabetes discover they're not alone
            </h1>
            <p className="hero-description">
              At DYF, we create a supportive community where children, teens, and families affected by type 1 diabetes 
              can learn, grow, and thrive together through camp experiences and year-round programs.
            </p>
            <div className="hero-buttons">
              <a href="#programs" className="btn-primary">2026 Programs Open Now</a>
              <a href="#events" className="btn-secondary-outline">View Events Calendar</a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/IMG_0608.jpeg" 
              alt="DYF Camp Experience"
              className="hero-photo"
            />
          </div>
        </div>
      </section>

      {/* Events Calendar Section - Prominent */}
      <section id="events" className="events-calendar">
        <div className="container">
          <div className="events-header">
            <div>
              <h2>Upcoming Events & Programs</h2>
              <p>Join us for camps, support groups, and community gatherings</p>
            </div>
            <Link to="/schedule" className="btn-view-all">View Full Calendar</Link>
          </div>

          <div className="events-grid">
            <div className="event-card featured">
              <div className="event-tag">Summer Camp</div>
              <div className="event-date-large">
                <span className="month">June-Aug</span>
                <span className="year">2026</span>
              </div>
              <h3>Bearskin Meadow Camp</h3>
              <p>Week-long residential camp experiences for kids, teens, and families in the beautiful Sequoia National Forest.</p>
              <a href="https://dyf.org/2026-program-schedule/" className="event-link">Register Now →</a>
            </div>

            <div className="event-card">
              <div className="event-date-badge">
                <span className="date-day">7</span>
                <span className="date-month">APR</span>
              </div>
              <h3>Beer and Basals</h3>
              <p className="event-time">7:00 PM - 8:00 PM</p>
              <p>Social gathering for adults with T1D to connect and share experiences.</p>
            </div>

            <div className="event-card">
              <div className="event-date-badge">
                <span className="date-day">14</span>
                <span className="date-month">APR</span>
              </div>
              <h3>Caregiver Support Group</h3>
              <p className="event-time">7:00 PM - 8:00 PM</p>
              <p>Monthly support for parents and guardians navigating T1D with their children.</p>
            </div>

            <div className="event-card">
              <div className="event-date-badge">
                <span className="date-day">15</span>
                <span className="date-month">APR</span>
              </div>
              <h3>T1D Adult Support Group</h3>
              <p className="event-time">7:30 PM - 8:30 PM</p>
              <p>Connect with other adults living with type 1 diabetes in a supportive environment.</p>
            </div>

            <div className="event-card highlight">
              <div className="event-tag scholarship">Scholarships Available</div>
              <h3>Financial Assistance</h3>
              <p>We offer scholarships, payment plans, and crowdfunding options to make all programs accessible to everyone.</p>
              <a href="https://dyf.org/2026-program-schedule/" className="event-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1,900+</div>
              <div className="stat-label">Individuals served annually</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Years of impact</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Scholarship availability</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Year-round</div>
              <div className="stat-label">Programs & support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs">
        <div className="container">
          <div className="section-header">
            <h2>2026 Programs Now Open</h2>
            <p>Registration is open for our exciting lineup of camps and programs</p>
          </div>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image">
                <img src="/IMG_3243.jpeg" alt="Kids Camp" />
                <div className="program-overlay">Kids Camp</div>
              </div>
              <div className="program-content">
                <h3>Kids Camp</h3>
                <p>Classic camp experiences with swimming, archery, arts & crafts, and diabetes education in a safe, supportive environment.</p>
                <a href="https://dyf.org/2026-program-schedule/" className="program-link">Learn more →</a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-image">
                <img src="/IMG_3244.jpeg" alt="Family Camp" />
                <div className="program-overlay">Family Camp</div>
              </div>
              <div className="program-content">
                <h3>Family Camp</h3>
                <p>Weekend experiences for the whole family, including siblings and parents, to learn and grow together.</p>
                <a href="https://dyf.org/2026-program-schedule/" className="program-link">Learn more →</a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-image">
                <img src="/Unknown-1.jpeg" alt="Teen Programs" />
                <div className="program-overlay">Teen Programs</div>
              </div>
              <div className="program-content">
                <h3>Teen Programs</h3>
                <p>Adventure programs, leadership training, and peer support designed specifically for teenagers with T1D.</p>
                <a href="https://dyf.org/2026-program-schedule/" className="program-link">Learn more →</a>
              </div>
            </div>
          </div>

          <div className="programs-cta">
            <div className="cta-box">
              <p className="cta-text">
                We make camp accessible to everyone through scholarships, payment plans, pricing tiers, and crowdfunding options.
              </p>
              <Link to="/schedule" className="btn-primary">View Full Schedule</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                The mission of DYF is to improve the quality of life for children, teens and families affected by diabetes. 
                We provide education and recreation within a supportive community, encouraging personal growth, 
                knowledge and independence.
              </p>
              <div className="mission-quote">
                <p className="quote-text">"We just wouldn't be the people we are today without diabetes and without camp."</p>
                <p className="quote-author">— DYF Camper</p>
              </div>
              <a href="https://dyf.org/donate/" className="btn-primary">Support DYF</a>
            </div>
            <div className="mission-visual">
              <img src="/Unknown-3.jpeg" alt="DYF Community" className="mission-image" />
              <div className="mission-stats">
                <div className="stat-box">
                  <div className="stat-icon">🏕️</div>
                  <h3>Since 1938</h3>
                  <p>Providing camp experiences for tens of thousands of children and families</p>
                </div>
                <div className="stat-box">
                  <div className="stat-icon">🌲</div>
                  <h3>Bearskin Meadow</h3>
                  <p>Located in the beautiful Sequoia National Forest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="impact">
        <div className="container">
          <h2>The DYF Experience</h2>
          <p className="impact-subtitle">More than just camp—it's a community that lasts a lifetime</p>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">🏕️</div>
              <h3>Bearskin Meadow Camp</h3>
              <p>Experience the magic of camp in the Sequoia National Forest. Swimming, archery, campfires, and lifelong friendships—all with expert diabetes care.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🤝</div>
              <h3>Year-Round Community</h3>
              <p>Stay connected beyond summer with monthly support groups, social events, and programs for every age and stage.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">💪</div>
              <h3>Building Confidence</h3>
              <p>Watch your child gain independence and self-confidence as they learn diabetes management skills in a fun, supportive environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="email-signup">
        <div className="container">
          <h2>Stay Connected</h2>
          <p>Join our email list for updates on programs, events, and community news</p>
          <a href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E331194&id=8" className="btn-primary">
            Subscribe Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section footer-main">
              <div className="footer-logo">
                <img src="/dyf-logo.svg" alt="DYF - Diabetes Youth Families" className="footer-logo-image" />
              </div>
              <p className="footer-tagline">A World of Education, Inspiration and Support</p>
              <p className="footer-mission">
                Improving the quality of life for children, teens and families affected by diabetes through education, recreation, and community.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/dyfT1D" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/dyf_t1d/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span>Instagram</span>
                </a>
                <a href="https://www.youtube.com/channel/UCgVje2-BlUTC6rdcs6JBHYg/videos" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span>YouTube</span>
                </a>
              </div>
              <div className="sponsor-section">
                <p className="sponsor-label">Thank you to our presenting sponsor</p>
                <a href="https://diabloclinical.com/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                  Diablo Clinical Research
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>
                5167 Clayton Road, Suite F<br />
                Concord, CA 94521<br />
                <br />
                Phone: 925-680-4994<br />
                Hours: M-F 9am-5pm PST
              </p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#programs">Programs</a></li>
                <li><a href="#events">Events Calendar</a></li>
                <li><Link to="/schedule">2026 Schedule</Link></li>
                <li><a href="https://dyf.org/donate/">Donate</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-legal">
              <p>Federal Tax ID # 94-6003673 • DYF is a 501(c)(3) non-profit</p>
              <p>This institution is an equal opportunity provider operating under special use permit with the Sequoia National Forest.</p>
            </div>
            <div className="footer-links">
              <a href="https://dyf.org/privacy-policy/">Privacy Policy</a>
              <span>•</span>
              <a href="https://dyf.org/terms-and-conditions/">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

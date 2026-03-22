import './App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Schedule() {
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
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img src="/dyf-logo.svg" alt="DYF - Diabetes Youth Families" className="logo-image" />
          </Link>
          
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
            <Link to="/#programs" onClick={closeMobileMenu}>Programs</Link>
            <Link to="/#events" onClick={closeMobileMenu}>Events</Link>
            <Link to="/#about" onClick={closeMobileMenu}>About</Link>
            <Link to="/#impact" onClick={closeMobileMenu}>Impact</Link>
            <Link to="/#contact" onClick={closeMobileMenu}>Contact</Link>
            <a href="https://dyf.org/donate/" className="btn-donate">Donate</a>
          </nav>
        </div>
      </header>

      {/* Schedule Hero */}
      <section className="schedule-hero">
        <div className="container">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1>2026 Program Schedule</h1>
          <p className="schedule-intro">
            Join us for an incredible year of camps, support groups, and community events. 
            Registration is now open for all programs!
          </p>
        </div>
      </section>

      {/* Summer Camps */}
      <section className="schedule-section">
        <div className="container">
          <h2 className="schedule-category-title">Summer Camps at Bearskin Meadow</h2>
          <p className="schedule-category-desc">
            Week-long residential camp experiences in the beautiful Sequoia National Forest
          </p>

          <div className="schedule-grid">
            <div className="schedule-card featured">
              <div className="schedule-tag">Kids Camp</div>
              <h3>Kids Camp Session 1</h3>
              <div className="schedule-date">June 15-21, 2026</div>
              <p>Ages 8-13 • Classic camp activities with diabetes education and 24/7 medical support</p>
              <a href="https://dyf.org/2026-program-schedule/" className="btn-primary">Register Now</a>
            </div>

            <div className="schedule-card featured">
              <div className="schedule-tag">Kids Camp</div>
              <h3>Kids Camp Session 2</h3>
              <div className="schedule-date">June 22-28, 2026</div>
              <p>Ages 8-13 • Swimming, archery, campfires, and lifelong friendships</p>
              <a href="https://dyf.org/2026-program-schedule/" className="btn-primary">Register Now</a>
            </div>

            <div className="schedule-card featured">
              <div className="schedule-tag">Teen Camp</div>
              <h3>Teen Adventure Camp</h3>
              <div className="schedule-date">July 6-12, 2026</div>
              <p>Ages 13-17 • Leadership development, outdoor adventures, and peer support</p>
              <a href="https://dyf.org/2026-program-schedule/" className="btn-primary">Register Now</a>
            </div>

            <div className="schedule-card featured">
              <div className="schedule-tag">Family Camp</div>
              <h3>Family Camp Weekend</h3>
              <div className="schedule-date">July 19-21, 2026</div>
              <p>All ages • Bring the whole family for a weekend of connection and learning</p>
              <a href="https://dyf.org/2026-program-schedule/" className="btn-primary">Register Now</a>
            </div>

            <div className="schedule-card featured">
              <div className="schedule-tag">Teen Camp</div>
              <h3>Teen Leadership Camp</h3>
              <div className="schedule-date">August 3-9, 2026</div>
              <p>Ages 14-17 • Advanced leadership training and counselor-in-training opportunities</p>
              <a href="https://dyf.org/2026-program-schedule/" className="btn-primary">Register Now</a>
            </div>

            <div className="schedule-card featured">
              <div className="schedule-tag">Family Camp</div>
              <h3>Family Camp Session 2</h3>
              <div className="schedule-date">August 16-18, 2026</div>
              <p>All ages • End-of-summer celebration with activities for everyone</p>
              <a href="https://dyf.org/2026-program-schedule/" className="btn-primary">Register Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Support Groups */}
      <section className="schedule-section alt">
        <div className="container">
          <h2 className="schedule-category-title">Monthly Support Groups</h2>
          <p className="schedule-category-desc">
            Year-round community connection and support • All groups meet virtually
          </p>

          <div className="schedule-grid">
            <div className="schedule-card">
              <div className="schedule-tag recurring">Monthly</div>
              <h3>Beer and Basals</h3>
              <div className="schedule-date">First Monday • 7:00-8:00 PM</div>
              <p>Social gathering for adults with T1D to connect and share experiences in a relaxed setting</p>
            </div>

            <div className="schedule-card">
              <div className="schedule-tag recurring">Monthly</div>
              <h3>Caregiver Support Group</h3>
              <div className="schedule-date">Second Monday • 7:00-8:00 PM</div>
              <p>Support for parents and guardians navigating T1D with their children</p>
            </div>

            <div className="schedule-card">
              <div className="schedule-tag recurring">Monthly</div>
              <h3>T1D Adult Support Group</h3>
              <div className="schedule-date">Third Tuesday • 7:30-8:30 PM</div>
              <p>Connect with other adults living with type 1 diabetes in a supportive environment</p>
            </div>

            <div className="schedule-card">
              <div className="schedule-tag recurring">Monthly</div>
              <h3>Teen Support Circle</h3>
              <div className="schedule-date">Last Thursday • 6:00-7:00 PM</div>
              <p>Peer support for teens ages 13-17 navigating T1D and adolescence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="schedule-section">
        <div className="container">
          <h2 className="schedule-category-title">Special Events & Workshops</h2>
          
          <div className="schedule-grid">
            <div className="schedule-card highlight">
              <div className="schedule-tag">Workshop</div>
              <h3>New Diagnosis Workshop</h3>
              <div className="schedule-date">March 15, 2026 • 10:00 AM-2:00 PM</div>
              <p>Essential information and support for families newly diagnosed with T1D</p>
            </div>

            <div className="schedule-card highlight">
              <div className="schedule-tag">Social</div>
              <h3>Spring Family Picnic</h3>
              <div className="schedule-date">April 26, 2026 • 11:00 AM-3:00 PM</div>
              <p>Community gathering with activities, food, and connection for all ages</p>
            </div>

            <div className="schedule-card highlight">
              <div className="schedule-tag">Workshop</div>
              <h3>Technology & T1D Workshop</h3>
              <div className="schedule-date">May 10, 2026 • 1:00-4:00 PM</div>
              <p>Learn about the latest diabetes technology, pumps, and CGMs</p>
            </div>

            <div className="schedule-card highlight">
              <div className="schedule-tag">Social</div>
              <h3>Fall Community Gathering</h3>
              <div className="schedule-date">October 18, 2026 • 2:00-6:00 PM</div>
              <p>Celebrate the season with camp friends and DYF community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="schedule-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Financial Assistance Available</h2>
            <p className="cta-text">
              We believe everyone should have access to our programs. We offer scholarships, payment plans, 
              pricing tiers, and crowdfunding options to make camp accessible to all families.
            </p>
            <a href="https://dyf.org/donate/" className="btn-primary">Learn About Scholarships</a>
          </div>
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
                <li><Link to="/#programs">Programs</Link></li>
                <li><Link to="/#events">Events Calendar</Link></li>
                <li><Link to="/schedule">2026 Schedule</Link></li>
                <li><a href="https://dyf.org/donate/">Donate</a></li>
                <li><Link to="/#contact">Contact Us</Link></li>
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

export default Schedule

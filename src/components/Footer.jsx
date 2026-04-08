import { Globe, ExternalLink, Mail } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  Platform: ['For Employers', 'For Candidates', 'How It Works', 'Services'],
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Support: ['Help Centre', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <a href="#" className="footer__logo">
                <span className="footer__logo-go">Go</span>
                <span className="footer__logo-fish">F!sh</span>
              </a>
              <p className="footer__tagline">
                AI-Enabled Recruitment.<br />
                Connect Globally, Hire Locally.
              </p>
              <div className="footer__socials">
                <a href="#" className="footer__social" aria-label="Website">
                  <Globe size={18} />
                </a>
                <a href="#" className="footer__social" aria-label="External">
                  <ExternalLink size={18} />
                </a>
                <a href="#" className="footer__social" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="footer__col">
                <h4 className="footer__col-title">{heading}</h4>
                <ul className="footer__col-links">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="footer__link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">
              &copy; {new Date().getFullYear()} Go F!sh. All rights reserved.
            </p>
            <p className="footer__made">
              Powering Australia's energy transition through global talent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

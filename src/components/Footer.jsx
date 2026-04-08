import { ExternalLink } from 'lucide-react';
import './Footer.css';

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
                Go F<span className="footer__logo-accent">!</span>sh
              </a>
              <p className="footer__tagline">
                Go F!sh is a platform that introduces the best talent to local employers in the energy transition and renewable energy sectors.
              </p>
              <div className="footer__socials">
                <a href="#" className="footer__social" aria-label="LinkedIn">
                  <ExternalLink size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Navigation</h4>
              <ul className="footer__col-links">
                <li><a href="#" className="footer__link">Home</a></li>
                <li><a href="#contact" className="footer__link">Request a Demo</a></li>
                <li><a href="#contact" className="footer__link">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Get In Touch</h4>
              <ul className="footer__col-links">
                <li><a href="mailto:hello@go-fish.com.au" className="footer__link">hello@go-fish.com.au</a></li>
                <li><span className="footer__link-text">L32, 152 St Georges Terrace, Perth, WA 6000</span></li>
                <li><a href="tel:+61416355859" className="footer__link">+61 416 355 859</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">
              &copy; 2024 GoFish LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

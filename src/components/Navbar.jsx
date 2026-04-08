import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Platform', href: '#platform' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          Go F<span className="navbar__logo-accent">!</span>sh
        </a>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__ctas">
          <a href="#contact" className="btn btn-ghost btn-sm">Contact</a>
          <a href="#contact" className="btn btn-primary btn-sm">Request Demo</a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ animationDelay: `${i * 60}ms` }}>
              <a href={link.href} className="navbar__mobile-link" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-accent btn-lg navbar__mobile-cta" onClick={handleLinkClick}>
          Request Demo
        </a>
      </div>
    </nav>
  );
}

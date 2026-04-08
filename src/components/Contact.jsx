import { useRef, useEffect, useState } from 'react';
import { Send, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => els?.forEach(el => observer.unobserve(el));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="container">
        <div className="contact__layout">
          <div className="contact__info reveal">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Ready to Transform<br />Your Hiring?</h2>
            <p className="contact__text">
              Whether you're an employer seeking skilled talent or a
              professional looking for your next opportunity in Australia's
              energy sector — we'd love to hear from you.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <span className="contact__detail-value">hello@go-fish.com.au</span>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">Sydney, Australia</span>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact__detail-label">Phone</span>
                  <span className="contact__detail-value">+61 2 8000 0000</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form reveal" onSubmit={handleSubmit} style={{ transitionDelay: '150ms' }}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">Full Name</label>
                <input className="contact__input" id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="email">Email</label>
                <input className="contact__input" id="email" type="email" placeholder="you@company.com" required />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="type">I am a...</label>
              <select className="contact__input contact__select" id="type" required>
                <option value="">Select one</option>
                <option value="employer">Employer seeking talent</option>
                <option value="candidate">Candidate seeking opportunities</option>
                <option value="partner">Potential partner</option>
                <option value="other">Other enquiry</option>
              </select>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">Message</label>
              <textarea
                className="contact__input contact__textarea"
                id="message"
                rows={5}
                placeholder="Tell us about your needs..."
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-accent btn-lg contact__submit ${submitted ? 'contact__submit--done' : ''}`}
            >
              {submitted ? (
                <>Sent! We'll be in touch.</>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

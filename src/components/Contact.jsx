import { useRef, useEffect, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
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
            <span className="section-label">Join the Waitlist</span>
            <h2 className="section-title">We're slowly onboarding new customers – get on the list</h2>
            <p className="contact__text">
              Engage with our platform today. We're bridging the gap between qualified talent and Australian businesses facing a skill shortage.
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
                  <span className="contact__detail-label">Office</span>
                  <span className="contact__detail-value">L32, 152 St Georges Terrace, Perth, WA 6000</span>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact__detail-label">Phone</span>
                  <span className="contact__detail-value">+61 416 355 859</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form reveal" onSubmit={handleSubmit} style={{ transitionDelay: '150ms' }}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">Full Name <span className="contact__req">*</span></label>
                <input className="contact__input" id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="email">Email <span className="contact__req">*</span></label>
                <input className="contact__input" id="email" type="email" placeholder="you@company.com.au" required />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="type">I am... <span className="contact__req">*</span></label>
              <select className="contact__input contact__select" id="type" required>
                <option value="">Select one</option>
                <option value="worker">I am looking for work</option>
                <option value="agency">I am an agency looking to place talent</option>
                <option value="company">I am a company looking to hire talent</option>
              </select>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">Message</label>
              <textarea
                className="contact__input contact__textarea"
                id="message"
                rows={5}
                placeholder="Tell us about your needs..."
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

import { useRef, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    initials: 'SB',
    name: 'Sarah Beaumont',
    role: 'Head of People',
    company: 'Acceler8',
    quote: 'Go F!sh made global hiring feel straightforward. We found our first international energy hire within two weeks of going live.',
  },
  {
    initials: 'MO',
    name: "Marcus O'Brien",
    role: 'Operations Manager',
    company: 'Aussieos',
    quote: 'The visa matching tool alone saved our HR team dozens of hours. This is exactly what the energy sector needs.',
  },
  {
    initials: 'JL',
    name: 'Jade Liu',
    role: 'Director',
    company: 'Personr',
    quote: 'Being able to set our fee and have Go F!sh handle business development completely changed our agency model.',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

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

  return (
    <section className="testimonials section" ref={sectionRef}>
      <div className="container">
        <div className="testimonials__header reveal">
          <span className="section-label">Early Customer Responses</span>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">
            Visionary startups and industry leaders have already trusted GoFish to build robust, highly skilled teams of global talent.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testimonials__card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="testimonials__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">{t.initials}</div>
                <div>
                  <div className="testimonials__name">{t.name}</div>
                  <div className="testimonials__role">{t.role} &middot; {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

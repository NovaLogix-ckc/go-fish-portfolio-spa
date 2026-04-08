import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import './Hero.css';

const features = [
  'AI-powered candidate lists',
  'Data-enriched talent mapping',
  'A system to enrich your strategy and recruitment outcomes',
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="hero__bubble"
            style={{
              left: `${8 + Math.random() * 84}%`,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 10}s`,
              width: `${4 + Math.random() * 12}px`,
              height: `${4 + Math.random() * 12}px`,
            }}
          />
        ))}
        <div className="hero__wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      <div className="hero__content container">
        <div className="hero__rating" style={{ animationDelay: '0s' }}>
          <div className="hero__stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span className="hero__rating-text">4.9 (390 reviews)</span>
        </div>

        <h1 className="hero__title">
          Hire Smarter<br />
          <span className="hero__title-accent">& Faster</span>
        </h1>

        <p className="hero__subtitle">
          Go F!sh is blending technology and industry experts to evolve how businesses find talent. Our technology brings employers and prospective candidates closer together, encourages transparency and democratises candidate representation.
        </p>

        <ul className="hero__features">
          {features.map(f => (
            <li key={f} className="hero__feature">
              <CheckCircle2 size={18} className="hero__feature-icon" />
              {f}
            </li>
          ))}
        </ul>

        <div className="hero__actions">
          <a href="#contact" className="btn btn-accent btn-lg">
            Request a Demo
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-outline-dark btn-lg">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

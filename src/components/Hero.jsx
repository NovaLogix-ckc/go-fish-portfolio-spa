import { ArrowRight, Globe, Zap } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Animated background */}
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__grid" />
        {/* Floating orbs */}
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        {/* Rising bubbles */}
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
        {/* Wave at bottom */}
        <div className="hero__wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      <div className="hero__content container">
        <div className="hero__badges">
          <span className="hero__badge">
            <Zap size={14} />
            AI-Enabled Recruitment
          </span>
          <span className="hero__badge hero__badge--alt">
            <Globe size={14} />
            Energy Sector Specialists
          </span>
        </div>

        <h1 className="hero__title">
          Connect <span className="hero__title-accent">Globally</span>,
          <br />
          Hire <span className="hero__title-warm">Locally</span>.
        </h1>

        <p className="hero__subtitle">
          Bridging the gap between world-class talent and Australian businesses
          powering the energy transition. Our platform matches skills to
          opportunities — seamlessly, intelligently, at scale.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn-accent btn-lg">
            Start Hiring
            <ArrowRight size={18} />
          </a>
          <a href="#how-it-works" className="btn btn-outline btn-lg">
            See How It Works
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">2M+</span>
            <span className="hero__stat-label">Skilled Professionals</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">150+</span>
            <span className="hero__stat-label">Countries Covered</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">98%</span>
            <span className="hero__stat-label">Placement Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}

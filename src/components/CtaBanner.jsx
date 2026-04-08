import { ArrowRight } from 'lucide-react';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__bg">
        <div className="cta-banner__orb cta-banner__orb--1" />
        <div className="cta-banner__orb cta-banner__orb--2" />
      </div>
      <div className="container cta-banner__inner">
        <h2 className="cta-banner__title">Connect Globally. Hire Locally.</h2>
        <p className="cta-banner__text">
          Transform your recruitment strategy in the energy and renewable energy industries by accessing a world of talent ready to work locally. Book a demo or get in touch to learn more.
        </p>
        <div className="cta-banner__actions">
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

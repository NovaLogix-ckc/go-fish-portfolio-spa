import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Rocket, Zap } from 'lucide-react';
import './WhyNow.css';

const cards = [
  {
    icon: TrendingUp,
    title: 'Business Growth',
    stat: '8.1',
    suffix: '%',
    body: 'Small businesses are booming: employment up 8.1%, profits up 22.4% in 2022-23. Rapid expansion is here.',
  },
  {
    icon: Users,
    title: 'Talent Shortage',
    stat: '56',
    suffix: '%',
    body: 'By Jan 2024, 56% of employers struggled to fill roles. Finding quality candidates is a common challenge.',
  },
  {
    icon: Rocket,
    title: 'Call to Action',
    stat: null,
    suffix: '',
    body: "Future-focused strategies are crucial. We're here to support businesses committed to positive change.",
  },
  {
    icon: Zap,
    title: 'Industry Transformation',
    stat: null,
    suffix: '',
    body: "Global industries are transforming, driving demand for skilled workers. Embrace tech to stay competitive. Go F!sh is your partner in securing top talent and fueling growth.",
  },
];

function AnimatedNum({ value, suffix, active }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active || value === null) return;
    const duration = 2000;
    const startTime = performance.now();
    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [active, value]);

  if (value === null) return null;

  const formatted = Number.isInteger(value)
    ? Math.round(display).toString()
    : display.toFixed(1);

  return <div className="whynow__stat">{formatted}{suffix}</div>;
}

export default function WhyNow() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(true);
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-now" className="whynow section" ref={sectionRef}>
      <div className="whynow__bg">
        <div className="whynow__bg-gradient" />
        <div className="whynow__bg-orb whynow__bg-orb--1" />
        <div className="whynow__bg-orb whynow__bg-orb--2" />
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="whynow__bg-particle"
            style={{
              left: `${10 + i * 16}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="whynow__header reveal">
          <span className="section-label" style={{ color: 'var(--green-light)' }}>Why Now</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Enhance your talent</h2>
        </div>

        <div className="whynow__grid">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="whynow__card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="whynow__card-glow" />
              <div className="whynow__card-icon">
                <card.icon size={20} />
              </div>
              <AnimatedNum value={card.stat ? parseFloat(card.stat) : null} suffix={card.suffix} active={active} />
              <h3 className="whynow__card-title">{card.title}</h3>
              <p className="whynow__card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

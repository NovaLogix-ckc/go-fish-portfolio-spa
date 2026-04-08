import { useRef, useEffect, useState } from 'react';
import './Stats.css';

const stats = [
  { value: 2000000, suffix: '+', label: 'Skilled Professionals', prefix: '' },
  { value: 150, suffix: '+', label: 'Countries Covered', prefix: '' },
  { value: 98, suffix: '%', label: 'Placement Success', prefix: '' },
  { value: 40, suffix: '%', label: 'Faster Hiring', prefix: '' },
];

function formatNumber(n) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(0)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return n.toString();
}

function AnimatedStat({ value, suffix, label, prefix, active }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * value);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [active, value]);

  return (
    <div className="stats__item">
      <span className="stats__value">
        {prefix}{formatNumber(display)}{suffix}
      </span>
      <span className="stats__label">{label}</span>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats section" ref={sectionRef}>
      {/* Animated background */}
      <div className="stats__bg">
        <div className="stats__bg-gradient" />
        <div className="stats__bg-orb stats__bg-orb--1" />
        <div className="stats__bg-orb stats__bg-orb--2" />
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="stats__bg-particle"
            style={{
              left: `${10 + i * 16}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="stats__grid">
          {stats.map(stat => (
            <AnimatedStat key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}

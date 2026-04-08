import { useRef, useEffect } from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';
import './About.css';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'Simplify global recruitment, making it seamless for Australian businesses to connect with highly qualified talent and power the energy transition.',
  },
  {
    icon: Users,
    title: 'Our Approach',
    text: 'Blending cutting-edge technology with deep industry expertise to evolve how businesses find, vet, and onboard talent — domestically and globally.',
  },
  {
    icon: Lightbulb,
    title: 'Our Vision',
    text: 'A future where skill shortages never slow progress. Where the right talent finds the right opportunity, regardless of borders.',
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => els?.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="about" className="about section" ref={sectionRef}>
      {/* Background decoration */}
      <div className="about__bg-shape" />

      <div className="container">
        <div className="about__header reveal">
          <span className="section-label">About Go F!sh</span>
          <h2 className="section-title">
            Bridging the Gap Between<br />
            Talent & Opportunity
          </h2>
          <p className="section-subtitle">
            Australia's energy sector faces a critical skill shortage.
            We're here to change that — connecting millions of qualified
            professionals worldwide with businesses driving the renewable revolution.
          </p>
        </div>

        <div className="about__pillars">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="about__pillar reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="about__pillar-icon">
                <pillar.icon size={24} />
              </div>
              <h3 className="about__pillar-title">{pillar.title}</h3>
              <p className="about__pillar-text">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

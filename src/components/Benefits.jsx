import { useRef, useEffect } from 'react';
import { CheckCircle2, Search, Globe, Shield } from 'lucide-react';
import './Benefits.css';

const groups = [
  {
    icon: Search,
    title: 'Effortless Recruitment',
    subtitle: 'Simplify your hiring process',
    items: [
      'Match individuals to your active jobs',
      'Use our platform to engage a recruitment strategy that works for you',
      'Manage the entire recruitment process online with the click of a button',
    ],
  },
  {
    icon: Globe,
    title: 'Access Global Talent',
    subtitle: 'Engage with Australian Qualified professionals worldwide',
    items: [
      'Access millions of skilled professionals globally',
      'Market your business to targeted global audiences',
      'Bring diverse perspectives and skills into your team',
    ],
  },
  {
    icon: Shield,
    title: 'Comprehensive Support',
    subtitle: 'Choose recruitment services that work for your business',
    items: [
      'We offer representation to candidates searching for full time and casual work',
      'Engage with an extensive network of Agency Partners, Visa Experts and payroll providers',
      'Auxiliary support – Accommodation, Car Rental, PPE Providers – you name it!',
    ],
  },
];

export default function Benefits() {
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
    <section id="benefits" className="benefits section" ref={sectionRef}>
      <div className="container">
        <div className="benefits__header reveal">
          <span className="section-label">Benefits</span>
          <h2 className="section-title">Why businesses choose Go F!sh</h2>
        </div>

        <div className="benefits__grid">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="benefits__card reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="benefits__card-icon">
                <g.icon size={24} />
              </div>
              <h3 className="benefits__card-title">{g.title}</h3>
              <p className="benefits__card-subtitle">{g.subtitle}</p>
              <ul className="benefits__list">
                {g.items.map(item => (
                  <li key={item} className="benefits__item">
                    <CheckCircle2 size={16} className="benefits__check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

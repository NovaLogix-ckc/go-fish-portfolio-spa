import { useRef, useEffect } from 'react';
import { Search, ShieldCheck, FileText, Plane, Home, Database } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Search,
    title: 'Candidate Matching',
    desc: 'AI-driven matching of candidates to roles based on skills, qualifications, interests, and preferences — ensuring the right fit every time.',
    accent: 'accent',
  },
  {
    icon: ShieldCheck,
    title: 'Visa & Compliance',
    desc: 'Data-driven matching of candidates to visa options, sourcing international talent with Australian qualifications and working rights.',
    accent: 'primary',
  },
  {
    icon: Database,
    title: 'Global Talent Pool',
    desc: 'Access millions of skilled professionals worldwide through our extensive database. Tap into diverse talent across every energy discipline.',
    accent: 'warm',
  },
  {
    icon: FileText,
    title: 'Payroll & Contracts',
    desc: 'Low-cost payroll partners manage employment contracts ensuring compliance with local laws, relieving the administrative burden from your team.',
    accent: 'accent',
  },
  {
    icon: Plane,
    title: 'Migration Support',
    desc: 'Match with migration agents using our platform to implement visa outcomes with assurances for individuals seeking working rights.',
    accent: 'primary',
  },
  {
    icon: Home,
    title: 'Settlement Services',
    desc: 'Comprehensive support for new hires — accommodation, transport, PPE, and more — helping them settle in quickly and comfortably.',
    accent: 'warm',
  },
];

export default function Services() {
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
    <section id="services" className="services section" ref={sectionRef}>
      <div className="services__bg-dots" />
      <div className="container">
        <div className="services__header reveal">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">End-to-End Recruitment,<br />Simplified</h2>
          <p className="section-subtitle">
            From sourcing and matching to compliance, migration, and settling in
            — we handle the complexities so you can focus on growth.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`services__card services__card--${service.accent} reveal`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`services__card-icon services__card-icon--${service.accent}`}>
                <service.icon size={22} />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
              <div className="services__card-shine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

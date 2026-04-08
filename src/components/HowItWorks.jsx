import { useRef, useEffect } from 'react';
import { UserPlus, Link2, Sparkles, Handshake } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Build Your Profile',
    desc: 'Create your company or candidate profile and connect your job postings or preferences to our platform.',
  },
  {
    num: '02',
    icon: Sparkles,
    title: 'Smart Matching',
    desc: 'Our AI strategically markets your roles to the ideal audience and matches candidates based on skills, qualifications, and fit.',
  },
  {
    num: '03',
    icon: Link2,
    title: 'Vet & Engage',
    desc: 'Candidates undergo thorough screening. Flag interest, conduct interviews, and shortlist the best talent — all within the platform.',
  },
  {
    num: '04',
    icon: Handshake,
    title: 'Hire & Onboard',
    desc: 'Extend offers, manage visas, contracts, and settlement support. We handle the complexities end to end.',
  },
];

export default function HowItWorks() {
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
    <section id="how-it-works" className="hiw section" ref={sectionRef}>
      <div className="container">
        <div className="hiw__header reveal">
          <span className="section-label">The Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            From profile to placement in four straightforward steps.
            We've stripped away the complexity of international recruitment.
          </p>
        </div>

        <div className="hiw__timeline">
          <div className="hiw__line" />
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="hiw__step reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="hiw__step-marker">
                <span className="hiw__step-num">{step.num}</span>
              </div>
              <div className="hiw__step-content">
                <div className="hiw__step-icon">
                  <step.icon size={20} />
                </div>
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

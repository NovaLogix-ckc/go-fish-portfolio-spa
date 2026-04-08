import { useRef, useEffect } from 'react';
import { Building2, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import './Audience.css';

const employerPerks = [
  'Strategic marketing to your ideal candidate audience',
  'AI-matched candidates by skills, qualifications & fit',
  'Visa pathway identification & compliance management',
  'Low-cost payroll & contract structuring partners',
  'Access to 2M+ skilled professionals worldwide',
];

const candidatePerks = [
  'Profile-based job matching across Australia',
  'Visa pathway matching & migration agent access',
  'Thorough screening that showcases your strengths',
  'Settlement support — accommodation, transport & more',
  'Direct engagement with energy sector employers',
];

export default function Audience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => els?.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section className="audience section" ref={sectionRef}>
      <div className="container">
        {/* Employers */}
        <div id="employers" className="audience__block reveal">
          <div className="audience__block-visual audience__block-visual--emp">
            <div className="audience__icon-ring">
              <Building2 size={32} />
            </div>
            <div className="audience__float-tag audience__float-tag--1">Renewable Energy</div>
            <div className="audience__float-tag audience__float-tag--2">Mining & Resources</div>
            <div className="audience__float-tag audience__float-tag--3">Infrastructure</div>
          </div>
          <div className="audience__block-body">
            <span className="section-label">For Employers</span>
            <h2 className="section-title">Find the Talent Your<br />Business Needs</h2>
            <p className="audience__text">
              Build your profile, connect your roles, and let our platform
              handle the rest. We strategically market your business to
              the ideal candidate audience and efficiently match talent to
              your specific requirements.
            </p>
            <ul className="audience__perks">
              {employerPerks.map(perk => (
                <li key={perk} className="audience__perk">
                  <CheckCircle2 size={18} className="audience__perk-icon" />
                  {perk}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary btn-lg">
              Start Hiring <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Candidates */}
        <div id="candidates" className="audience__block audience__block--reverse reveal">
          <div className="audience__block-visual audience__block-visual--cand">
            <div className="audience__icon-ring audience__icon-ring--accent">
              <User size={32} />
            </div>
            <div className="audience__float-tag audience__float-tag--4">Electrical Engineers</div>
            <div className="audience__float-tag audience__float-tag--5">Project Managers</div>
            <div className="audience__float-tag audience__float-tag--6">Solar Technicians</div>
          </div>
          <div className="audience__block-body">
            <span className="section-label">For Candidates</span>
            <h2 className="section-title">Your Skills Deserve<br />the Right Opportunity</h2>
            <p className="audience__text">
              Build your profile and let our platform connect you with
              Australian employers actively seeking your expertise. From
              job matching to visa support and settlement — we've got
              your back every step of the way.
            </p>
            <ul className="audience__perks">
              {candidatePerks.map(perk => (
                <li key={perk} className="audience__perk">
                  <CheckCircle2 size={18} className="audience__perk-icon audience__perk-icon--accent" />
                  {perk}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-accent btn-lg">
              Find Opportunities <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

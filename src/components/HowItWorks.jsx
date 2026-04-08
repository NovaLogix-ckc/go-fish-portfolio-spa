import { useRef, useEffect } from 'react';
import { UserPlus, Briefcase, Sparkles, Handshake } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    num: '1',
    icon: UserPlus,
    title: 'Sign Up & Get Onboarded',
    desc: 'Get a sneak peek at how data-enriched recruitment can support your strategy. While our product is in development, join our waitlist as a Company or Partner, complete the onboarding process & express your interest.',
  },
  {
    num: '2',
    icon: Briefcase,
    title: 'Build Your Profile',
    desc: "Get started! Create a business profile and connect with our team today. Agency Partners? If you're interested in participating in a platform with agency-vetted/pre-qualified roles, we'd like to speak with you.",
  },
  {
    num: '3',
    icon: Sparkles,
    title: 'Get Matching',
    desc: "We've been successfully testing and implementing data-enriched recruitment strategies with local employers to find the right profiles. Once on platform, we'll reach out to get started.",
  },
  {
    num: '4',
    icon: Handshake,
    title: 'Hire & Integration',
    desc: "While our platform is in development, we are still here to support. Engage with our services to source the right candidates and Agency partners. Once you've built your profile and connected us to your job posting, we'll handle the rest.",
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
          <span className="section-label">How It Works</span>
          <h2 className="section-title">From match to hiring – play your best hand</h2>
          <p className="section-subtitle">
            Go F!sh connects to your existing job postings. If your postings aren't generating results, you can engage with our platform and set your terms. Once engaged, our AI technology will generate a list of suitable candidates and invite agency partners to join the search, ensuring no duplication and tracking applications to avoid over-representation. You select the candidates you want to pursue, and Go F!sh or our agency partners will proactively engage these prospects to generate interest.
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

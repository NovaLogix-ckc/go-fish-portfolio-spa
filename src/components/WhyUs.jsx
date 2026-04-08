import { useRef, useEffect } from 'react';
import { Link2, Target, Users, MessageCircle, Globe, Zap } from 'lucide-react';
import './WhyUs.css';

const features = [
  {
    icon: Link2,
    title: 'Effortless Integration',
    desc: 'Connect seamlessly to your job postings. If current methods fail, engage with Go F!sh and set your terms.',
  },
  {
    icon: Target,
    title: 'Smart Candidate Matching',
    desc: "Our AI tech finds the right candidates for you. Can't find local? We go global.",
  },
  {
    icon: Users,
    title: 'Collaborative Search',
    desc: 'We partner with trusted agencies, avoiding candidate duplication and tracking applications to prevent over-representation.',
  },
  {
    icon: MessageCircle,
    title: 'Active Engagement',
    desc: "Choose candidates you want to engage, and we'll proactively reach out with our agency partners.",
  },
  {
    icon: Globe,
    title: 'Visa Engagement Tool',
    desc: 'Effortlessly connect with international candidates. Our platform assists with visa matching and sponsor engagement.',
  },
  {
    icon: Zap,
    title: 'Efficiency and Results',
    desc: 'Streamline your hiring process and secure top talent with minimal effort. Go F!sh delivers results and fuels your growth.',
  },
];

export default function WhyUs() {
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
    <section id="why-us" className="whyus section" ref={sectionRef}>
      <div className="container">
        <div className="whyus__header reveal">
          <span className="section-label">Why Us</span>
          <h2 className="section-title">Why Go F!sh</h2>
        </div>

        <div className="whyus__grid">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="whyus__card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="whyus__card-icon">
                <f.icon size={22} />
              </div>
              <h3 className="whyus__card-title">{f.title}</h3>
              <p className="whyus__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

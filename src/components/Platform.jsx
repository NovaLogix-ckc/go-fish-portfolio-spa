import { useRef, useEffect } from 'react';
import { Building2, Users, Handshake, Globe, Database, FileText, ShieldCheck, DollarSign, Home } from 'lucide-react';
import './Platform.css';

const features = [
  {
    icon: Building2,
    title: 'Business Profile',
    desc: 'We offer a system that strategically markets your business to the ideal candidate audience, ensuring maximum visibility and engagement.',
  },
  {
    icon: Users,
    title: 'Job Matching',
    desc: 'Our platform efficiently matches candidates to jobs based on their skills and qualifications, interests & preferences.',
  },
  {
    icon: Handshake,
    title: 'Agency Engagement',
    desc: 'We encourage local agencies with the right networks to participate in your searches, assisting you in prospecting the best partnerships and cost structures to optimize engagement options for your business.',
  },
  {
    icon: Globe,
    title: 'Visa Matching',
    desc: 'Leveraging data-driven insights, we match candidates to potential visa options and source international candidates with Australian qualifications and working rights, ensuring seamless recruitment and compliance.',
  },
  {
    icon: Database,
    title: 'Global Talent Access',
    desc: 'Our extensive database grants you access to millions of skilled professionals worldwide, enabling you to tap into a diverse talent pool and find the best candidates for your needs.',
  },
  {
    icon: FileText,
    title: 'Contract Management',
    desc: 'Engage with low-cost payroll partners who manage the structuring of employment contracts to ensure compliance with local laws and regulations. This service relieves the administrative burden from your shoulders, enabling you to focus on your core operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Working Rights',
    desc: 'Match with migration agents using the same tool to implement visa outcomes. Our platform provides assurances to individuals seeking necessary working rights. If you are considering sponsorship, allow us to simplify the process for you.',
  },
  {
    icon: DollarSign,
    title: 'Payroll Compliance',
    desc: 'Our team manages payroll compliance for new arrivals, ensuring they are paid correctly and on time. This includes handling taxes, benefits, and other statutory requirements, simplifying your payroll processes.',
  },
  {
    icon: Home,
    title: 'Support Services',
    desc: 'We collaborate with partners to provide comprehensive support services, such as assistance with finding rentals, car hire, and more. These services help new hires settle in quickly and comfortably, making their transition smoother.',
  },
];

export default function Platform() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => els?.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="platform" className="platform section" ref={sectionRef}>
      <div className="platform__dots" />
      <div className="container">
        <div className="platform__header reveal">
          <span className="section-label">Our Platform</span>
          <h2 className="section-title">The end-to-end solution for solving skills shortages & enhancing local talent pools</h2>
          <p className="section-subtitle">
            Discover our innovative platform that leverages advanced technology to streamline the recruitment process, ensuring you find the right skilled professionals quickly and efficiently.
          </p>
        </div>

        <div className="platform__grid">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="platform__card reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="platform__card-icon">
                <f.icon size={22} />
              </div>
              <h3 className="platform__card-title">{f.title}</h3>
              <p className="platform__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

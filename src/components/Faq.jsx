import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './Faq.css';

const faqs = [
  {
    q: 'How does Go F!sh simplify international hiring?',
    a: 'The Go F!sh platform streamlines the entire international recruitment process by using advanced software to source Australian-qualified international candidates, match international prospects to visas, and offers access to support services upon their arrival.',
  },
  {
    q: 'What makes you different from other recruitment services?',
    a: "We believe technology can be used to connect people, as demonstrated by many other matchmaking services. Beyond that, it can be used to track applications, avoid over-representation, duplication, and many other challenges that customers may face when entering the market. We believe in creating a competitive ecosystem that delivers the best outcomes for both customers and job seekers. We believe that every role can be filled with the right information and strategy.",
  },
  {
    q: 'As a recruitment partner, why should I share my candidates on the platform?',
    a: "We handle business development for you. No more cold calling or hoping to reach the right hiring manager, no more preemptively negotiating terms in fear of losing the candidate to another opportunity, and no more forward marketing candidates to unspecified roles. The rules are straightforward: if the job is on Go F!sh, our customers are accepting agency submissions. Set your fee, and we'll take care of the rest.",
  },
  {
    q: 'What support does Go F!sh offer to new hires?',
    a: 'Our partners provide comprehensive support services for new hires, including assistance with rentals, car hire, and other necessities to ensure a smooth transition and quick integration into your team.',
  },
  {
    q: 'How do I get started?',
    a: "To get started, sign up for our waitlist as either a company or an individual. Once onboarded, companies can build a profile on our platform and connect their advertised roles. Our system will automatically match you to the most relevant prospective hires. Select from Go F!sh talent profiles, flag your interest, conduct interviews, and extend job offers. Our software will guide you through each step.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`faq__item ${open ? 'faq__item--open' : ''}`}>
      <button className="faq__trigger" onClick={() => setOpen(!open)}>
        <span className="faq__question">{q}</span>
        <ChevronDown size={20} className="faq__chevron" />
      </button>
      <div
        className="faq__answer-wrap"
        style={{ maxHeight: open ? contentRef.current?.scrollHeight + 'px' : '0px' }}
      >
        <p className="faq__answer" ref={contentRef}>{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
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
    <section className="faq section" ref={sectionRef}>
      <div className="container">
        <div className="faq__header reveal">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Have questions about how Go F!sh can transform your hiring process? We've got you covered. If you need more information, feel free to reach out to our customer success team.
          </p>
        </div>

        <div className="faq__list reveal" style={{ transitionDelay: '150ms' }}>
          {faqs.map(faq => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

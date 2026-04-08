import { useRef, useEffect } from 'react';
import './About.css';

export default function About() {
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
    <section id="about" className="about section" ref={sectionRef}>
      <div className="about__bg-shape" />
      <div className="container">
        <div className="about__inner reveal">
          <span className="section-label">About Go F!sh</span>
          <h2 className="section-title">The Talent Solution for Australia's Energy Future</h2>

          <div className="about__body">
            <p>
              The future of Australia's workforce depends on bridging the gap between Australian employers and suitably qualified candidates, especially in the energy transition and renewable energy sectors where Australia is facing a skill shortage. Inflation in the cost of labor is increasing, upsetting the feasibility of much-needed change amidst record low unemployment and growing demand for energy security and transition. At Go F!sh, we recognize the pressing need for skilled professionals and the challenges local businesses can face in finding the right talent domestically. We believe technology can help.
            </p>
            <p>
              Our mission is to simplify the hiring process, making it seamless for companies to connect with highly qualified talent. Our platform ensures that businesses can thrive by discovering, attracting, and recruiting the best professionals wherever they reside.
            </p>
            <p>
              Go F!sh leverages cutting-edge technology to match skilled individuals to job opportunities, encouraging collaboration and engagement at a domestic and global scale. Our customer-centric approach brings candidates and employers closer together, and our collaborative approach ensures businesses and candidates are supported at every step of the way, from initial matching to job offer.
            </p>
            <p>
              Our commitment to enhancing talent pools and our unwavering commitment to using technology for good helps companies expand talent pools, save time, reduce costs, and focus on what they do best—driving innovation and growth in the energy sector. <strong>Join us in building a brighter future with a diverse and talented workforce.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

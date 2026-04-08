import './Partners.css';

const partners = ['Acceler8', 'Personr', 'Aussieos'];

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <span className="partners__label">Working with industry leading partners</span>
        <div className="partners__grid">
          {partners.map(name => (
            <div key={name} className="partners__logo">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

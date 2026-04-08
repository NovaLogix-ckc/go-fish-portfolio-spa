import { useState } from 'react';
import { X } from 'lucide-react';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement">
      <div className="announcement__inner container">
        <p className="announcement__text">
          <span className="announcement__badge">NEW</span>
          We've launched our beta platform and are onboarding users.{' '}
          <a href="#contact" className="announcement__link">Find out more.</a>
        </p>
        <button
          className="announcement__close"
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

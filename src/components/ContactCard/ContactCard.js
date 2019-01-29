import React from 'react';

import contactCardStyles from './ContactCard.module.css';

function Icon({ title, href, label, icon }) {
  return (
    <a
      class="contact-card__icon-container__icon"
      title={title}
      href={href}
      target="_blank"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default function ContactCard() {
  return (
    <div className={contactCardStyles.container}>
      <div className={contactCardStyles.container__icons}>
      </div>
      <div className={contactCardStyles.container__resume}>
      </div>
    </div>
  );
}

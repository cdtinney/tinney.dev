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

function ContactCard({ data }) {
  return (
    <div className={contactCardStyles.container}>
      <div className={contactCardStyles.container__icons}>
      </div>
      <div className={contactCardStyles.container__resume}>
      </div>
    </div>
  );
}

export default function ContactCardWithData() {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            site {
              siteMetadata {
                contact {
                  name,
                  email,
                  displayedEmail
                },
                social {
                  gitHub,
                  linkedIn,
                  spotify,
                  goodreads
                }
              }
            }
          }
        `
      }
      render={ContactCard}
    />
  );
}

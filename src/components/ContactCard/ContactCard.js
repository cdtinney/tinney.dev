import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
      <div className={contactCardStyles.container__email}>
        <i
          className="contact-card__email__icon far fa-envelope"
          aria-hidden="true"
          aria-title="E-mail address"
        >
        </i>
        <a
          href="mailto:{{ site.email }}"
        >
          { data.site.siteMetadata.contact.displayedEmail }
        </a>
      </div>
      <div className={contactCardStyles.container__resume}>
        <a
          href={data.site.siteMetadata.contact.resumeUrl}
        >
          resume
        </a>
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
                  displayedEmail,
                  resumeUrl,
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
      render={data => <ContactCard data={data} />}
    />
  );
}

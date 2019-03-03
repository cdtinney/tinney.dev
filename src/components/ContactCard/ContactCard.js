import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, fa500px } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { StaticQuery, graphql } from 'gatsby';

import classes from './ContactCard.module.css';

function ContactCard({ data }) {
  return (
    <div className={classes.container}>
      <div className={classes.container__social}>
        <a
          title={`${data.site.siteMetadata.social.github} on GitHub`}
          href={`https://github.com/${data.site.siteMetadata.social.github}`}
          aria-label="GitHub profile"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={classes.icon}
            size="lg"
          />
        </a>
        <a
          title={`${data.site.siteMetadata.social.linkedin} on LinkedIn`}
          href={`https://linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
          aria-label="LinkedIn profile"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={classes.icon}
            size="lg"
          />
        </a>
        <a
          title={`${data.site.siteMetadata.social.fiveHundredPx} on 500px`}
          href={`https://500px.com/${data.site.siteMetadata.social.fiveHundredPx}`}
          aria-label="500px profile"
        >
          <FontAwesomeIcon
            icon={fa500px}
            className={classes.icon}
            size="lg"
          />
        </a>
      </div>
      <div className={classes.container__email}>
        <a
          href={`mailto:${data.site.siteMetadata.contact.email}`}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${classes.icon} ${classes.email__icon}`}
          />
          { data.site.siteMetadata.contact.displayedEmail }
        </a>
      </div>
      <a
        className={classes.container__resume}
        href={data.site.siteMetadata.contact.resumeUrl}
      >
        {'resume'}
      </a>
    </div>
  );
}

ContactCard.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        contact: PropTypes.shape({
          email: PropTypes.string.isRequired,
          displayedEmail: PropTypes.string.isRequired,
          resumeUrl: PropTypes.string.isRequired,
        }).isRequired,
        social: PropTypes.shape({
          github: PropTypes.string.isRequired,
          linkedin: PropTypes.string.isRequired,
          fiveHundredPx: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

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
                  github,
                  linkedin,
                  fiveHundredPx,
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

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, fa500px } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Anchor from '../Anchor';
import AnchorButton from '../AnchorButton';
import classes from './ContactCard.module.css';

function ContactCard({
  data = {},
}) {
  const {
    site: {
      siteMetadata: {
        social = {},
        contact = {},
      } = {},
    } = {},
  } = data;

  return (
    <div className={classes.container}>
      <div className={classes.container__social}>
        <Anchor
          title={`${social.github} on GitHub`}
          href={`https://github.com/${social.github}`}
          ariaLabel="GitHub profile"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={classes.icon}
            size="lg"
          />
        </Anchor>
        <Anchor
          title={`${social.linkedin} on LinkedIn`}
          href={`https://linkedin.com/in/${social.linkedin}`}
          aria-label="LinkedIn profile"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={classes.icon}
            size="lg"
          />
        </Anchor>
        <Anchor
          title={`${social.fiveHundredPx} on 500px`}
          href={`https://500px.com/${social.fiveHundredPx}`}
          aria-label="500px profile"
        >
          <FontAwesomeIcon
            icon={fa500px}
            className={classes.icon}
            size="lg"
          />
        </Anchor>
      </div>
      <div className={classes.container__email}>
        <Anchor
          href={`mailto:${contact.email}`}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${classes.icon} ${classes.email__icon}`}
          />
          { contact.displayedEmail }
        </Anchor>
      </div>
      <AnchorButton
        href={contact.resumeUrl}
        text="resume"
        color="secondary"
        className={`${classes.container__resume}`}
      />
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

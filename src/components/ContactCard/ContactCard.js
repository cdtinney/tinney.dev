import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Theme from '../../proptypes/Theme';
import withTheme from '../../hocs/withTheme';
import classNames from '../../utils/classNames';

import Anchor from '../Anchor';
import AnchorButton from '../AnchorButton';
import classes from './ContactCard.module.css';

function ContactCard({
  theme,
  contact = {},
  social = {},
}) {
  if (!contact.email || !social.github) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div className={classes.container__social}>
        <Anchor
          title={`${social.github} on GitHub`}
          href={`https://github.com/${social.github}`}
          external
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
          external
          aria-label="LinkedIn profile"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={classes.icon}
            size="lg"
          />
        </Anchor>
      </div>
      <div className={classes.container__email}>
        <Anchor
          href={`mailto:${contact.email}`}
          external
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
        external
        text="resume"
        color="secondary"
        className={classNames(classes.container__resume, theme.button)}
      />
    </div>
  );
}

ContactCard.propTypes = {
  theme: Theme.isRequired,
  contact: PropTypes.shape({
    email: PropTypes.string,
    displayedEmail: PropTypes.string,
    resumeUrl: PropTypes.string,
  }),
  social: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

export default withTheme(ContactCard);

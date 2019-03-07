import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../styles/theme.module.css';
import classes from './ProjectCard.module.css';

function ProjectCard({
  name,
  shortDescription,
  techStack,
  homepageUrl,
  gitHubUrl,
}) {
  return (
    <div
      className={`
        ${classes.card}
        ${theme.card}
        ${theme.shadow}
      `}
    >
      <h2 className={`${classes.name} ${theme.primary}`}>
        {name}
      </h2>
      <p className={classes.shortDescription}>
        {shortDescription}
      </p>
      <p className={classes.techStack}>
        {techStack.join(', ')}
      </p>
      <div className={classes.links}>
        <a className={classes.link} href={homepageUrl}>
          {'Homepage'}
        </a>
        <a className={classes.link} href={gitHubUrl}>
          {'Code'}
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  homepageUrl: PropTypes.string.isRequired,
  gitHubUrl: PropTypes.string.isRequired,
};

export default ProjectCard;

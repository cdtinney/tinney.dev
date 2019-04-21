import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';

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
      className={
        classNames(
          classes.card,
          theme.button,
        )
      }
    >
      <a href={homepageUrl}>
        <h2 className={classNames(classes.name, theme.primary)}>
          {name}
        </h2>
      </a>
      <p className={classes.shortDescription}>
        {shortDescription}
      </p>
      <p className={classes.techStack}>
        {techStack.join(', ')}
      </p>
      <div className={classes.links}>
        <a className={classes.link} href={homepageUrl}>
          homepage
        </a>
        <a className={classes.link} href={gitHubUrl}>
          code
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

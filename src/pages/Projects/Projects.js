import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../../layouts/PageLayout';
import ProjectCard from '../../components/ProjectCard';
import classes from './Projects.module.css';

function Projects({ data = {} }) {
  const {
    allProjectsJson: {
      edges: projects = [],
    } = {},
    site: {
      siteMetadata: {
        title,
      },
    },
  } = data;

  return (
    <PageLayout
      title="projects"
      titleHref="/projects"
      pageTitle={`${title} - projects`}
      pageDescription="Personal projects."
    >
      <section className={classes.projects}>
        {projects.map(({ node }) => <ProjectCard key={node.id} {...node} />)}
      </section>
    </PageLayout>
  );
}

Projects.propTypes = {
  data: PropTypes.shape({
    allProjectsJson: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          name: PropTypes.string.isRequired,
          shortDescription: PropTypes.string.isRequired,
          techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
          homepageUrl: PropTypes.string.isRequired,
          gitHubUrl: PropTypes.string.isRequired,
        }).isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Projects;

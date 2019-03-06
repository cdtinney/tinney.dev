/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../../layouts/PageLayout';

export default function About({
  data = {},
}) {
  const {
    allMarkdownRemark: {
      edges = [],
    } = {},
    site: {
      siteMetadata: {
        title,
      },
    },
  } = data;

  const aboutHtml = edges.length ? edges[0].node.html : null;
  return (
    <PageLayout
      pageTitle={`${title} - about`}
      pageDescription="A personal profile"
      title="about"
      titleHref="/about"
    >
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: aboutHtml }}
        />
      </div>
    </PageLayout>
  );
}

About.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }).isRequired,
      })).isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

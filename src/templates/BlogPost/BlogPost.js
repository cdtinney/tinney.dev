/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import BlogLayout from '../../layouts/BlogLayout';

import classes from './BlogPost.module.css';

export default function BlogPost({ data }) {
  const {
    markdownRemark: post,
  } = data;

  const {
    frontmatter: {
      title,
      date,
    },
    excerpt,
  } = post;

  const pageDescription = excerpt;
  const pageTitle = `blog - ${title}`;

  return (
    <BlogLayout>
      <React.Fragment>
        <Helmet>
          <meta name="description" content={pageDescription} />
          <title>{pageTitle}</title>
        </Helmet>
        <article>
          <header>
            <h1 className={classes.title}>
              {title}
            </h1>
            <p className={classes.date}>
              {date}
            </p>
          </header>
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </React.Fragment>
    </BlogLayout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      excerpt(pruneLength: 155)
    }
  }
`;

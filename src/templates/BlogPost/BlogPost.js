/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import BlogLayout from '../../layouts/BlogLayout';

import classes from './BlogPost.module.css';

export default function BlogPost({ data, pageContext }) {
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

  const {
    prevPost,
    nextPost,
  } = pageContext;

  const pageDescription = excerpt;
  const pageTitle = `blog - ${title}`;

  return (
    <BlogLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
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
      <footer className={classes.footer}>
        { prevPost
          && (
            <Link to={prevPost.postPath} className={classes.footerPageLink}>
              {`← ${prevPost.title}`}
            </Link>
          )
        }
        { nextPost
          && (
            <Link to={nextPost.postPath} className={classes.footerPageLink}>
              {`${nextPost.title} →`}
            </Link>
          )
        }
      </footer>
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
  pageContext: PropTypes.shape({
    prevPost: PropTypes.shape({
      title: PropTypes.string.isRequired,
      postPath: PropTypes.string.isRequired,
    }),
    nextPost: PropTypes.shape({
      title: PropTypes.string.isRequired,
      postPath: PropTypes.string.isRequired,
    }),
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
      excerpt
    }
  }
`;

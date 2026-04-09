import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../PageLayout';

import classes from './BlogLayout.module.css';

function BlogLayout({ pageTitle, pageDescription, siteTitle, children }) {
  return (
    <PageLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      siteTitle={siteTitle}
      title="blog"
      titleHref="/blog"
    >
      <main className={classes.container}>
        { children }
      </main>
    </PageLayout>
  );
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default BlogLayout;

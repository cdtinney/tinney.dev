import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../PageLayout';

import classes from './BlogLayout.module.css';

function BlogLayout({ children }) {
  return (
    <PageLayout title="blog" titleHref="/blog">
      <main className={classes.container}>
        { children }
      </main>
    </PageLayout>
  );
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlogLayout;

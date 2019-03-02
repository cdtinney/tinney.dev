import React from 'react';

import PageLayout from '../../layouts/PageLayout';

import classes from './PageNotFound.module.css';

export default function PageNotFound() {
  const route = typeof window === 'undefined'
    ? ''
    : window.location.pathname.replace('/', '');
  const pageTitle = '404'
  const pageDescription = 'This page is missing.';

  return (
    <PageLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      title={`'${route}' is not accessible`}
    >
      <div className={classes.container}>
        <span title="Just kidding. This is a 404 page.">
          {'This content is not available in your country.'}
        </span>
      </div>
    </PageLayout>
  );
}

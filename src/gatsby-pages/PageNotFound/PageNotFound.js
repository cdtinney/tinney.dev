import React from 'react';

import PageLayout from '../../layouts/PageLayout';

import classes from './PageNotFound.module.css';

export default function PageNotFound() {
  const route = typeof window === 'undefined'
    ? ''
    : window.location.pathname.replace('/', '');
  const pageTitle = '404';
  const pageDescription = 'This page is missing.';

  return (
    <PageLayout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      title="404"
    >
      <div className={classes.container}>
        <h1 className={classes.route}>
          {route}
        </h1>
        <h2>
          This content is not available in your country.
        </h2>
        <div className={classes.truth}>
          Just kidding. This page does not exist.
        </div>
      </div>
    </PageLayout>
  );
}

import React from 'react';
import Helmet from 'react-helmet';

import PageLayout from '../../layouts/PageLayout';

import classes from './PageNotFound.module.css';

export default function PageNotFound() {
  const route = typeof window === 'undefined'
    ? ''
    : window.location.pathname.replace('/', '');

  return (
    <PageLayout title={`'${route}' is not accessible`}>
      <Helmet>
        <title>colin tinney - 404</title>
      </Helmet>
      <div className={classes.container}>
        <span title="Just kidding. This is a 404 page.">
          {'This content is not available in your country.'}
        </span>
      </div>
    </PageLayout>
  );
}

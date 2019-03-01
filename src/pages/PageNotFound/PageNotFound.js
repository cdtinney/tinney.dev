import React from 'react';

import PageLayout from '../../layouts/PageLayout';

import classes from './PageNotFound.module.css';

export default function PageNotFound() {
  // `window` will not be defined in builds
  const windowGlobal = typeof window !== 'undefined' && window;
  const route = windowGlobal ? windowGlobal.location.pathname.replace('/', '') : '';
  return (
    <PageLayout title={`'${route}' is not accessible`}>
      <div className={classes.container}>
        <span title="Just kidding. This is a 404 page.">
          This content is not available in your country.
        </span>
      </div>
    </PageLayout>
  );
}

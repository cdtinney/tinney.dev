import React from 'react';

import PageLayout from '../layouts/PageLayout';

import pageNotFoundStyles from './404.module.css';

export default function PageNotFound() {
  const route = window.location.pathname.replace('/', '');
  return (
    <PageLayout title={`'${route}' is not accessible`}>
      <div className={pageNotFoundStyles.container}>
        <span title="Just kidding. This is a 404 page.">
          This content is not available in your country.
        </span>
      </div>
    </PageLayout>
  );
}

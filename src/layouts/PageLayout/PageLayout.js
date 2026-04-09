import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from '../DefaultLayout';
import PageHeader from '../../components/PageHeader';

import classes from './PageLayout.module.css';

function PageLayout({
  pageTitle,
  pageDescription,
  siteTitle,
  title,
  titleHref,
  children,
}) {
  return (
    <DefaultLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className={classes.container}>
        <PageHeader
          title={title}
          titleHref={titleHref}
          siteTitle={siteTitle}
        />
        { children }
      </div>
    </DefaultLayout>
  );
}

PageLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
  siteTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleHref: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageLayout.defaultProps = {
  titleHref: null,
  siteTitle: '',
};

export default PageLayout;

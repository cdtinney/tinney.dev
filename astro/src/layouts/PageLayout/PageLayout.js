import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from '../DefaultLayout';
import PageHeader from '../../components/PageHeader';

import classes from './PageLayout.module.css';

function PageLayout({
  pageTitle,
  pageDescription,
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
        />
        { children }
      </div>
    </DefaultLayout>
  );
}

PageLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleHref: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageLayout.defaultProps = {
  titleHref: null,
};

export default PageLayout;

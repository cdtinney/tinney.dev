import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ScrollUp from '../../components/ScrollUp';

import classes from './DefaultLayout.module.css';

function DefaultLayout({ pageTitle, pageDescription, children }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>
      <main className={classes.content} aria-label="Content">
        { children }
      </main>
      <ScrollUp />
    </React.Fragment>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
};

export default DefaultLayout;

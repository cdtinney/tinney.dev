import React from 'react';
import PropTypes from 'prop-types';

import classes from './DefaultLayout.module.css';

function DefaultLayout({ children }) {
  return (
    <main className={classes.content} aria-label="Content">
      { children }
    </main>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;

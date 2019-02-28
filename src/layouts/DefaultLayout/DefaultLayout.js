import React from 'react';
import PropTypes from 'prop-types';

import defaultLayoutStyles from './DefaultLayout.module.css';

export default function DefaultLayout({ children }) {
  return (
    <main className={defaultLayoutStyles.content} aria-label="Content">
      { children }
    </main>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

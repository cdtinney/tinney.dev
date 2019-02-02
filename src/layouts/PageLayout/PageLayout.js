import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from '../DefaultLayout';
import Brand from '../../components/Brand';

import pageLayoutStyles from './PageLayout.module.css';

export default function PageLayout({ title, children }) {
  return (
    <DefaultLayout>
      <div className={pageLayoutStyles.container}>
        <header className={pageLayoutStyles.header}>
          <span>
            <Brand />
          </span>
          <span className={pageLayoutStyles.separator}>
            /
          </span>
          <h3>
            { title }
          </h3>
        </header>
        { children }
      </div>
    </DefaultLayout>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

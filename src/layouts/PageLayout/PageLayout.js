import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from '../DefaultLayout';
import Brand from '../../components/Brand';

import classes from './PageLayout.module.css';

function PageLayout({ title, titleHref, children }) {
  return (
    <DefaultLayout>
      <div className={classes.container}>
        <header className={classes.header}>
          <span>
            <Brand underline={false} />
          </span>
          <span className={classes.separator}>
            {'/'}
          </span>
          <h3 className={classes.title}>
            {titleHref
              ? (
                <a href={titleHref}>
                  { title }
                </a>
              )
              : title
            }
          </h3>
        </header>
        { children }
      </div>
    </DefaultLayout>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  titleHref: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageLayout.defaultProps = {
  titleHref: null,
};

export default PageLayout;

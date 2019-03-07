import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from '../DefaultLayout';
import Brand from '../../components/Brand';
import Anchor from '../../components/Anchor';

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
        <header className={classes.header}>
          <span>
            <Brand underline={false} />
          </span>
          <span className={classes.titleContainer}>
            <span className={classes.separator}>
              {'/'}
            </span>
            <h3 className={classes.title}>
              {titleHref
                ? (
                  <Anchor className={classes.titleLink} href={titleHref}>
                    { title }
                  </Anchor>
                )
                : title
              }
            </h3>
          </span>
        </header>
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

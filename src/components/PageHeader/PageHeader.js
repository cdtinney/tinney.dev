import React from 'react';
import PropTypes from 'prop-types';

import Brand from '../Brand';
import Anchor from '../Anchor';

import classes from './PageHeader.module.css';

function PageHeader({
  title,
  titleHref,
}) {
  return (
    <header className={classes.header}>
      <span className={classes.brandContainer}>
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
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  titleHref: PropTypes.string,
};

PageHeader.defaultProps = {
  titleHref: null,
};

export default PageHeader;

import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';
import Anchor from '../Anchor';

import classes from './Brand.module.css';

function Brand({
  className,
  underline,
  large,
  title,
}) {
  return (
    <h1
      className={classNames(classes.header, {
        [classes.headerUnderline]: underline,
        [classes.headerLarge]: large,
      }, className)}
    >
      <Anchor
        href="/"
        className={classes.link}
      >
        {title}
      </Anchor>
    </h1>
  );
}

Brand.propTypes = {
  className: PropTypes.string,
  underline: PropTypes.bool,
  large: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Brand.defaultProps = {
  className: '',
  underline: true,
  large: false,
};

export default Brand;

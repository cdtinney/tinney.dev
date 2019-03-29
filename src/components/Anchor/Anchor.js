import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import classNames from '../../utils/classNames';

import theme from '../../styles/theme.module.css';
import classes from './Anchor.module.css';

const colorEnum = {
  primary: theme.primary,
  secondary: theme.secondary,
};

export default function Anchor({
  href,
  external,
  title,
  ariaLabel,
  color,
  className,
  children,
}) {
  const props = {
    title,
    className: classNames(
      classes.root,
      colorEnum[color],
      className,
    ),
    'aria-label': ariaLabel,
  };

  return external
    ? (
      <a href={href} {...props}>
        { children }
      </a>
    ) : (
      <Link to={href} {...props}>
        { children }
      </Link>
    );
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
  title: PropTypes.string,
  ariaLabel: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Anchor.defaultProps = {
  external: false,
  title: null,
  ariaLabel: null,
  color: 'primary',
  className: '',
  children: null,
};

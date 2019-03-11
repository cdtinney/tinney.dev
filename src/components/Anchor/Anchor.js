import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import theme from '../../styles/theme.module.css';
import classes from './Anchor.module.css';

const colorEnum = {
  primary: theme.primary,
  secondary: theme.secondary,
};

export default function Anchor({
  href,
  title,
  ariaLabel,
  color,
  className,
  children,
}) {
  const classNames = `${classes.root} `
    + `${colorEnum[color]} `
    + `${className} `;
  return (
    <Link
      className={classNames}
      to={href}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  ariaLabel: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Anchor.defaultProps = {
  title: null,
  ariaLabel: null,
  color: 'primary',
  className: '',
  children: null,
};

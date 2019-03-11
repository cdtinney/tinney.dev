import React from 'react';
import PropTypes from 'prop-types';

import Anchor from '../Anchor';

import classes from './AnchorButton.module.css';

const colorEnum = {
  primary: classes.primary,
  secondary: classes.secondary,
};

export default function AnchorButton({
  href,
  external,
  title,
  text,
  ariaLabel,
  color,
  className,
}) {
  const classNames = `${classes.anchorButton} `
    + `${className} `
    + `${colorEnum[color]} `;
  return (
    <Anchor
      href={href}
      external={external}
      title={title}
      ariaLabel={ariaLabel}
      color={color}
      className={classNames}
    >
      { text }
    </Anchor>
  );
}

AnchorButton.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

AnchorButton.defaultProps = {
  external: false,
  title: null,
  ariaLabel: null,
  color: 'primary',
  className: '',
};

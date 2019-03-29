import React from 'react';
import PropTypes from 'prop-types';

import Anchor from '../Anchor';

import Theme from '../../proptypes/Theme';
import withTheme from '../../hocs/withTheme';
import classNames from '../../utils/classNames';

import classes from './AnchorButton.module.css';

const colorEnum = {
  primary: classes.primary,
  secondary: classes.secondary,
};

export function AnchorButton({
  theme,
  href,
  external,
  title,
  text,
  ariaLabel,
  color,
  className,
}) {
  return (
    <Anchor
      href={href}
      external={external}
      title={title}
      ariaLabel={ariaLabel}
      color={color}
      className={classNames(
        classes.anchorButton,
        colorEnum[color],
        theme.button,
        className,
      )}
    >
      { text }
    </Anchor>
  );
}

AnchorButton.propTypes = {
  theme: Theme.isRequired,
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

export default withTheme(AnchorButton);

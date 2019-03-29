import React from 'react';
import ScrollToTop from 'react-scroll-up';

import Theme from '../../proptypes/Theme';
import withTheme from '../../hocs/withTheme';

import classes from './ScrollUp.module.css';

export function ScrollUp({
  theme,
}) {
  const classNames = `${classes.container} ${theme.button}`;
  return (
    <ScrollToTop showUnder={160}>
      <div className={classNames}>
        up ↑
      </div>
    </ScrollToTop>
  );
}

ScrollUp.propTypes = {
  theme: Theme.isRequired,
};

export default withTheme(ScrollUp);

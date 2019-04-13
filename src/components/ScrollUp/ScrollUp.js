import React from 'react';
import ScrollToTop from 'react-scroll-up';

import Theme from '../../proptypes/Theme';
import withTheme from '../../hocs/withTheme';
import classNames from '../../utils/classNames';

import classes from './ScrollUp.module.css';

export function ScrollUp({
  theme,
}) {
  return (
    <ScrollToTop
      showUnder={160}
      style={{
        bottom: '70px',
      }}
    >
      <div className={classNames(classes.container, theme.button)}>
        up ↑
      </div>
    </ScrollToTop>
  );
}

ScrollUp.propTypes = {
  theme: Theme.isRequired,
};

export default withTheme(ScrollUp);

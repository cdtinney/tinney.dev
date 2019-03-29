import React from 'react';
import ScrollToTop from 'react-scroll-up';

import theme from '../../styles/theme.module.css';
import classes from './ScrollUp.module.css';

export default function ScrollUp() {
  const classNames = `${classes.container} ${theme.button}`;
  return (
    <ScrollToTop showUnder={160}>
      <div className={classNames}>
        up ↑
      </div>
    </ScrollToTop>
  );
}

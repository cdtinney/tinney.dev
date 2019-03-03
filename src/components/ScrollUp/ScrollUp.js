import React from 'react';
import ScrollToTop from 'react-scroll-up';

import classes from './ScrollUp.module.css';

export default function ScrollUp() {
  return (
    <ScrollToTop showUnder={160}>
      <div className={classes.container}>
        up ↑
      </div>
    </ScrollToTop>
  );
}

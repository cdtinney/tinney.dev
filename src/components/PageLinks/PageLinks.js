import React from 'react';
import Link from 'gatsby-link';

import classes from './PageLinks.module.css';

export default function PageLinks() {
  return (
    <div className={classes.container}>
      <div className={classes.linkContainer}>
        <Link to="/blog">
          {'blog'}
        </Link>
      </div>
    </div>
  );
}

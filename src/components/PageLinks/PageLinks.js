import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import classes from './PageLinks.module.css';

function PageLinks({ links }) {
  return (
    <div className={classes.container}>
      {links.map(({ to, name }) => (
        <Link key={to} to={to}>
          <div className={classes.linkContainer}>
            {name}
          </div>
        </Link>
      ))}
    </div>
  );
}

PageLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default PageLinks;

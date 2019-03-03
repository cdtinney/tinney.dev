import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import classes from './PageLinks.module.css';

function PageLinks({ links }) {
  return (
    <div className={classes.container}>
      {links.map(({ to, name }) => (
        <div key={name} className={classes.linkContainer}>
          <Link to={to}>
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
}

PageLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    naame: PropTypes.string.isRequired,
  })).isRequired,
};

export default PageLinks;

import React from 'react';
import PropTypes from 'prop-types';

import AnchorButton from '../AnchorButton';

import classes from './PageLinks.module.css';

function PageLinks({ links }) {
  return (
    <div
      className={`${classes.container}`}
    >
      {links.map(({ to, name }) => (
        <AnchorButton
          key={to}
          href={to}
          color="primary"
          text={name}
        />
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

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Anchor from '../Anchor';

import classes from './Brand.module.css';

function Brand({
  underline,
}) {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            site {
              siteMetadata {
                title,
              }
            }
          }
        `
      }
      render={data => (
        <h1
          className={`${classes.header} ${underline ? classes.headerUnderline : ''}`}
        >
          <Anchor
            href="/"
            className={classes.link}
          >
            {data.site.siteMetadata.title}
          </Anchor>
        </h1>
      )}
    />
  );
}

Brand.propTypes = {
  underline: PropTypes.bool,
};

Brand.defaultProps = {
  underline: true,
};

export default Brand;

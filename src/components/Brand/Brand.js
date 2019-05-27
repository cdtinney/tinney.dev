import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import classNames from '../../utils/classNames';
import Anchor from '../Anchor';

import classes from './Brand.module.css';

function Brand({
  underline,
  large,
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
          className={classNames(classes.header, {
            [classes.headerUnderline]: underline,
            [classes.headerLarge]: large,
          })}
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
  large: PropTypes.bool,
};

Brand.defaultProps = {
  underline: true,
  large: false,
};

export default Brand;

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import brandStyles from './Brand.module.css';

export default function Brand() {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            site {
              siteMetadata {
                title,
                url
              }
            }
          }
        `
      }
      render={data => (
        <h1 className={brandStyles.header}>
          <a
            href={data.site.siteMetadata.url}
            className={brandStyles.link}
          >
            {data.site.siteMetadata.title}
          </a>
        </h1>
      )}
    />
  );
}

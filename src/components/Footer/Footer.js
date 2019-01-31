import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import footerStyles from './Footer.module.css';

export function Footer({ data }) {
  const {
    site: {
      siteMetadata: {
        year,
        contact: {
          name,
        },
      },
    }
  } = data;

  return (
    <footer className={footerStyles.footer}>
      Copyright © { year } { name }. All Rights Reserved.
    </footer>
  );
}

export default function FooterContainer() {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            site {
              siteMetadata {
                year,
                contact {
                  name,
                },
              }
            }
          }
        `
      }
      render={data => <Footer data={data}/>}
    />
  );
}

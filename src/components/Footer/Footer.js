import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import footerStyles from './Footer.module.css';

export function Footer({ data }) {
  return (
    <footer className={footerStyles.footer}>
      Copyright © 2018 { data.site.siteMetadata.contact.name }. All Rights Reserved.
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

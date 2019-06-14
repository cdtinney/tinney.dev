import { graphql } from 'gatsby';
import { config } from '@fortawesome/fontawesome-svg-core';

import Home from './Home';

// CSS for Font Awesome is explicitly loaded to ensure
// it gets loaded before SVG elements are rendered
config.autoAddCss = false;

export default Home;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about\/about.md/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
    site {
      siteMetadata {
        title,
      }
    }
  }
`;

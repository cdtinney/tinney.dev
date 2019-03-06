import { graphql } from 'gatsby';
import About from './About/';

export default About;

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
  }
`;

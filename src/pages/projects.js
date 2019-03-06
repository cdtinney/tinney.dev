import { graphql } from 'gatsby';
import Projects from './Projects/';

export default Projects;

export const pageQuery = graphql`
  query {
    allProjectsJson(
      sort: { order: ASC, fields: [order, name] }
    ) {
      edges {
        node {
          id
          order
          name
          shortDescription
          techStack
          homepageUrl
          gitHubUrl
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

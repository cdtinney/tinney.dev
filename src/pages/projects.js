import { graphql } from 'gatsby';
import Projects from './Projects/';

export default Projects;

export const pageQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          name
          shortDescription
          techStack
          homepageUrl
          gitHubUrl
        }
      }
    }
  }
`;

import { graphql } from 'gatsby';
import Blog from './Blog/';

export default Blog;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "\/posts/" } },
      sort: { order: DESC, fields: [frontmatter___date] },
    ) {
      edges {
        node {
          excerpt(format: HTML, pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
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

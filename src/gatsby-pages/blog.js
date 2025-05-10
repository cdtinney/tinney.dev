import { graphql } from 'gatsby';
import Blog from './Blog/';

export default Blog;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "\/posts/"
        }
        frontmatter: {
          archived: {
            ne: true
          }
        }
      },
      sort: {
        order: DESC, fields: [frontmatter___date]
      },
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            archived
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

const path = require('path');

/**
 * Creates blog post pages using GraphQL queries.
 */
module.exports.createPages = function createPages({
  actions,
  graphql,
}) {
  return graphql(`{
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "\/posts/" } },
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }`).then((result) => {
    if (result.errors) {
      return Promise.reject(errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const {
        frontmatter: {
          path: postPath,
          title,
        },
      } = node;

      console.log(`Creating blog post (title = ${title}, path = ${postPath})`);

      actions.createPage({
        path: postPath,
        component: path.resolve(`src/templates/BlogPost/BlogPost.js`),
        context: {} // Additional data can be passed via context
      });
    });
  });
};

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
      filter: {
        fileAbsolutePath: {
          regex: "\/posts/"
        }
      },
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges
      .map(({ node }) => ({
        title: node.frontmatter.title,
        postPath: node.frontmatter.path,
      }));
    return posts.forEach(({ title, postPath }, index) => {
      console.log(`Creating blog post (title = ${title}, path = ${postPath})`);
      const prevPost = index > 0
        ? posts[index - 1]
        : null;
      const nextPost = index < posts.length - 1
        ? posts[index + 1]
        : null;

      actions.createPage({
        path: postPath,
        component: path.resolve('src/templates/BlogPost/BlogPost.js'),
        context: {
          prevPost,
          nextPost,
        },
      });
    });
  });
};

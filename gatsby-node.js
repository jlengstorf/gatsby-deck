exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  fileAbsolutePath
                  fileNode {
                    name
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create decks.
        result.data.allMdx.edges.forEach(({ node }) => {
          console.log(node);
          createPage({
            path: `/${node.fileNode.name}`,
            component: node.fileAbsolutePath,
            context: { absPath: node.fileAbsolutePath }
          });
        });
      })
    );
  });
};

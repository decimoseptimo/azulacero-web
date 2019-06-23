require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
const slug = require(`slug`);
const path = require(`path`);

const paginationPath = (path, page, totalPages) => {
  if (page === 0) {
    return path
  } else if (page < 0 || page >= totalPages) {
    return ''
  } else {
    return `${path}/${page + 1}`
  }
}

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getArticles = makeRequest(graphql, `
    {
      allContentfulArticle (
        filter: {published: {eq: true}}
      ){
        edges {
          node {
            id
            title
          }
        }
      }
    }
    `).then(result => {
    // Create blog posts
    result.data.allContentfulArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${slug(node.title)}/`,
        component: path.resolve(`src/templates/blog-post.js`),
        context: {
          id: node.id,
        },
      });
    });

    // //Create blog pagination
    const blogPostsCount = result.data.allContentfulArticle.edges.length;
    const blogPostsPerPaginatedPage = 3;
    const paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage);

    let index = 0;
    while(index < paginatedPagesCount){
        createPage({
        path: paginationPath('/blog/', index, paginatedPagesCount),
        component:  path.resolve(`src/templates/blog.js`),
        context: {
          skip: index * blogPostsPerPaginatedPage,
          limit: blogPostsPerPaginatedPage,
          // first: '/blog',
          pagesCount: paginatedPagesCount,
          prevPath: paginationPath('/blog/', index - 1, paginatedPagesCount),
          nextPath: paginationPath('/blog/', index + 1, paginatedPagesCount),
        }
      });
      index++;
    }

  });

  // Query for articles nodes to use in creating pages.
  return getArticles;

};

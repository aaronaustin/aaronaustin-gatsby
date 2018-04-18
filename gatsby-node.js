const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(
      `
        {
          allContentfulPosts(limit: 1000) {
            edges {
              node {
                id
                path
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create post pages
        const postTemplate = path.resolve(`./src/templates/post.js`)
        // We want to create a detailed page for each
        // blog node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulPosts.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: edge.node.path,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
      // .then(() => {
      //   graphql(
      //     `
      //       {
      //         allContentfulSongs(limit: 1000) {
      //           edges {
      //             node {
      //               id
      //               path
                    
      //             }
      //           }
      //         }
      //       }
      //     `
      //   ).then(result => {
      //     if (result.errors) {
      //       reject(result.errors)
      //     }
      //     const songTemplate = path.resolve(`./src/templates/song.js`)
      //     _.each(result.data.allContentfulSongs.edges, edge => {
      //       createPage({
      //         path: edge.node.path,
      //         component: slash(songTemplate),
      //         context: {
      //           id: edge.node.id,
      //         },
      //       })
      //     })
      //   })
      // })
      .then(() => {
        graphql(
          `
            {
              allContentfulCategories(limit: 1000) {
                edges {
                  node {
                    id
                    title
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          const categoryTemplate = path.resolve(`./src/templates/category.js`)
          _.each(result.data.allContentfulCategories.edges, edge => {
            createPage({
              path: `/${edge.node.title}/`,
              component: slash(categoryTemplate),
              context: {
                category: edge.node.title,
              },
            })
          })
        })
      })
      .then(() => {
        graphql(
          `
            {
              allContentfulLandings(filter: {listingPage: {ne: true}} ) {
                edges {
                  node {
                    id
                    slug
                    title
                    listingPage
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          const landingTemplate = path.resolve(`./src/templates/landing.js`)
          _.each(result.data.allContentfulLandings.edges, edge => {
            createPage({
              path: `${edge.node.slug}/`,
              component: slash(landingTemplate),
              context: {
                id: edge.node.id,
              },
            })
          })

          resolve()
        })
      })
  })
}

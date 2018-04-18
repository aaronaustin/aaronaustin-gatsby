// import React from "react"
// import Link from "gatsby-link"
// import * as PropTypes from "prop-types"
// import Helmet from "react-helmet"
// import Hero from "../components/hero/hero"
// import Content, { HTMLContent } from '../components/Content';

// const propTypes = {
//   data: PropTypes.object.isRequired,
// }

// class LandingTemplate extends React.Component {
//   render() {
//     const landing = this.props.data.contentfulLandings
//     const { title, body, image } = landing
//     if (landing.title == "Songs" || landing.title == "Blog") {
//       const items = landing.title == "Songs" ? this.props.data.allContentfulSongs : this.props.data.allContentfulBlog;
//       console.log('items:', items);
//     }
//     return (
//       <div>
//         <Helmet title={`Blog | ${title}`} />
//         <Hero image={image.sizes} />
//         <section className="content">
//           <h1>{title}</h1>
//           <HTMLContent content={body.childMarkdownRemark.html} />
//         </section>
//       </div>
//     )
//   }
// }

// LandingTemplate.propTypes = propTypes

// export default LandingTemplate

// export const pageQuery = graphql`
//   query landingQuery($id: String!, $landing:String) {
//     contentfulLandings(id: { eq: $id }) {
//       title
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//       image {
//         sizes(maxWidth: 1920) {
//           ...GatsbyContentfulSizes
//         }
//       }
//     }
//     allContentfulSongs(filter:{ internal: {type :{eq: $landing}}}){
//       edges {
//         node {
//           id
//           title
//           publishDate(formatString: "MM.DD.YYYY")
//           path
//           internal {
//             type
//           }
//           image {
//             sizes(maxWidth: 1920) {
//               ...GatsbyContentfulSizes
//             }
//           }
//           body {
//             childMarkdownRemark {
//               excerpt(pruneLength: 100)
//             }
//           }
//         }
//       }
//     }
//   }
// `

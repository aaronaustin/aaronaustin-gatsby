import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Helmet from "react-helmet"
import Hero from "../components/hero/hero"
import Img from "gatsby-image"
import Card from "../components/card/card"
import Content, { HTMLContent } from '../components/Content'
import FilterList from "../components/filterList/filterList"
import TextCircle from "../components/icons/textCircle"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class CategoryPage extends React.Component {
  render() {
    const posts = this.props.data.allContentfulPosts.edges
    const tags = this.props.data.allContentfulTags.edges
    const categoryType = this.props.pathContext.category

    return (
      
        <FilterList listType={categoryType} list={posts} filters={tags} />

    )
  }
}

CategoryPage.propTypes = propTypes

export default CategoryPage;




export const pageQuery = graphql`
  query categoryPage($category: String!) {
    allContentfulPosts(filter: {category:{eq: $category}}) {
      edges {
        node {
          id
          title
          publishDate(formatString: "MM.DD.YYYY")
          path
          image {
            sizes(maxWidth: 400) {
              ...GatsbyContentfulSizes
            }
          }
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 100)
            }
          }
          category
          tags {
            title
            color
          }
        }
      }
    }
    allContentfulTags(filter: {parentCategories: {eq: $category}}, sort: { fields: [order] } ) {
      edges {
        node {
          title
          color
          parentCategories 
          order
        }
      }
    }
  }
`
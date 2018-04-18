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

class SongsPage extends React.Component {
  render() {
    const songs = this.props.data.allContentfulPosts.edges
    const tags = [
      {
        title: 'advent',
        color: '#a846a0'//#2499d8
      },
      {
        title: 'christmas',
        color: '#e0be00'
      },
      {
        title: 'epiphany',
        color: '#20bc62'
      },
      {
        title: 'lent',
        color: '#a846a0'
      },
      {
        title: 'easter',
        color: '#e0be00'
      },
      {
        title: 'ordinary',
        color: '#20bc62'
      }

    ];
    return (
      <section className="content">
        <FilterList list={songs} filters={tags} />
      </section>
    )
  }
}

SongsPage.propTypes = propTypes

export default SongsPage;




export const pageQuery = graphql`
  query songsPage {
    allContentfulPosts(filter: {category:{eq: "Songs"}}) {
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
  }
`
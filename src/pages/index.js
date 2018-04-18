import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import Content, { HTMLContent } from '../components/Content';
import Card from "../components/card/card.js"
import Hero from "../components/hero/hero.js"
import Highlight from "../components/highlight/highlight.js"
import Video from "../components/video/video.js"
import Links from "../components/links/links"
import BackgroundImage from "../components/backgroundImage/backgroundImage";

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    const posts = this.props.data.allContentfulPosts.edges
    const home = this.props.data.contentfulLandings
    const links = this. props.data.allContentfulCategories.edges
    console.log("home: ", this.props.data)

    return (

      <section className="section">
            <Video 
              className="content" 
              title={home.heading}
              url={home.youtubeId}
              image={home.image.sizes} />
        <section className="hero">
          {home.highlights &&
            <Highlight
              highlights={home.highlights.childMarkdownRemark.html}
              lead={home.lead.childMarkdownRemark.html}
              body={home.body.childMarkdownRemark.html} />
          }
          <Links />
        </section>
        <section>
        
          <div className="cardGroup">

            {posts.map(({ node: post }) => {
              return (
                <Card
                  key={post.id}
                  title={post.title}
                  intro={post.body.childMarkdownRemark.excerpt}
                  category={post.category}
                  link={post.path}
                  date={post.publishDate}
                  image={post.image.sizes} />
              );
            })}
          </div>
        </section>
      </section>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    contentfulLandings(title: { eq: "Home" }) {
      slug
      image {
        sizes(maxWidth: 1920) {
          ...GatsbyContentfulSizes
        }
      }
      title
      heading
      youtubeId
      body {
        childMarkdownRemark {
          html
        }
      }
      highlights {
        childMarkdownRemark {
          html
        }
      }
      lead {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulCategories {
      edges {
        node {
          title
          path
        }
      }
    }
    allContentfulPosts(limit: 10){
      edges {
        node {
          id
          title
          publishDate(formatString: "MM.DD.YYYY")
          path
          category
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
        }
      }
    }
  }
`

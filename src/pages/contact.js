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
import InputField from "../components/inputField/inputField";

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ContactPage extends React.Component {
  render() {
    // const posts = this.props.data.allContentfulPosts.edges
    const page = this.props.data.contentfulLandings
    // const links = this. props.data.allContentfulCategories.edges
    // console.log("home: ", this.props.data)

    return (

      <section className="section">
        <Hero image={page.image.sizes} />
        
        <section className="content">
          <section className="width-xs">
            <h1>Get in touch</h1>
            <HTMLContent content={page.body.childMarkdownRemark.html}/>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <InputField name={'name'} label={'Your Name'} notification={'Please enter your name'}/>
              <InputField name={'email'} label={'Your Email'} type={'email'} notification={'Please enter a valid email'}/>
              <InputField name={'message'} label={'Message'} type={'textarea'} notification={'Please enter a message'}/>
              <div>&nbsp;</div>
              <button className="btn" type="reset" >Cancel</button>
              <button className="btn solid" type="submit" >Send Your Message</button>
            </form>
          </section>
        </section>
      </section>
      
      
      
      
    )
  }
}

ContactPage.propTypes = propTypes

export default ContactPage

export const pageQuery = graphql`
  query ContactQuery {
    contentfulLandings(title: { eq: "Contact" }) {
      slug
      image {
        sizes(maxWidth: 1920) {
          ...GatsbyContentfulSizes
        }
      }
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Helmet from 'react-helmet'
import Navbar from '../components/navbar/navbar.js'
import Footer from '../components/footer/footer.js'
import '../theme/styles.scss';

const propTypes = {
  children: PropTypes.func.isRequired,
}

class DefaultLayout extends React.Component {
  render() {
    const landings = this.props.data.allContentfulLandings.edges
    return (
      <div className="appWrapper">
        <Helmet title="Aaron Austin" />
        <Navbar links={landings}/>
        <div className="contentWrapper">
          {this.props.children()}
        </div>
        <Footer links={landings}/>
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout

export const pageQuery = graphql`
  query DefaultLayoutQuery {
    allContentfulLandings(sort: { fields: [order] }) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
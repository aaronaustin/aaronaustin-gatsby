import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Helmet from "react-helmet"
import Content, { HTMLContent } from '../components/Content';
import Hero from "../components/hero/hero"
import Sharing from "../components/sharing/sharing"
import AudioPlayer from "../components/audioPlayer/audioPlayer"
import Video from "../components/video/video"
import IconsSite from "../components/icons/iconsSite"
import Links from "../components/links/links"
import ExternalLinks from "../components/externalLinks/externalLinks"
import SEO from "../components/SEO/SEO"

const propTypes = {
  data: PropTypes.object.isRequired,
}
class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPosts
    const { id, title, body, image, path, category, author, copyright, audio, video, mediaLink, publishDate } = post
    console.log(image);
    return (
      <div>
        <SEO
          key={`seo-${id}`}
          title={title}
          image={image.file.url}
          description={post.body.childMarkdownRemark.excerpt}
          path={path}
          date={publishDate}
          category={category}
          isBlogPost={true}
        />
        <div style={{ 
          position: 'absolute', 
          top: '0', 
          left: 0, 
          right: 0, 
          // height: '300px', 
          width: '100vw', 
          zIndex: -1, 
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1)), url(${image.sizes.base64})`, 
          backgroundSize:'cover', backgroundPosition: 'center',}}  />
        {video &&
          <Video
            className="content"
            url={video}
            image={image.sizes} />
        }
        {!video &&
          <Hero image={image.sizes} />
        }
        <section className="content">
            
            {audio &&
              <AudioPlayer 
                audioUrl={audio.audio.file.url} 
                contentType={audio.contentType} 
                length={audio.duration}/>
            }
            <span className="meta">
              <Link to={`/${category}`}>
                <IconsSite name={category} />
                <h6>{category}</h6>
              </Link>
              <Sharing shareUrl={this.props.location.pathname} title={title}/>
            </span>
          <h1 className="title">{title}</h1>
          {author &&
            <h6 className="author">{author}</h6>
          }
          
          <HTMLContent content={body.childMarkdownRemark.html} />
          {copyright &&
            <h6 className="author">Copyright <span className="copyright">&copy;</span> {copyright}</h6>
          }
          {mediaLink &&
            <ExternalLinks 
              title={"Listen & Purchase"}
              links={mediaLink} />
          }
              
          <Links />
        </section>
      </div>
    )
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const pageQuery = graphql`
  query postQuery($id: String!) {
    contentfulPosts(id: { eq: $id }) {
      title
      path
      body {
        childMarkdownRemark {
          excerpt(pruneLength: 100)
          html
        }
      }
      image {
        file {
          url
        }
        sizes(maxWidth: 1920) {
          ...GatsbyContentfulSizes
        }
      }
      publishDate
      category
      author
      copyright
      video: youtubeId
      audio {
        id
        duration
        audio{
          file {
            url
            contentType
          }
        }
      }
      mediaLink {
        link: mediaSource
        url: mediaLink
      }
    }
  }
`

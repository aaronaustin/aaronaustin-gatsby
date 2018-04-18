import React from 'react'
import Link from 'gatsby-link'
import styles from './_externalLinks.module.scss'

const ExternalLinks = (props) => (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <div className={styles.linkWrapper}>
        {props.links.map((node) => {
          return (
            <a href={node.url}
              key={node.link}
              className="btn external"
              target="_blank">
              {node.link}
            </a>
          )
        })}
      </div>
    </div>
)

export default ExternalLinks

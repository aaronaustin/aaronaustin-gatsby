import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styles from './_hero.module.scss'

const Hero = (props) => (
    <div className={`${styles.container} hero`}>
      <Img
        sizes={props.image} />
        {props.links && (
            <div className={styles.textWrapper}>
                {props.links.map(({node}) =>
                    <Link
                        to={node.path}
                        key={node.title}
                        className="btn white icon">
                        
                        {node.title}
                    </Link>
                )}
            </div>
        )}
    </div>
)

export default Hero

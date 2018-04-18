import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styles from './_headline.module.scss'

const Headline = (props) => (
    <div className={`${styles.container} headline`}>
      <img
        src={props.image} />
        <div className={styles.textWrapper}>
            <h1>{props.title}</h1>
        </div>
    </div>
)

export default Headline

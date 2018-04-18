import React from 'react'
import Img from "gatsby-image"
import styles from './_backgroundImage.module.scss'

const BackgroundImage = (props) => (
      <div className={styles.container} >
            <Img sizes={props.image} style={{ maxHeight: props.maxHeight }}/>
      </div>
)

export default BackgroundImage

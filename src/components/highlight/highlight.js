import React from 'react'
import styles from './_highlight.module.scss'

const Highlight = (props) => (
    <div className={`highlight ${styles.container}`}>
      <div 
        className={styles.highlights}
        dangerouslySetInnerHTML={{ __html: props.highlights }}>
      </div>
      <div 
        className={styles.highlights}
        dangerouslySetInnerHTML={{ __html: props.lead }}>
      </div>
      <div 
        className={styles.main}
        dangerouslySetInnerHTML={{ __html: props.body }}>
      </div>
    </div>
)

export default Highlight

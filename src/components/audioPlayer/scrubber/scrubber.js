import React from 'react'
import styles from './_scrubber.module.scss'

const Scrubber = (props) => (
  <div className={props.playing ? styles.container + " " + styles.active : styles.container}>
    <div className={styles.time}>
      <span>{props.currentTime}</span>
      <span>{props.totalTime}</span>
    </div>
    <div className={styles.scrubberWrapper} onClick={props.handleClick}>
      <div className={styles.scrubber} style={{ width: props.percentPlayed }} ></div>
    </div>

  </div>
)

export default Scrubber

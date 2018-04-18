import React from 'react'
import styles from './_menuIcon.module.scss'

const MenuIcon = (props) => (
  <div className={props.in ? styles.menuIconWrapper + ' ' + styles.active : styles.menuIconWrapper} onClick={props.onClick}>
    <svg className={props.in ? styles.menuIcon + ' ' + styles.active : styles.menuIcon} fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    	<path d="M0,0l24,0l0,24l-24,0l0,-24Z" fill="none"/>
    	<rect className={styles.menuBarTop} x="0" y="2" width="24" height="2"/>
    	<rect className={styles.menuBarMidA} x="0" y="11" width="24" height="2"/>
      <rect className={styles.menuBarMidB} x="0" y="11" width="24" height="2"/>
    	<rect className={styles.menuBarBot} x="0" y="20" width="24" height="2"/>
    </svg>
  </div>
)

export default MenuIcon

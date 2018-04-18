import React from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './_searchBar.module.scss'

const Animation = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={{
     enter: 250,
     exit: 250,
    }}
    classNames={styles}
    mountOnEnter={true}
    unmountOnExit={true}
  >
    {children}
  </CSSTransition>
);

export default Animation

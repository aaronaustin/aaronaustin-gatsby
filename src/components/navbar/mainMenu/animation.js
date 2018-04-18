import React from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './_mainMenu.module.scss'

const Animation = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={{
     enter: 100,
     exit: 500,
    }}
    appear={true}
    classNames={styles}
    mountOnEnter={true}
    unmountOnExit={true}
  >
    {children}
  </CSSTransition>
);

export default Animation

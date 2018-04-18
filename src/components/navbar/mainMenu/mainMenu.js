import React from 'react'
import Link from 'gatsby-link'
import { CSSTransition } from 'react-transition-group'
import Animation from './animation.js'
import styles from './_mainMenu.module.scss'

const MainMenu = (props) => (
  <Animation in={props.in}>
      <div className={styles.mainMenuContainer}>
        <div className={styles.mainMenuInner}>
          {props.links.map(({ node }) =>
            <Link
              to={`/${node.slug !== null ? node.slug : ""}`}
              key={node.slug}
              onClick={props.onClick}>
              <h1>{node.title}</h1>
            </Link>
          )}
        </div>
      </div>
    </Animation>
)

export default MainMenu

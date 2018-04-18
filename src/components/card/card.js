import React from 'react'
import Link from 'gatsby-link'
import styles from './_card.module.scss'
import Img from 'gatsby-image'
import IconsSite from '../icons/iconsSite.js'

const Card = (props) => (
    <div className={`card ${styles.container}`}>
      <Link to={props.link}>
        <div className={styles.inner}>
          {props.image &&
            <div className={styles.image}>
              <Img sizes={props.image} />
            </div>
          }
          <div className={styles.description}>
            {props.category &&
              <span className={styles.category}>
                <IconsSite name={props.category} />
                <h6 dangerouslySetInnerHTML={{__html:props.category}}></h6>
              </span>
            }
            <h3 dangerouslySetInnerHTML={{__html:props.title}}></h3>
            {props.intro &&
              <div dangerouslySetInnerHTML={{__html:props.intro}}></div>
            }
            {props.date &&
              <h6 className={styles.date} dangerouslySetInnerHTML={{__html:props.date}}></h6>
            }
          </div>
        </div>
      </Link>
    </div>
)

export default Card

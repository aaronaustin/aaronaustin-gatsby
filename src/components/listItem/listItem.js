import React from 'react'
import Link from 'gatsby-link'
import styles from './_listItem.module.scss'
import Img from 'gatsby-image'
import TextCircle from '../icons/textCircle'

const ListItem = (props) => (
    <div className={`listItem ${styles.container}`}>
      <Link to={props.link}>
        <div className={styles.inner}>
          {props.image &&
            <div className={styles.image}>
              <Img sizes={props.image} />
            </div>
          }
          
          <div className={styles.description}>
            <h3 dangerouslySetInnerHTML={{__html:props.title}}></h3>
            {props.intro &&
              <div dangerouslySetInnerHTML={{__html:props.intro}}></div>
            }
            {props.date &&
              <h6 className={styles.date} dangerouslySetInnerHTML={{__html:props.date}}></h6>
            }
            {props.categories.length &&
              <div className={styles.categories}>
                {props.categories.map(({ title: categoryTitle, color }) =>
                  <TextCircle text={categoryTitle} color={color} key={categoryTitle}/>
                )}
              </div>
            }
          </div>
        </div>
      </Link>
    </div>
)

export default ListItem

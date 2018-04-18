import React from 'react'
import Link from 'gatsby-link'
import IconsSite from '../icons/iconsSite'
import styles from './_links.module.scss'

const Links = () => (
        <div className={styles.container}>
                <Link to={'/songs'} className="big">
                        <IconsSite name={'songs'} /> Songs
                </Link>
                <Link to={'/words'} className="big">
                        <IconsSite name={'words'} /> Words
                </Link>
                <Link to={'/videos'} className="big">
                        <IconsSite name={'videos'} /> Videos
                </Link>
        </div>
)

export default Links

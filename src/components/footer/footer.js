import React from 'react'
import Link from 'gatsby-link'
import IconAADesign from '../icons/iconAADesign.svg'
import IconGatsby from '../icons/iconGatsby.svg'
import Social from '../social/social'
import styles from './_footer.module.scss'

const Footer = (props) => (
    <footer className={styles.container}>
        <svg width="100%" viewBox="0 0 1366 149">
            <path d="M1366,0l0,91.261c0,0 -823.177,103.29 -683,-28.458c149.391,-140.408 -683,28.458 -683,28.458l0,-91.261l1366,0Z" fill="#fff" />
        </svg>
        <div className={styles.contentWrapper}>
            {props.links && (
                <div className={styles.links}>
                    {props.links.map(({ node }) =>
                        <Link
                        to={`/${node.slug !== null? node.slug: ""}`}
                        key={node.slug}
                        className="btn inverse flat">
                            {node.title}
                        </Link>
                    )}
                </div>
            )}
            <div className={`author ${styles.copy}`}>
                <span className="copyright">&copy; </span> 
                {new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format()} 
                <span> Aaron Austin</span>
            </div>
            <div className={styles.social}>
                <Social />
            </div>
            <div className={styles.power}>
                <a href="http://aaronaustindesign.com" target="_blank">
                    <img src={IconAADesign} />
                </a>
                <a href="https://www.contentful.com/" rel="nofollow" target="_blank">
                    <img 
                        src="https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg" 
                        style={{ minWidth: "100px", width: "100%", marginBottom: "10px"}} 
                        alt="Powered by Contentful" />
                </a>
                <a href="http://gatsbyjs.org" target="_blank">
                    <img src={IconGatsby} />
                </a>
            </div>
        </div>
    </footer>
)

export default Footer

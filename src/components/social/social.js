import React from 'react'
import Link from 'gatsby-link'
import styles from './_social.module.scss'
import IconsBrand from "../icons/iconsBrand"

const Social = (props) => {
    const fbUrl = "https://www.facebook.com/bootlegpreacher";
    const twUrl = "https://twitter.com/bootlegpreacher";
    const bcUrl = "http://music.aaronaustin.com";
    const scUrl = "https://soundcloud.com/aaronaustin";
    
    console.log(props);
    return (
      <div className={styles.container}>
        <a href={fbUrl} target="_blank">
          <IconsBrand name={'facebook'}/>
        </a>
        <a href={twUrl} target="_blank">
          <IconsBrand name={'twitter'} />
        </a>
        <a href={bcUrl} target="_blank">
          <IconsBrand name={'bandcamp'} />
        </a>
        <a href={scUrl} target="_blank">
          <IconsBrand name={'soundcloud'} />
        </a>
      </div>
    )
}

export default Social

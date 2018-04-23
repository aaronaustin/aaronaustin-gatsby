import React from 'react'
import Link from 'gatsby-link'
import styles from './_sharing.module.scss'
import IconsBrand from '../icons/iconsBrand';

const Sharing = (props) => {
    const baseUrl = "http://www.aaronaustin.com";
    const fbAppId = "1773314012731497";
    const twBase = "https://twitter.com/intent/tweet?url=";
    const fbBase = "https://www.facebook.com/dialog/share?app_id=" + fbAppId + "&display=popup&href="
    
    const twText = "&text=" + encodeURIComponent(props.title);
    const twHash = "&hashtags=music,folk";

    const fbShareUrl = fbBase + encodeURIComponent(baseUrl + props.shareUrl);
    const twShareUrl = twBase + encodeURIComponent(baseUrl + props.shareUrl) + twText + twHash;

    const popUp = (shareUrl) => {
      window.open(shareUrl,'test','width=550,height=450,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
    };

    console.log(props);
    return (
      <span className={styles.container}>
        <a onClick={() => {popUp(fbShareUrl)}}>
          <IconsBrand name={'facebook'}/>
        </a>
        <a onClick={() => { popUp(twShareUrl) }}>
          <IconsBrand name={'twitter'}/>
        </a>
      </span>
    )
}

export default Sharing

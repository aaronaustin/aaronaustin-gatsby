import React from 'react'
import Link from 'gatsby-link'
import styles from './_sharing.module.scss'
import IconsBrand from '../icons/iconsBrand';

const Sharing = (props) => {
    const baseUrl = "http://aaronaustin.com";
    const fbAppId = "1773314012731497";
    // const fbBase = "https://www.facebook.com/sharer.php?u=";
    const twBase = "https://twitter.com/intent/tweet?url=";
    const fbBase = "https://www.facebook.com/dialog/share?app_id=" + fbAppId + "&display=popup&href="

  // https://www.facebook.com/dialog/share?app_id={app_id}&display=popup&href={ url }& redirect_uri={ redirect_url }

    
    const twText = "&text=" + encodeURIComponent(props.title);
    const twHash = "&hashtags=music,folk";

    const fbShareUrl = fbBase + encodeURIComponent(baseUrl + props.shareUrl);
    const twShareUrl = twBase + encodeURIComponent(baseUrl + props.shareUrl) + twText + twHash;

    console.log(props);
    return (
      <span className={styles.container}>
        <a href={fbShareUrl} target="_blank">
          <IconsBrand name={'facebook'}/>
        </a>
        <a href={twShareUrl} target="_blank">
          <IconsBrand name={'twitter'}/>
        </a>
      </span>
    )
}

export default Sharing

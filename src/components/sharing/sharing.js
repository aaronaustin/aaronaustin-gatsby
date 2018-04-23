import React from 'react'
import Link from 'gatsby-link'
import styles from './_sharing.module.scss'
import IconsBrand from '../icons/iconsBrand';
import config from '../config';

const Sharing = (props) => {
  // const fbAppId = "1773314012731497";
  // const fbBase = "https://www.facebook.com/dialog/share?app_id=" + fbAppId + "&display=popup&href="
  // const params = 'width=550,height=450,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0';
    // const fbShareUrl = fbBase + encodeURIComponent(baseUrl + props.shareUrl);

  const fbBase = "https://www.facebook.com/sharer.php?u=";
  const twBase = "https://twitter.com/intent/tweet?url=";

  const twText = "&text=" + encodeURIComponent(props.title);
  const twHash = "&hashtags=music,folk";

  const fbShareUrl = fbBase + encodeURIComponent(config.url + props.shareUrl);
  const twShareUrl = twBase + encodeURIComponent(config.url + props.shareUrl) + twText + twHash;

  console.log(props);
  return (
    <span className={styles.container}>
      <a href={fbShareUrl} target="_blank">
        <IconsBrand name={'facebook'} />
      </a>
      <a href={twShareUrl} target="_blank">
        <IconsBrand name={'twitter'} />
      </a>
    </span>
  )
}

export default Sharing

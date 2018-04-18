
import React from 'react'
import YouTube from 'react-youtube'
import Img from 'gatsby-image'
import BackgroundImage from '../backgroundImage/backgroundImage'
import PlayButton from '../playButton/playButton'
import styles from './_video.module.scss'

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.url,
            player: null,
            status: 0,
            waiting: false
        };
        this.onReady = this.onReady.bind(this);
        this.onPlayVideo = this.onPlayVideo.bind(this);
        this.onPauseVideo = this.onPauseVideo.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
    }
    onReady(event) {
        this.setState({player: event.target});
        console.log(`videoId: ${this.state}`);
    }
    onPlayVideo() {
        if (this.state.player == null) {
            console.log('waiting');
            this.setState({waiting: true});
            this.playTimeout = setTimeout(() => this.onPlayVideo(), 1500);
        }
        else {
            this.setState({waiting: false});
            this.state.player.playVideo();
        }
    }
    onPauseVideo() {
        this.state.player.pauseVideo();
    }
    onStateChange(event) {
        if(event.data == 1) {
            this.setState({ status: event.data })
        }
        else if (event.data == 2 ) {
            this.stateTimeout = setTimeout(() => {
                let confirmState = this.state.player.getPlayerState();
                this.setState({ status: confirmState })
            }, 5000);
        }
        else if (event.data == 0) {
            this.setState({ status: event.data })
        }
    }
    componentWillUnmount() {
        clearTimeout(this.stateTimeout);
        clearTimeout(this.playTimeout);
    }
    render() {
        const opts = {
            width: 640,
            height: 360,
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                rel: 0,
                color: 'white',
                controls: 1,
                modestbranding: 1,
                showInfo: 0
            }
        };
        return (
            <div className={this.state.status == 1 || this.state.status == 3? styles.container + " " + styles.on : styles.container }>
                <BackgroundImage image={this.props.image} maxHeight={opts.height}/>
                <div className={styles.videoBorder}>
                    <div className={styles.videoWrapper}>
                        <YouTube
                            videoId={this.props.url}
                            opts={opts}
                            onReady={this.onReady}
                            onStateChange={this.onStateChange}
                        />
                    </div>
                </div>
                <div className={this.state.status != 1 ? styles.overlay : styles.overlay + " " + styles.hide }> 
                    <h1>{this.props.title}</h1>
                    <PlayButton onClick={this.onPlayVideo} playing={this.state.status == 1} waiting={this.state.waiting}/>
                </div>
            </div>
        )
    }
}

export default Video

import React from 'react'
import styles from './_audioPlayer.module.scss'
import Scrubber from './scrubber/scrubber.js'
import PlayButton from '../playButton/playButton'
import { CSSTransition } from 'react-transition-group'

class AudioPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playing : false, 
            audioUrl: this.props.audioUrl, 
            currentTime: 0, 
            percentPlayed: 0,
            length: this.props.length, 
            contentType: this.props.contentType
        };
        
        this.togglePlay = this.togglePlay.bind(this);
        this.convertTime = this.convertTime.bind(this);
        this.playCounter = this.playCounter.bind(this);
        this.setPlayTime = this.setPlayTime.bind(this);
        this.count = this.count.bind(this);
    }

    componentDidMount() {
        const audio = document.getElementById('audio');
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    togglePlay(e) {
        this.setState({ playing: !this.state.playing});
        if(!this.state.playing) {

            audio.play();
            this.playCounter();
        }
        else {
            audio.pause();
            clearInterval(this.interval);
        }
    }

    audioPlay(){
        audio.play();
        this.playCounter();
    }

    audioPause(){
        audio.pause();
        clearInterval(this.interval);
    }

    audioReset(){
        this.audioPause();
        audio.currentTime = 0;
        this.setState({ currentTime: audio.currentTime, percentPlayed: 0, playing: false })
    }

    audioPlayFrom(time) {
        this.audioPause();
        audio.currentTime = time;
        this.audioPlay();
    }

    playCounter() {
        this.interval = setInterval(() => this.count(), 100);
    }
    
    count() {
        if (this.state.currentTime < this.state.length - 1){
            let percentPlayed = (audio.currentTime / this.state.length * 100).toFixed(2) + "%";
            this.setState({ currentTime : audio.currentTime, percentPlayed: percentPlayed})
        }
        else {
            this.audioReset();
        }
    }

    convertTime(timestamp) {
        let minutes = Math.floor(timestamp / 60);
        let seconds = Math.floor(timestamp - (minutes * 60));
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        timestamp = minutes + ':' + seconds;
        return timestamp;
    }

    setPlayTime(e) {
        let elementWidth = e.currentTarget.clientWidth;
        let clickLocation = e.pageX - e.currentTarget.getBoundingClientRect().left;
        let currentTime = this.state.length * (clickLocation / elementWidth);

        this.audioPlayFrom(currentTime);
    }

    render() {
        return (
            <div className={styles.container}>
                {/* <button onClick={this.togglePlay} className={this.state.playing ? styles.active : ""}>
                    {this.state.playing ? <IconPause /> : <IconPlay />}
                </button> */}
                <PlayButton onClick={this.togglePlay} playing={this.state.playing} />
                <Scrubber 
                    handleClick={this.setPlayTime} 
                    playing={this.state.playing} 
                    currentTime={this.convertTime(this.state.currentTime)}
                    percentPlayed={this.state.percentPlayed}
                    totalTime={this.convertTime(this.state.length)}/>
                <audio id="audio">
                    <source 
                        src={this.state.audioUrl} 
                        type={this.state.contentType} />
                </audio>
            </div>
        )
    }
}

export default AudioPlayer
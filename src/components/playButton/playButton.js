import React from 'react'
import Link from 'gatsby-link'
import styles from './_playButton.module.scss'
import IconsUi from '../icons/iconsUi.js'

class PlayButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {clicked: false}

    this.buttonClick = this.buttonClick.bind(this)
    this.getStyles = this.getStyles.bind(this)
  }

  buttonClick() {
    this.setState({clicked: true});
    this.timeout = setTimeout( () => this.setState({clicked: false}), 300 );
  }

  getStyles() {
    let playing = this.props.playing ? styles.active : "";
    let clicked = this.state.clicked ? styles.clicked : "";

    return playing + " " + clicked;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render () {
    return (
      <button
        className={(this.state.clicked ? styles.clicked : "") + (this.props.waiting ? " " + styles.waiting : "") + " " + styles.playButton}
        onClick={(e) => {this.props.onClick(); this.buttonClick();}}>
        <IconsUi name={this.props.playing ? 'pause' : 'play'} />
      </button>
    )
  }
}

export default PlayButton


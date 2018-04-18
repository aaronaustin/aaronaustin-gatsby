import React from 'react'
import Link from 'gatsby-link'
import Logo from '../logo/logo.js'
import MenuIcon from './menuIcon/menuIcon.js'
import MainMenu from './mainMenu/mainMenu.js'
import Transition from 'react-transition-group'
import styles from './_navbar.module.scss'

class Navbar extends React.Component {

  constructor() {
    super();
    this.state = { in: false }
  }

  toggleState = () => {
    this.setState({ in: !this.state.in })
  }

  render() {
    return (
      <header className={this.state.in ? styles.container + ' ' + styles.active : styles.container}>
        <div className={styles.inner}>
          <Link to="/">
            <Logo />
          </Link>
          <MenuIcon in={this.state.in} onClick={this.toggleState}/>
        </div>
        <MainMenu in={this.state.in} links={this.props.links} onClick={this.toggleState}/>
      </header>
    )
  }
}
export default Navbar

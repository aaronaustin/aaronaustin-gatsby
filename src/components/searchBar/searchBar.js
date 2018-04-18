import React from 'react'
import styles from './_searchBar.module.scss'
import IconsUi from '../icons/iconsUi.js'
import { CSSTransition } from 'react-transition-group'
import Animation from './animation.js'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {focused : false};
        
        this.handleChange = this.handleChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    //show and hide buttonwrapper based on focus.
    //make a new component of button checkbox that outputs a value
    handleChange(e) {
        //if a checkbox is clicked and turned off
        let value = { query: e.target.value};
        this.props.onQueryChange(value);
        // if (e.target.type === "checkbox" && !e.target.checked) {
        //     this.props.onQueryChange('');
        // }
        // else {
        //     this.props.onQueryChange(e.target.value);
        // }
    }
    handleClick(e) {
        let value = { category: '' };

        if (e.target.checked && e.target.value !== this.props.category) {
            value = { category: e.target.value };
        }
        else if (e.target.checked && e.target.value === this.props.category) {
            value = { category: '' };
            e.target.checked = false;
        }
        this.props.onQueryChange(value);
    }
    onFocus() {
        console.log('focused!');
        this.setState({focused: true});
    }
    handleClose() {
        console.log('blurred!');
        this.setState({ focused: false });
        this.props.onQueryChange({ query: '', category: '' });
    }

    render() {
        //add close button.  animate open on focus so that the height doesn't have to be explicit.
        return (
            <div className={this.state.focused ? styles.container + ' ' + styles.focused : styles.container} >
                <div className={styles.inner}>
                    <div className={styles.inputWrapper}>
                        <span className={styles.icon}>
                            <IconsUi name={'search'} />
                        </span>
                        <input 
                            type="text" 
                            onChange={this.handleChange} 
                            value={this.props.value} 
                            placeholder={this.props.placeholder} 
                            onFocus={this.onFocus}/>
                        <span 
                            className={styles.close} 
                            onClick={this.handleClose}>
                            <IconsUi name={'close'} />
                        </span>
                        <div className={styles.line}></div>
                    </div>
                    <Animation in={this.state.focused}>
                        <div className={styles.buttonWrapper}>
                            {this.props.filters.map(({node}) => (
                                <span key={node.title}>
                                    <input 
                                        type="radio" 
                                        className={styles.toggleButton}
                                        id={node.title} 
                                        name="category" 
                                        value={node.title}
                                        onClick={this.handleClick} />
                                    <label 
                                        className={styles[node.color]}
                                        htmlFor={node.title}>
                                        {node.title}
                                    </label>
                                </span>
                            ))}
                            
                        </div>
                    </Animation>
                </div>
            </div>
        )
    }
}

export default SearchBar
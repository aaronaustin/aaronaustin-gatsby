
import React from 'react'
import styles from './_textCircle.module.scss'

const textCircle = (props) => {
    const letter = props.text ? props.text.charAt(0) : "A";
    return (
        <span className={`textCircle ${styles.container} ${styles[props.color]}`}>
            {letter}
        </span>
    )
}

export default textCircle




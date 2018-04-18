import React from 'react'
import IconsUi from '../icons/iconsUi'
import styles from './_inputField.module.scss'

const InputField = (props) => (
  <div className={styles.container}>
      {props.type != 'textarea' &&
        <input type={props.type ? props.type : 'text'} name={props.name} placeholder=" " required/>
      }
      {props.type == 'textarea' &&
      <textarea name={props.name} rows="1" placeholder=" " required ></textarea>
      }
      <div className={styles.line}></div>
      <label>{props.label}</label>
      <div className={styles.notification}>
        {props.notification}
      </div>
    </div>
)

//more here: https://css-tricks.com/form-validation-ux-html-css/
export default InputField

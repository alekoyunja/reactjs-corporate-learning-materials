import React from 'react';
import styles from './Button.module.css';

const Button = ({title, onClicked}) => {
    return(
        <button className={styles.button} type="button" onClick={onClicked}>{title}</button>
    );
};

export default Button;
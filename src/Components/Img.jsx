import React from 'react';
import styles from './img.module.css'

function Img(props) {
    return (
        <>
            <img src={props.src} className={styles.img} onClick={props.onClick}/>
        </>
    )
}

export default Img;
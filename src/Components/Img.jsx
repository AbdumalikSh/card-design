import React, { useContext } from 'react';
import styles from './img.module.css'
import { Context } from '../App';

const Img = ({src}) => {
    const {imageClick} = useContext(Context)
    return (
        <>
            <img src={src} className={styles.img} onClick={imageClick}/>
        </>
    )
}

export default Img;
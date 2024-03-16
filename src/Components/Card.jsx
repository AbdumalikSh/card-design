import React, { useContext } from 'react';
import styles from './card.module.css'
import { Context } from '../App';

const Card = () => {
    const {color, text, image} = useContext(Context)
    return (
        <>
            <div className = {styles.card} style={{backgroundColor: color}}>
                <img src={image} className={styles.img}/>
                <h1 className={styles.name}>{text}</h1>
            </div>
        </>
    )
}
export default Card;
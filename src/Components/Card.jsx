import React from 'react';
import styles from './card.module.css'

function Card (props) {
    return (
        <>
            <div className = {styles.card} style={props.style}>
                <img src={props.src} className={styles.img}/>
                <h1 className={styles.name}>{props.name}</h1>
            </div>
        </>
    )
}
export default Card;
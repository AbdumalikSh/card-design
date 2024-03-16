import React, { useContext } from 'react';
import styles from './img.module.css'
import { Context } from '../App';

const Img = ({src}) => {
    const {state, setState} = useContext(Context)

    const imageClick = (e) => {
        setState({...state, image: e.target.src})
    }

    return (
        <>
            <img src={src} className={styles.img} onClick={imageClick}/>
        </>
    )
}

export default Img;
import React, { useContext } from 'react';
import Img from './Img';
import styles from './imgGallery.module.css'
import ImgSrc from './ImgSrc'
import { Context } from '../App';

const ImgGallery = () => {
    const {state, setState} = useContext(Context)
    

    const images = ImgSrc.map((img, index) => {
        return <Img key = {index} src = {img} onClick = {e => setState({...state, image: e.target.src})}/>
    })
    return (
        <>
            <div className={styles.imgs}>
                {images}
            </div>
        </>
    )
}

export default ImgGallery;
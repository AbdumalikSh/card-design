import React, { useContext } from 'react';
import Img from './Img';
import styles from './imgGallery.module.css'
import ImgSrc from './ImgSrc'
import { Context } from '../App';

const ImgGallery = () => {
    const {imageClick} = useContext(Context)
    const images = ImgSrc.map((img, index) => {
        return <Img key = {index} src = {img} onClick = {imageClick}/>
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
import React from 'react';
import Img from './Img';
import styles from './imgGallery.module.css'
import ImgSrc from './Images'

function ImgGallery (props) {
    const images = ImgSrc.map((img, index) => {
        return <Img key = {index} src = {img} onClick = {props.onClick}/>
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
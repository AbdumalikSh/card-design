import React from 'react';
import Img from './Img';
import styles from './imgGallery.module.css'
import img1 from './Images/1.png'
import img2 from './Images/2.png'
import img3 from './Images/3.png'
import img4 from './Images/4.png'
import img5 from './Images/5.png'
import img6 from './Images/6.png'
import img7 from './Images/7.png'
import img8 from './Images/8.png'
import img9 from './Images/9.png'

function ImgGallery (props) {
    return (
        <>
            <div className={styles.imgs}>
                <Img src = {img1} onClick={props.onClick}/>
                <Img src = {img2} onClick={props.onClick}/>
                <Img src = {img3} onClick={props.onClick}/>
                <Img src = {img4} onClick={props.onClick}/>
                <Img src = {img5} onClick={props.onClick}/>
                <Img src = {img6} onClick={props.onClick}/>
                <Img src = {img7} onClick={props.onClick}/>
                <Img src = {img8} onClick={props.onClick}/>
                <Img src = {img9} onClick={props.onClick}/> 
            </div>
        </>
    )
}

export default ImgGallery;
import React, { useContext } from 'react';
import { Context } from '../App';


function Input() {
    const {color, text, changeColor, changeText} = useContext(Context)
        return <>
            <input type = 'color' value = {color} onChange={changeColor} />  
            <input type = 'text' value = {text} onChange={changeText} />   
        </>
}

export default Input;
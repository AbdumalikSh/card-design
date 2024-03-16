import React, { useContext } from 'react';
import { Context } from '../App';


function Input({type}) {
    const {color, text, changeColor, changeText} = useContext(Context)
    if (type === 'color'){
        return <input type = 'color' value = {color} onChange={changeColor} />  
    } else {
        return <input type = 'text' value = {text} onChange={changeText} />   
    }
}

export default Input;
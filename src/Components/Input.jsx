import React, { useContext } from 'react';
import { Context } from '../App';


function Input() {
    const {state, setState} = useContext(Context)
    const {color, text} = state;
    
        return <>
            <input type = 'color' value = {color} onChange={(e) => setState({...state, color: e.target.value})} />  
            <input type = 'text' value = {text} onChange={(e) => setState({...state, text: e.target.value})} />   
        </>
}

export default Input;
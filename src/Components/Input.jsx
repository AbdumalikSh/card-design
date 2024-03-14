import React from 'react';

function Input(props) {
    if (props.type === 'color'){
        return <input type = 'color' value = {props.value} onChange={props.onChange} />  
    } else {
        return <input type='text' value = {props.value} onChange={props.onChange} />   
    }
}

export default Input;
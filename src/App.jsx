import React, { createContext, useState } from 'react';
import './App.css'
import ImgGallery from './Components/ImgGallery';
import Input from './Components/Input';
import Card from './Components/Card';

export const Context = createContext();

function App() {
  const [color, setColor] = useState('#000');
  const [text, setText] = useState('');
  const [image, setImage] = useState();
  
  const changeColor = (event) => {
    setColor(event.target.value)
  }
  
  const changeText = (event) => {
    setText(event.target.value)
  }
  
  const imageClick = (event) => {
    setImage(event.target.src)
  }

  return (
    <Context.Provider value={{color, text, image, changeColor, changeText, imageClick}}>
      <>
        <Input type = 'color' value = {color} onChange = {changeColor}/>
        <Input value = {text} onChange = {changeText}/>
        <ImgGallery /> 
        <Card />  
      </>
    </Context.Provider>
  )
}

export default App

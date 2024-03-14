import React, { useState } from 'react';
import './App.css'
import ImgGallery from './Components/ImgGallery';
import Input from './Components/Input';
import Card from './Components/Card';

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
  
  const imageClick = (event, src) => {
    setImage(event.target.src)
    console.log(event.target.src);
  }

  return (
    <>
      <Input type = 'color' value = {color} onChange = {changeColor}/>
      <Input value = {text} onChange = {changeText} />
      <ImgGallery onClick = {imageClick}/> 
      <Card name = {text} style = {{ backgroundColor: color }} src = {image}/>  
    </>
  )
}

export default App

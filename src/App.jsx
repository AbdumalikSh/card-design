import React, { createContext, useState } from 'react';
import './App.css'
import ImgGallery from './Components/ImgGallery';
import Input from './Components/Input';
import Card from './Components/Card';

export const Context = createContext();

const initialState = {
  color: '#000',
  text: "",
  image: '',
}

function App() {
  const [state, setState] = useState(initialState);


  return (
    <Context.Provider value={{state, setState}}>
      <>
        <Input />
        <ImgGallery /> 
        <Card />  
      </>
    </Context.Provider>
  )
}

export default App

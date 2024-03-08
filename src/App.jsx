
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() { 
  let Title="Simply enter your text and choose the case you want to convert it to.";
  return (
    <>
    <div className='container' >
      {/* Navbar */}
     <div>
     <Navbar></Navbar> 
     </div>
      {/* Textarea */}
      <Textarea Title={Title}></Textarea>
    </div>
    </>
  )
}

export default App

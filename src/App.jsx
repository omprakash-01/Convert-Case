import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() { 
  let [Mode, setMode]=useState('light');
  let toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
     document.body.style.backgroundColor='#042743' 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white' 
    }
  }
  let Title="Simply enter your text and choose the case you want to convert it to.";
  return (
    <>
    <div className='container' >
      {/* Navbar */}
     <div>
     <Navbar mode={Mode} toggleMode={toggleMode}></Navbar> 
     </div>
      {/* Textarea */}
      <Textarea Title={Title} mode={Mode}></Textarea>
    </div>
    </>
  )
}

export default App;
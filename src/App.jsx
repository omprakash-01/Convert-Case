
import './App.css'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() {
  let Title="Simply enter your text and choose the case you want to convert it to.";
  return (
    <>
      {/* Navbar */}
     <Navbar></Navbar> 
     {/* Textarea */}
     <Textarea Title={Title}></Textarea>

    </>
  )
}

export default App

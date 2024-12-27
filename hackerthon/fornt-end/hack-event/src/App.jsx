import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from './component/home'
import { SignUp } from './component/signup'
import { LongIn } from './component/login';
import { Events } from './component/events';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/login' element={<LongIn/>}/>
      <Route path='/event' element={<Events/>}/>
    </Routes>
  
    </>
  )
}

export default App

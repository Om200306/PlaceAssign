import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from './component/home'
import { SignUp } from './component/signup'
import { LongIn } from './component/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/login' element={<LongIn/>}/>
    </Routes>
  
    </>
  )
}

export default App

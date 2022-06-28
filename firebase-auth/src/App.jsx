import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import {Register} from "./Components/Register"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Firebase Authentication</h1>
      <center>
        <Register/>
      </center>
      {/* <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes> */}

    </div>
  )
}

export default App

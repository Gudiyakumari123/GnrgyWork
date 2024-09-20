import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import logo from './assets/logo.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <img src={logo} alt="Helloo" width='100%' />
        {/* <img src={logo} alt="hhhhh" /> */}
        <div style={{padding:'10px'}}>
        <Home/>
        </div>
        
       </div>
    </>
  )
}

export default App

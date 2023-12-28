import React from 'react'
import "./App.css"
import Home from './Component/Home/Home'
import Nav from './Component/Navbar/Nav'
const App = () => {
  return (
    <div className='app'>
      <Nav/>
      <Home/>
    </div>
  )
}

export default App
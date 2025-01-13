import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Routes/Home'
import { Quiz } from './Routes/Quiz'
import { LeaderBoard } from './Routes/Leader'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Routes/Navbar'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/leaderboard' element={<LeaderBoard/>} />
      </Routes>

    </>
  )
}

export default App

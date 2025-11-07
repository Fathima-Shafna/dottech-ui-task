import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import MensClothing from './pages/MensClothing/MensClothing'
import WomensClothing from './pages/WomensClothing/WomensClothing'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens-clothing" element={<MensClothing />} />
          <Route path="/womens-clothing" element={<WomensClothing />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
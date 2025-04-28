import React from 'react'
import Create from './components/Create'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
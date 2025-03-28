import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import ShowProducts from './components/ShowProducts'


const App = () => {
  return (

    <div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path="/signup"element={<SignUp/>}/>
        <Route path='/welcome' element={<ShowProducts/>}/>
      </Routes> 
    </div>
  )
}

export default App
import { BrowserRouter, Route, Routes } from 'react-router'

import Landing from './dashboard/Landing.jsx'
import Register from './login/Register.jsx'
import Login from './login/Login.jsx'

export default function(){
  return (
  <BrowserRouter>
    <Routes>
      
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Login />} />

      <Route path='/dashboard' element={<Landing />} />

    </Routes>

  </BrowserRouter>
  )
}
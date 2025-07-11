import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router'

import Landing from './Landing.jsx'
import TodoList from './THEtodolist/ToDoList.jsx'
import PlaceholderList from './THEtodolist/placeholder.jsx'
import Register from './login/Register.jsx'
import Login from './login/Login.jsx'

export default function(){
  return (
  <BrowserRouter>
    <Routes>
      
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Login />} />

      <Route path="thetodolist">
        <Route index element={<TodoList/>} />
        <Route path="wrong" element={<PlaceholderList />} />
      </Route>

      <Route path='/dashboard' element={<Landing />} />

    </Routes>

  </BrowserRouter>
  )
}
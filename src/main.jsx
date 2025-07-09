import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router'

import App from './App.jsx'
import TodoList from './THEtodolist/ToDoList.jsx'
import PlaceholderList from './THEtodolist/placeholder.jsx'
import Register from './login/Register.jsx'
import Login from './login/Login.jsx'

import './fonts.css'
/*const newRouter = createBrowserRouter([
  {path: '/', element: App}
])*/

const Root = createRoot(document.getElementById('root'))
Root.render(

  <BrowserRouter>
    <Routes>
      
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Login />} />

      <Route path="thetodolist">
        <Route index element={<TodoList/>} />
        <Route path="wrong" element={<PlaceholderList />} />
      </Route>

      <Route path='/dashboard' element={<App />} />

    </Routes>

  </BrowserRouter>,
)

/*Root.render(
  <RouterProvider router={newRouter} />
);*/


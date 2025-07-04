import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router'

import './index.css'

import App from './App.jsx'
import TodoList from './THEtodolist/App.jsx'
import PlaceholderList from './THEtodolist/placeholder.jsx'
import Register from './login/App_Register.jsx'

/*const newRouter = createBrowserRouter([
  {path: '/', element: App}
])*/

const Root = createRoot(document.getElementById('root'))
Root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route path="thetodolist">
        <Route index element={<TodoList/>} />
        <Route path="wrong" element={<PlaceholderList />} />
      </Route>

      <Route path='/register' element={<Register />} />

    </Routes>

  </BrowserRouter>,
)

/*Root.render(
  <RouterProvider router={newRouter} />
);*/


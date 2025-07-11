import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router'

import App from './App.jsx'
import './fonts.css'
/*const newRouter = createBrowserRouter([
  {path: '/', element: App}
])*/

const Root = createRoot(document.getElementById('root'))
Root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)

/*Root.render(
  <RouterProvider router={newRouter} />
);*/


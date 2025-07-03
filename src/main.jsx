import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'

import './index.css'
import App from './App.jsx'

/*const newRouter = createBrowserRouter([
  {path: '/', element: App}
])*/

const Root = createRoot(document.getElementById('root'))
Root.render(

  <StrictMode>
    <App />
  </StrictMode>,
)

/*Root.render(
  <RouterProvider router={newRouter} />
);*/


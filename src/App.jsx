import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Home from './Components/Pages/Home/Home'
import Error from './Components/Pages/Home/Error'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />
      }
    ]
  )
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />

    </div>
  )
}

export default App

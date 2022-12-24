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
import { AuthProvider } from './Context/AuthContext'
import LoginPage from './Components/Pages/Home/Login/LoginPage'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AuthProvider><Home /></AuthProvider>,
        errorElement: <Error />
      },
      {
        path: "/login",
        element: <AuthProvider><LoginPage /></AuthProvider>,
      }
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

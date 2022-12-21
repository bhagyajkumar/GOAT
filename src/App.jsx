import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import DebtDetails from './Components/TransactionCards/Cards'
import { Container } from 'react-bootstrap'
function App() {
  let len = 1
  return (
    <div className="App">
      <NavBar />
      <Container>
        <DebtDetails length={len} />
      </Container>

    </div>
  )
}

export default App

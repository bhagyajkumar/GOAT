import React from 'react'
import DebtDetails from '../../TransactionCards/DebtDetails'
import { Container } from 'react-bootstrap'
import NavBar from '../../NavBar/NavBar'
import { AuthProvider } from '../../../Context/AuthContext'

function Home() {
    return (
        <>
            <NavBar />
            <Container>
                <DebtDetails />
            </Container>
        </>
    )
}

export default Home
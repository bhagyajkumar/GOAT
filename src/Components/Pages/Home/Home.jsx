import React from 'react'
import DebtDetails from '../../TransactionCards/DebtDetails'
import { Container } from 'react-bootstrap'
import NavBar from '../../NavBar/NavBar'
import { AuthProvider } from '../../../Context/AuthContext'

function Home() {
    return (
        <AuthProvider>
            <NavBar />
            <Container>
                <DebtDetails />
            </Container>
        </AuthProvider>
    )
}

export default Home
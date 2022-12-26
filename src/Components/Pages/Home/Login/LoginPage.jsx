import React, { useContext } from 'react'
import { Card, Container, Form, FormControl } from 'react-bootstrap'
import AuthContext from '../../../../Context/AuthContext'
import NavBar from '../../../NavBar/NavBar'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    let { loginUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value
        loginUser(username, password)
        navigate("/")
    }

    return (
        <>
        <NavBar />
            <Container>
                <Card>
                    <Card.Header>
                        <h3>signin to your account</h3>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleLogin}>
                            <FormControl placeholder='username' name='username' />
                            <br />
                            <FormControl placeholder='password' name='password' />
                            <br />
                            <input type="submit" className='btn btn-primary' />
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default LoginPage
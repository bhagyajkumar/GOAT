import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError()
    return (
        <Container>
            <Card>
                <Card.Header>
                    <h1>Error {error?.status}</h1>
                </Card.Header>
                <Card.Body>
                    <h3>
                        <p>
                            {error?.error}
                        </p>
                    </h3>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Error
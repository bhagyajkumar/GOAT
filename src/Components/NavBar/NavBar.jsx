import React from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";


function NavBar() {

    const { user } = useContext(AuthContext)

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#">G.O.A.T</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Friends</Nav.Link>
                            <NavDropdown title={user ? user.username : "Account"} id="navbarScrollingDropdown">
                                {
                                    user ?
                                        (
                                            <NavDropdown.Item href="#action4">
                                                Logout
                                            </NavDropdown.Item>
                                        )
                                        :
                                        (
                                            <>
                                                <NavDropdown.Item href="#action4">
                                                    Login
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action4">
                                                    Signup
                                                </NavDropdown.Item>
                                            </>
                                        )
                                }
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <br />
            <br />
        </>
    )

}


export default NavBar
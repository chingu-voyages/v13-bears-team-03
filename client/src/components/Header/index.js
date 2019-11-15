import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default () => (
    <>
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand as={Link} to="/">Sixt-Clone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/sign-up">Sign-Up</Nav.Link>
                    <Nav.Link as={Link} to="/sign-in">Sign-In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)
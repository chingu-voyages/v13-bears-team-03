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
                <Nav className="top-nav-bar">
                    <Nav.Link href="/landing_page">Available Trucks</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>

)
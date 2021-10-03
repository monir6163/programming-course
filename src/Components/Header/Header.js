import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white"
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <NavLink to="/" className="text-decoration-none fw-bolder mx-2">Programming</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" className="text-decoration-none fw-bolder mx-2 nav-link" activeStyle={activeStyle}>
                                Home
                            </NavLink>
                            <NavLink to="/services" className="text-decoration-none fw-bolder mx-2 nav-link" activeStyle={activeStyle}>
                                Services
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const codeIcon = <FontAwesomeIcon icon={faCode} />
    const activeStyle = {
        fontWeight: "bold",
        color: "white"
    };
    return (
        <div className="sticky-top">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <NavLink to="/" className="text-decoration-none fw-bolder mx-2 logo">{codeIcon} Programming</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" className="text-decoration-none fw-bolder mx-2 mt-1 nav-link" activeStyle={activeStyle}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className="text-decoration-none fw-bolder mx-2 mt-1 nav-link" activeStyle={activeStyle}>
                                About Us
                            </NavLink>
                            <NavLink to="/services" className="text-decoration-none fw-bolder mx-2 mt-1 nav-link" activeStyle={activeStyle}>
                                Services
                            </NavLink>
                            <NavLink to="/contact" className="text-decoration-none fw-bolder mx-2 mt-1 nav-link" activeStyle={activeStyle}>
                                Contact Us
                            </NavLink>
                            <NavLink to="/enroll" className="text-decoration-none fw-bolder mx-2 nav-link" activeStyle={activeStyle}>
                                <Button variant="secondary">Enroll now</Button>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import React from "react";
import "./css/NaviBar.css"


    function NaviBar() {
        return (
            <Navbar expand="lg" className="main_header_section">
                <Container className="navbar_wrapper">
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar">
                            <Nav.Link className="navbar_item">
                                <Link to={"/home"} className="navbar_item_link">About</Link>
                            </Nav.Link>
                            <Nav.Link className="navbar_item">
                                <Link to={"/services"} className="navbar_item_link">Services</Link>
                            </Nav.Link>
                            <NavDropdown title="Coach Trainig" id="basic-nav-dropdown" className="navbar_item">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Blog" id="basic-nav-dropdown" className="navbar_item">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="navbar_item">
                                <Link to={"/testimonials"} className="navbar_item_link">Testimonials</Link>
                            </Nav.Link>
                            <Nav.Link className="navbar_item">
                                <Link to={'/contact'} className="navbar_item_link">Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    export default NaviBar;


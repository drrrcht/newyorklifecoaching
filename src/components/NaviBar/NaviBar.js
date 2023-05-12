import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import React from "react";
import "./css/NaviBar.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function NaviBar() {
    return (
        <Navbar expand="lg" className="main_header_section">
            <Container className="navbar_wrapper">
                <Navbar.Brand style={{marginRight: "90px", textDecoration: "none" }}>
                    <Link to={"/"} className="navbar_brand">
                        React-Bootstrap
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar">
                        <Nav.Link className="navbar_item">
                            <Link to={"/about"} className="navbar_item_link">About</Link>
                        </Nav.Link>
                        <Nav.Link className="navbar_item">
                            <Link to={"/services"} className="navbar_item_link">Services</Link>
                        </Nav.Link>
                        <NavDropdown title="Coach Trainig" id="basic-nav-dropdown" className="navbar_item"
                                     style={{
                                         textDecoration: "none",
                                         fontFamily: 'Raleway',
                                         fontStyle: "normal",
                                         fontWeight: "600",
                                         fontSize: "17px",
                                         color: "#333333 !important",
                                     }}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>

                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className="navbar_item" style={{background:"none", border: "none"}}>
                                <Link to={"/blog"} className="navbar_item_link">Blog</Link>
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="white">
                                <Dropdown.Item href="#/action-1">
                                    Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


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

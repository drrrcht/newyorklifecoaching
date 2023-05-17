import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./css/NaviBar.css"
import Dropdown from 'react-bootstrap/Dropdown';


function NaviBar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      setIsOpen(true);
      setTimeout(() => setIsOpen(false), 100);
    }, []);

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
                        <Dropdown>
                            <Dropdown.Toggle className="navbar_item" style={{background:"none", border: "none"}}>
                                <Link to={"/services"} className="navbar_item_link">Услуги</Link>
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="white" className="shadow" show={isOpen}>
                                <Dropdown.Item className="navbar_item_link" href="services?category=action-1">Топ 1</Dropdown.Item>
                                <Dropdown.Item className="navbar_item_link" href="services?category=action-2">Топ 2</Dropdown.Item>
                                <Dropdown.Item className="navbar_item_link" href="services?category=action-3">Топ 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link className="navbar_item">
                            <Link to={"#"} className="navbar_item_link">Магазин</Link>
                        </Nav.Link>
                        <Nav.Link className="navbar_item">
                            <Link to={"/about"} className="navbar_item_link">О себе</Link>
                        </Nav.Link>
                        <Nav.Link className="navbar_item">
                            <Link to={'/contact'} className="navbar_item_link">Контакты</Link>
                        </Nav.Link>
                        <Nav.Link className="navbar_item">
                            <Link to={"/testimonials"} className="navbar_item_link">Отзывы</Link>
                        </Nav.Link>

                        <Dropdown>
                            <Dropdown.Toggle className="navbar_item" style={{background:"none", border: "none"}}>
                                <Link to={"/blog"} className="navbar_item_link">Блог</Link>
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="white" className="shadow" show={isOpen}>
                                <Dropdown.Item className="navbar_item_link" href="blog?category=action-1">Топ 1</Dropdown.Item>
                                <Dropdown.Item className="navbar_item_link" href="blog?category=action-2">Топ 2</Dropdown.Item>
                                <Dropdown.Item className="navbar_item_link" href="blog?category=action-3">Топ 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NaviBar;

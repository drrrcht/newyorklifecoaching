import React from "react";
import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Test () {
    return(
        <>
            sdfsdfsdfsdfsdf
            <Navbar>
                    <NavDropdown title="Blog" id="responsive-nav-dropdown">
                        <NavDropdown.Item>Action</NavDropdown.Item>
                        <NavDropdown.Item>Another action</NavDropdown.Item>
                        <NavDropdown.Item>Something</NavDropdown.Item>
                    </NavDropdown>
            </Navbar>
        </>
    );
}

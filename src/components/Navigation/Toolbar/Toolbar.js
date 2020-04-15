import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import classes from './Toolbar.css';
import logo from '../../../assets/Images/logo2.png';

const toolbar = (props) => (
   <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="200"
        height="60"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="ml-auto" activeKey="/home">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Link href="#">My Items</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
            <Nav.Link href="#">LogIn</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>

   </>
);

export default toolbar;
import React from 'react';
import styles from './Toolbar.module.css';
import logo from '../../../../assets/Images/logo2.png';
import image2 from '../../../../assets/Images/bg.jpg';
import { IndexLinkContainer} from "react-router-bootstrap";
import { Nav, Navbar} from 'react-bootstrap'

const toolbar  = (props) => {
  return (
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg"  fixed="top" >
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="200"
          height="60"
          className="d-inline-block align-top"
        />{' '}
  
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><IndexLinkContainer to={"/"}><Nav.Link>Home</Nav.Link></IndexLinkContainer></Nav.Item>
            <Nav.Item><IndexLinkContainer to={"/about"}><Nav.Link>About Us</Nav.Link></IndexLinkContainer></Nav.Item>
            {props.isAuth
              ?  <Nav.Item><IndexLinkContainer to={"/dashboard"}><Nav.Link>Dashboard</Nav.Link></IndexLinkContainer></Nav.Item>
              : null }
            {!props.isAuth
              ? <Nav.Item><IndexLinkContainer to={"/auth"}><Nav.Link>Authenticate</Nav.Link></IndexLinkContainer></Nav.Item>
            : <Nav.Item ><IndexLinkContainer  to={"/logout"}><Nav.Link>Logout</Nav.Link></IndexLinkContainer></Nav.Item> 
            }
    
          </Nav>   
        </Navbar.Collapse>
      </Navbar>
  );
}

export default toolbar;
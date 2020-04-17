import React, {Component} from 'react';
import styles from './Toolbar.module.css';
import logo from '../../../../assets/Images/logo2.png';
import image from '../../../../assets/Images/bg1.png';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from "mdbreact";

class Toolbar extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

    render(){
    
      console.log(`isAuthToolbar ${this.props.isAuth}`);
      return(
        
        <div>
          <header>
              <MDBNavbar color="black" fixed="top" dark expand="md" >
              <MDBNavbarBrand href="/">
                <img
                  alt=""
                  src={logo}
                  width="200"
                  height="60"
                  className="d-inline-block align-top"
                />{' '}
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>

                <MDBNavItem active>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/about">About Us</MDBNavLink>
                </MDBNavItem>

                {this.props.isAuth
                   ? <MDBNavItem>
                       <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
                    </MDBNavItem>
                    : null }
                {!this.props.isAuth
                    ? <MDBNavItem>
                         <MDBNavLink to="/auth">Authenticate</MDBNavLink>
                       </MDBNavItem>
                    :  <MDBNavItem>
                           <MDBNavLink to="/logout">Logout</MDBNavLink>
                        </MDBNavItem> }
              </MDBNavbarNav> 
            </MDBCollapse>
            </MDBNavbar>
          </header>
        </div>
       
      );
    }
}


export default Toolbar;
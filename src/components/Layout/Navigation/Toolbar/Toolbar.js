import React, {Component} from 'react';
import styles from './Toolbar.module.css';
import logo from '../../../../assets/Images/logo2.png';
import image2 from '../../../../assets/Images/bg.jpg';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from "mdbreact";

class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  
  render() {
    return (
      <div>
          <header>
            <MDBNavbar color="black" fixed="top" dark expand="md">
              <MDBContainer>
                <MDBNavbarBrand href="/">
                <img
                  alt=""
                  src={logo}
                  width="200"
                  height="60"
                  className="d-inline-block align-top"
                />{' '}
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav right>
                  <MDBNavItem active >
                   <MDBNavLink  to="/">Home</MDBNavLink>
                 </MDBNavItem>
                 <MDBNavItem >
                   <MDBNavLink  to="/about">About Us</MDBNavLink>
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
              </MDBContainer>
            </MDBNavbar>
          <MDBView>
            <img 
                src={image2}
                className={`img-fluid ${styles.size}`}
                alt=""
              />
            <MDBMask overlay="black-slight" className="flex-center flex-column text-white text-center">
                <h2>This is Barter</h2>
                <h5>It will always be a place that you can barter</h5>  
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}


export default Toolbar;
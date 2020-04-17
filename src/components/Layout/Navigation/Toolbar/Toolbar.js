import React, {Component} from 'react';
import styles from './Toolbar.module.css';
import logo from '../../../../assets/Images/logo2.png';
import image from '../../../../assets/Images/bg1.png';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from "mdbreact";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false

    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

    render(){
    
      return(
        <div>
          <header>
              <MDBNavbar color="bg-primary" dark expand="md" fixed="top" scrolling transparent>
              <MDBNavbarBrand href="/">
                <img
                  alt=""
                  src={logo}
                  width="200"
                  height="60"
                  className="d-inline-block align-top"
                />{' '}
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapse} navbar>
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
                         <MDBNavLink to="/auth">Authentication</MDBNavLink>
                       </MDBNavItem>
                    :  <MDBNavItem>
                           <MDBNavLink to="/">Logout</MDBNavLink>
                        </MDBNavItem> }
              </MDBNavbarNav>
              
            </MDBCollapse>
            </MDBNavbar>
            <MDBView className={styles.view}>
            <img 
                src={image}
                className="img-fluid"
                alt=""
              />
              <MDBMask overlay="black-light" className={`text-white text-center ${styles.caption}`}>
                <h2>This is Barter</h2>
                <h5>It will always be a place that you can barter</h5>
                <br />
                {/* <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p> */}
              </MDBMask>
          </MDBView>
          </header>
        </div>
       
      );
    }
}


export default Toolbar;
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
                  <MDBNavItem className={styles.NavigationItem} >
                   <MDBNavLink activeClassName={styles.active} to="/">Home</MDBNavLink>
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

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.
          </p>
          </MDBContainer>
        </main>
      </div>
    );
  }



  // state = {
  //   isOpen: false
  // };
  
  // toggleCollapse = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }

  //   render(){
    
  //     console.log(`isAuthToolbar ${this.props.isAuth}`);
  //     return(
        
  //       <div>
  //         <header>
  //             <MDBNavbar color="black" fixed="top" dark expand="md" >
  //             <MDBNavbarBrand href="/">
  //               <img
  //                 alt=""
  //                 src={logo}
  //                 width="200"
  //                 height="60"
  //                 className="d-inline-block align-top"
  //               />{' '}
  //             </MDBNavbarBrand>
  //             <MDBNavbarToggler onClick={this.toggleCollapse} />
  //             <MDBCollapse isOpen={this.state.isOpen} navbar>
  //             <MDBNavbarNav right>

  //               <MDBNavItem active>
  //                 <MDBNavLink to="/">Home</MDBNavLink>
  //               </MDBNavItem>
  //               <MDBNavItem>
  //                 <MDBNavLink to="/about">About Us</MDBNavLink>
  //               </MDBNavItem>

  //               {this.props.isAuth
  //                  ? <MDBNavItem>
  //                      <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
  //                   </MDBNavItem>
  //                   : null }
  //               {!this.props.isAuth
  //                   ? <MDBNavItem>
  //                        <MDBNavLink to="/auth">Authenticate</MDBNavLink>
  //                      </MDBNavItem>
  //                   :  <MDBNavItem>
  //                          <MDBNavLink to="/logout">Logout</MDBNavLink>
  //                       </MDBNavItem> }
  //             </MDBNavbarNav> 
  //           </MDBCollapse>
  //           </MDBNavbar>
  //         </header>
  //       </div>
       
  //     );
  //   }
}


export default Toolbar;
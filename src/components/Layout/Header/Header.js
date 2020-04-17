import React from 'react';
import image from '../../../assets/Images/bg1.png';
import styles from './Header.module.css';
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";


const header = (props) => {
   return (
     
         <MDBRow>
            <MDBCol md="12" >
            <MDBView>
              <img 
                src={image}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="teal-slight">
                <p className="black-text">Page's Name</p>
              </MDBMask>
            </MDBView>
            </MDBCol>
         </MDBRow>
     
   );
}

export default header;
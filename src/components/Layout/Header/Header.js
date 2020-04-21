import React from 'react';
import image from '../../../assets/Images/1.jpg';
import styles from './Header.module.css';
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";

const header = (props) => {
  
   return (
         <MDBRow >
            <MDBCol md="12" >
            <MDBView>
              <img 
                src={image}
                className="img-fluid"
      
                alt=""
              />
              <MDBMask className="flex-center  flex-column text-white text-center "  overlay="black-slight">
                <h2>This is Barter</h2>
                <h5>It will always be a place that you can barter</h5>    
              </MDBMask>
            </MDBView>
            </MDBCol>
         </MDBRow>
   );
}

export default header;
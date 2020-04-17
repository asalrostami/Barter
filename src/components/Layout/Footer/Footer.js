import React from 'react';
import styles from './Footer.module.css';
import {MDBFooter} from 'mdbreact';


const footer = () =>  {
    return (
        <MDBFooter  className={`page-footer font-small  fixed-bottom ${styles.color}`} sticky="button">
            <div className="footer-copyright text-center py-3">
                &copy; {new Date().getFullYear()} Copyright: 
                <a href="https://www.Barter.com"> Barter.com </a>   
            </div> 
        </MDBFooter>
    );    
}


export default footer;
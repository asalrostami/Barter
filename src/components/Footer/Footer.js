import React from 'react';
import classes from './Footer.css';
import {MDBFooter} from 'mdbreact';


const footer = () =>  {
    return (
        <MDBFooter color="unique-color-dark" className="page-footer font-small  fixed-bottom" sticky="button">
            <div className="footer-copyright text-center py-3">
                &copy; {new Date().getFullYear()} Copyright: 
                <a href="https://www.Barter.com"> Barter.com </a>   
            </div> 
        </MDBFooter>
    );    
}


export default footer;
import React from 'react';
import styles from './Footer.module.css';



const footer = () =>  {
    return (
        <>
          <footer className={`page-footer  fixed-bottom  ${styles.color} `} bg-dark sticky="button" >
            <div className='container footer-copyright text-center py-3 text-white-50'>  
                &copy; {new Date().getFullYear()} Copyright: 
                 <a href="https://www.Barter.com"> Barter.com </a>  
            </div>
         </footer>
        </>
    );    
}


export default footer;
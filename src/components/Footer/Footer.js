import React from 'react';
import classes from './Footer.css';

const mergeClasses = `page-footer font-small unique-color-dark pt-4 fixed-bottom ${classes.color}`;
const footer = (props) => (
    <footer className={mergeClasses}>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
             <a href="https://exchangify.com/"> exchangify.com</a>
        </div>
    </footer>
);

export default footer;
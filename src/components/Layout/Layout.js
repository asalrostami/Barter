import React from 'react';
import classes from './Layout.module.css';
import Toolbar from './Navigation/Toolbar/Toolbar';
import Footer from './Footer/Footer';
import Header from './Header/Header';
 
const layout = (props) => {
    console.log(`isAuthLayout ${props.isAuth}`);
    return(
        <React.Fragment>
            <Toolbar isAuth={props.isAuth} />
            <Header />
            <main className={classes.Content}>
                {props.children}
            </main>
           
            <Footer />
        </React.Fragment>
        );

    }

export default layout;
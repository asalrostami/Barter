import React from 'react';
import classes from './Layout.module.css';
import Toolbar from './Navigation/Toolbar/Toolbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
 
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
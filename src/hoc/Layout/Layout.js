import React from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
 
const layout = (props) => (
    <React.Fragment>
        <Toolbar />
        <Header />
        <main className={classes.Content}>
            {props.children}
        </main>
        <Footer />
    </React.Fragment>

)

export default layout;
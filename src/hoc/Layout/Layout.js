import React, {Component} from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Header from '../../components/Header/Header';
 
const layout = (props) => {
    <React.Fragment>
        <Toolbar />
        <Header />
        <main>
            {this.props.children}
        </main>

    </React.Fragment>

}

export default layout;
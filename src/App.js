import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import styles from './App.module.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';


class App extends Component{
  state = {
    pageName: ''
  }
  render() {
    let isAuthenticated = true;
    let routs = (
      {}
    );
    return (
      <div>
        <Layout />
      </div>
    );
  }
  
}

export default App;

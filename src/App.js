import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import styles from './App.module.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';


class App extends Component{
  state = {
    pageName: ''
  }
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
  
}

export default App;

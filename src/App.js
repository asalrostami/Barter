import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Desc from './components/Description/Desc';
import Item from './components/Share/Item/Item';
import Logout from './components/Auth/Logout/Logout';
import * as actions from './store/actions/auth';


class App extends Component{
  state = {
    pageName: ''
  }
  render() {
    let routs = (
      <Switch>
        <Route path="/about"  component={AboutUs} />
        <Route path="/auth"  component={Auth} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    if(this.props.isAuthenticated) {
      routs = (
        <Switch>  
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/desc" component={Desc} />
          <Route path="/dashboard/item" component={Item} />
          <Route path="/about" component={AboutUs} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} /> 
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
      </Switch>
      );
    }
    console.log(`isAuthApp ${this.props.isAuthenticated}`);
    return (
      <div>
        <Layout isAuth={this.props.isAuthenticated}>
          {routs}
        </Layout>
        
        {/* {allItems.map(item => {
          return (
          <div>{item.name}</div>
          );
        })} */}
      </div>
    );
  }
  
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default withRouter (connect(mapStateToProps)(App));

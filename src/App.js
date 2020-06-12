import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Desc from './components/Description/Desc';
import Item from './components/Share/Item/Item';
import Logout from './components/Auth/Logout/Logout';


class App extends Component{
  state = {
    pageName: ''
  }
  render() {
    let isAuthenticated = false;
    let routs = (
      <Switch>
        <Route path="/about"  component={AboutUs} />
        <Route path="/auth"  component={Auth} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    if(isAuthenticated) {
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
    console.log(`isAuthApp ${isAuthenticated}`);
    return (
      <div>
        <Layout isAuth={isAuthenticated}>
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

export default withRouter(App);

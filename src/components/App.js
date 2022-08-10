import React from 'react';
import Header from './Header';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile'
import BestBooks from './BestBooks'
import Login from './Login';


class App extends React.Component {
  
  render() {
    
    return (
      
      <>
        <Router>
          
            <Header />
            <Switch>
              <Route exact path="/">
                
                {
                  this.props.auth0.isAuthenticated ?
                    <BestBooks />:<Login/>
                }
              </Route>
              
              <Route path="/profile">{this.props.auth0.isAuthenticated && <Profile/> }</Route>
            </Switch>
            <Footer />
          
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

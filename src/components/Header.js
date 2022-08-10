import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    return (
      <Navbar style={{paddingLeft:'100px' } }collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{fontFamily:'cursive'}}>My Favorite Books</Navbar.Brand>
        <Link to="/" style={{paddingLeft:'100px' } }>Home</Link> 
         <span/>
        
        <Link to="/profile" style={{paddingLeft:'100px' } }>Profile</Link>
        <span/> 
        
        <br/>
        <br/>
       
        {
          this.props.auth0.isAuthenticated &&
            <LogoutButton />
            
        }
      </Navbar>
    );
  }
}

export default withAuth0(Header)
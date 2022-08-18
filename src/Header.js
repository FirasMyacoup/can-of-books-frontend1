import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButton from './Auth0/AuthButtons';
import Profile from './Profile';

class Header extends React.Component {
  render() {
    return (
      <div className="navBar">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
          <Navbar.Brand style={{color: 'black'}}>My Favorite Books</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
          <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
          <AuthButton />
          <Profile />
        </Navbar>
      </div>
    )
  }
}

export default Header;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';

class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>LogIn</Card.Title>
          <Card.Text>
            Click to LogIn
          </Card.Text>
          <LoginButton/>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
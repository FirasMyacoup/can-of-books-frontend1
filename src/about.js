import { Component } from "react";
import Table from 'react-bootstrap/Table';
class Profile extends Component {

  render() {
    
    return (
      <>
       <Table>
      <thead>
        <tr>Info</tr>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
       
    
    </Table>
      </>
    )
  }
};

export default Profile;
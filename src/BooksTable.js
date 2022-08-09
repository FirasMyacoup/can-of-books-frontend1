import React from "react"
import Table from 'react-bootstrap/Table';

export default class BooksTable extends React.Component{



render(){
    return(

<Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.props.title}</td>
          <td>{this.props.description}</td>
          <td>{this.props.status}</td>
        </tr>
      </tbody>
    </Table>
    )
}

    }
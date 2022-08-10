import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal from './BookFormModal';
class MyFavoriteBooks extends React.Component {

  render() {
    return (
      <Jumbotron>
        <h1>Favorite Books</h1>
        <p>
        collection of my favorite books
        </p>
        <BookFormModal />
      </Jumbotron>
    )
  }
}
export default withAuth0(MyFavoriteBooks);
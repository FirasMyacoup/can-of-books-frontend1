import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookFormModal from './components/BookFormModal'
import CarouselBooks from './components/CarouselBooks'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }


  getBooks = async () => {
    const res = await axios.get('http://localhost:4000/books');
    this.setState({
      books: res.data
    })
   
  }

  componentDidMount() {
   
    this.getBooks();
  }

  deleteBook = async (id) => {
    await axios.delete(`http://localhost:4000/books/${id}`);
    this.getBooks();
  }

  createBook = async (e) => {
    e.preventDefault();
    const newBook = {
      'title': e.target.bookTitle.value,
      'description': e.target.bookDescription.value,
      'status': true,
      'imgURL': e.target.bookImgURL.value,
    }
    await axios.post(`http://localhost:4000/books`, {newBook});
    this.getBooks();
  }


  render() {

    return (

      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <BookFormModal submitHandler={this.createBook}/>

        {this.state.books.length ? (

          <CarouselBooks handleDelete={this.deleteBook} books={this.state.books}/> 

        ) : (<h3>No Books Found</h3>)

        };

      </>

    )
  }
}

export default BestBooks;
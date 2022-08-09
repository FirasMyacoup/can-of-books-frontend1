import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './components/Welcome';
import axios from 'axios';
import BooksTable from './components/BooksTable';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
      
    }
  }

  
 
  componentDidMount= async()=>{
    const url=`${process.env.REACT_APP_HEROKU}/books`;
    let booksdata= await axios.get(url);
    
    this.setState({
      books:booksdata.data
    });
  }
  render() {

    
   const {isAuthenticated}=this.props.auth0
    return (
      <>
   {isAuthenticated &&
      <div className='bookBest'>


        {this.state.books.length ? (
          this.state.books.map(item=>{
            return(
          <div key={item._id}>
            <BooksTable title={item.title} description={item.decription} status={item.status}/>
         
          </div>
          )
          })
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </div>
      }
      {!isAuthenticated&&
      <div className='welcome'>
      <Welcome/>
      </div>
      
      }


      </>
    )
  }
}

export default withAuth0(BestBooks);
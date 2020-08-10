import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Shelf from './Shelf';
import Search from './Search';





const shelves = [
  {
    id: 'currentlyReading',
    heading: 'Currently Reading'
  },
  {
    id: 'wantToRead',
    heading: 'Want To Read',
  },
  {
    id: 'read',
    heading: 'Read',
  }
];

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  handleUpdateShelf = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Route exact path='/' render={() => (
            shelves.map(shelf => ( 
              <Shelf key={shelf.id} shelf={shelf} books={books} updateShelf={this.handleUpdateShelf} />
            ))
          )} />

          <Route exact path='/search' render={({ history }) => (
            <Search navToHome={() => history.push('/')} />
          )} />

          <div className="open-search-div" >
            <Link to='/search' className="open-search">
            Add a book
          </Link>
          </div>
          
          
        </div>
        
      </div>
    )
  }
}

export default BooksApp

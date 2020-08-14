import React from 'react';
import * as BooksAPI from './BooksAPI'


class Book extends React.Component {

  handleSelect = (e) => {
    const { sortedBook } = this.props;
    const shelf = e.target.value;

    BooksAPI.update(sortedBook, shelf)
      .then(this.props.updateShelf)
      
  }

  
  render() {
    const { sortedBook, shelvedBooks, isSearchedBook } = this.props;

    const isBookOnShelf = () => {
      const [ bookIsShelved ] = shelvedBooks.filter(shelvedBook => shelvedBook.id === sortedBook.id);
 
      return (bookIsShelved ? bookIsShelved.shelf : 'none');

    }
  
     return (
      <div className="book">
        
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${sortedBook.imageLinks ? sortedBook.imageLinks.thumbnail : ''})` }}></div>
              <div className="book-shelf-changer">

                <select onChange={this.handleSelect} value={ isSearchedBook ? isBookOnShelf() : sortedBook.shelf }>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>

                </select>
              </div>
            </div>
    <div className="book-title">{sortedBook.title}</div>
    <div className="book-authors">{sortedBook.authors ? sortedBook.authors.join(', ') : ''}</div>
    </div>
    )
  }
};


export default Book;
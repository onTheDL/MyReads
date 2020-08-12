import React from 'react';
import * as BooksAPI from './BooksAPI'


// const options = [
//   {
//     value: 'currentlyReading',
//     text: 'Currently Reading'
//   },
//   {
//     value: 'wantToRead',
//     text: 'Want To Read',
//   },
//   {
//     value: 'read',
//     text: 'Read',
//   },
//   {
//     value: 'none',
//     text: 'None',
//   }
// ];

class Book extends React.Component {

  handleSelect = (e) => {
    const { sortedBook } = this.props;
    const shelf = e.target.value;

    BooksAPI.update(sortedBook, shelf)
      .then(this.props.updateShelf)
      
  }
 
  // handleSelect = (e) => {
  //   const book = this.props.sortedBook
  //   const shelf = e.target.value;
  //   this.props.updateShelf(book, shelf);
  //   console.log(e.target.value);
  // }
  
  render() {
    const { sortedBook } = this.props;
  
     return (
      <div className="book">
        {console.log(sortedBook)}
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${sortedBook.imageLinks ? sortedBook.imageLinks.thumbnail : ''})` }}></div>
              <div className="book-shelf-changer">

                <select onChange={this.handleSelect} select='wantToRead' value={sortedBook.shelf}>
                  <option value="move" disabled>Move to...</option>

                  {/* {options.map((option, index) => (
                    
                    sortedBook.shelf === option.value ? 
                      <option selected key={index} value={option.value}>{option.text}</option> :
                      <option key={index} value={option.value}>{option.text}</option>
                  ))} */}

                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>

                </select>
              </div>
            </div>
    <div className="book-title">{sortedBook.title}</div>
    <div className="book-authors">{sortedBook.authors}</div>
          </div>
    )
  }
};


export default Book;
import React from 'react';
import Book from './Book';

function BooksList(props) {
  const { sortedBooks, updateShelf } = props;
  
  return(
    <div className="bookshelf-books">
      {/* Don't forget to include a key prop!! */}
      <ol className="books-grid">
        {sortedBooks.map(book => (
          <li key={book.id}>
            <Book updateShelf={updateShelf} sortedBook={book}  />
          </li> 
        ))}
        
       
      </ol>
    </div>
  );
}

export default BooksList;
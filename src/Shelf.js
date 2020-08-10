import React from 'react';
import BooksList from './BooksList';


function Shelf(props) {
  const { shelf, books, updateShelf } = props;
  const sortedBooks = books.filter(book => book.shelf === shelf.id);

  return (
    
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf.heading}</h2>
            
            <BooksList updateShelf={updateShelf} sortedBooks={sortedBooks}  />
            
            
           
         
        </div>         
      </div>          
    </div>
  );
};

export default Shelf;
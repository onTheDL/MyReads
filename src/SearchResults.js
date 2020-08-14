import React from 'react';
import Book from './Book';

function SearchResults(props) {
  const {searchResults, updateShelf, shelvedBooks} = props;
  
  return (
    <div className="search-books-results">
        <ol className="books-grid">
            {searchResults.map(book => (
              <li key={book.id} >
                <Book sortedBook={book} updateShelf={updateShelf} isSearchedBook={true} shelvedBooks={shelvedBooks} />
              </li>
            ))}
 
        </ol>
      </div>
  );
}

export default SearchResults;
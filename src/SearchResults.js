import React from 'react';
import Book from './Book';

function SearchResults(props) {
  const {} = props;
  
  return (
    <div className="search-books-results">
        <ol className="books-grid">
          <li>
            <Book />
          </li>
        </ol>
      </div>
  );
}

export default SearchResults;
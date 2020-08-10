import React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

function Search(props) {

  return(
    <div className="search-books">
      <SearchInput navToHome={props.navToHome} />
      <SearchResults />
    </div>
  );

}


export default Search;


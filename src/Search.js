import React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

class Search extends React.Component {
  state = {
    searchResults: []
  }

  handleSearchResults = (results) => {
    this.setState(() => ({
      searchResults: results
    }))
  }

  render() {
    return(
      <div className="search-books">
        <SearchInput navToHome={this.props.navToHome} handleSearchResults={this.handleSearchResults} />
        <SearchResults searchResults={this.state.searchResults} />
        

      </div>
    );
  }
}


export default Search;


import React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import { search } from './BooksAPI';

class Search extends React.Component {
  state = {
    searchResults: []
  }

  handleSearchResults = (query) => {
    search(query)
      .then(results => {
        if(results && !results.error) {
          this.setState(() => ({
      searchResults: results
    }))
        } else {
          this.setState({
            searchResults: []
          })
        }
        
      });
    
  }

  render() {
    const { updateShelf } = this.props
    return(
      <div className="search-books">
        <SearchInput navToHome={this.props.navToHome} searchResults={this.handleSearchResults} />
        <SearchResults searchResults={this.state.searchResults} updateShelf={updateShelf}  />
        

      </div>
    );
  }
}


export default Search;


import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import PropTypes from "prop-types";

import Book from "./Book";

/* This component represents the Search page to add new books */
class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    func: PropTypes.func.isRequired
  };
  state = {
    query: "",
    searchResults: []
  };
  componentDidMount() {
    /* This serves to make a clear distinction in the Browser's history */
    document.title = "MyReads - Search";
  }
  searchBooks = event => {
    const query = event.target.value;
    const ogBooks = this.props.books;

    this.setState({ query: query });
    if (query.trim()) {
      BooksAPI.search(query.trim()).then(books => {
        if (books.length > 0) {
          /* The following forEach checks for any book if they already
					 * exist in the App's state, and sets the correct shelf */
          books.forEach(book => {
            let existingBook = ogBooks.filter(ogBook => ogBook.id === book.id);
            if (existingBook.length === 1) book.shelf = existingBook[0].shelf;
          });
          this.setState({ searchResults: books });
        } else this.setState({ searchResults: [] });
      });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  render() {
    const func = this.props.func;
    const { query, searchResults } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* Three different contents depending on the state of query and search results */}
            {searchResults.length > 0 ? (
              searchResults.map(book => (
                <Book book={book} key={book.id} func={func} />
              ))
            ) : query ? (
              <div>No Results Found!</div>
            ) : (
              ""
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;

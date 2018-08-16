import React, { Component } from "react";
import PropTypes from "prop-types";

import Book from "./Book";

/* This component represents a shelf, to group books from the App's
 * state under the same categories */
class BookShelf extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    func: PropTypes.func.isRequired
  };
  render() {
    const { shelf, books, func } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book book={book} key={book.id} func={func} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;

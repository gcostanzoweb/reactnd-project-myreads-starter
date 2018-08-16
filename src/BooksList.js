import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";

/* This component represents the main list on the home page of the App,
 * subdivided in three shelves */
class BooksList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    func: PropTypes.func.isRequired
  };
  componentDidMount() {
    /* This serves to make a clear distinction in the Browser's history */
    document.title = "MyReads - Home";
  }
  render() {
    const { books, func } = this.props;

    let currentlyReadingBooks = books.filter(
      book => book.shelf === "currentlyReading"
    );
    let wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    let readBooks = books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelf="Currently Reading"
              books={currentlyReadingBooks}
              func={func}
            />
            <BookShelf
              shelf="Want to Read"
              books={wantToReadBooks}
              func={func}
            />
            <BookShelf shelf="Read" books={readBooks} func={func} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksList;
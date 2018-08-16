import React, { Component } from "react";
import PropTypes from "prop-types";

import BookMenu from "./BookMenu";

/* This component represents the single Book list item */
class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    func: PropTypes.func.isRequired
  };
  render() {
    const { book, func } = this.props;

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            {/* Makes sure to handle book objects with no thumbnails, using a default image */}
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: book.imageLinks
                  ? `url("${book.imageLinks.thumbnail}")`
                  : "default"
              }}
            />
            <div className="book-shelf-changer">
              {/* for 'active': If the book comes from search results, 'none' should be used as the current shelf */}
              <BookMenu
                updateFunction={func}
                active={book.shelf ? book.shelf : "none"}
                book={book}
              />
            </div>
          </div>
          {/* Makes sure to handle missing infos on title or authors */}
          <div className="book-title">
            {book.title ? book.title : "Title unknown"}
          </div>
          <div className="book-authors">
            {book.authors ? book.authors.join(", ") : "Undefined authors"}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

import BooksList from "./BooksList";
import SearchBook from "./SearchBook";

/* This component represents the whole MyReads app */
class BooksApp extends Component {
  state = {
    /* This array contains the books on all shelves */
    books: []
  };
  componentDidMount() {
    /* Initializes the state */
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  updateBook = (book, shelf) => {
    /* This function acts on the App's state, and is passed down to all children
		 * to connect it to the single menu's options (the arrow at the corner of)
		 * each book. */
    return BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      this.setState(state => ({
        books: [
          ...state.books.filter(prevBook => prevBook.id !== book.id),
          book
        ]
      }));
      /*
			 * The following version of the function, though more intuitive, is also more
			 * expensive, as it fetches all books at every update in the array:

			BooksAPI.getAll().then((books)=>(
			this.setState({ books })))
			*/
    });
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BooksList books={this.state.books} func={this.updateBook} />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBook
              func={(book, shelf) => {
                this.updateBook(book, shelf).then(history.push("/"));
              }}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

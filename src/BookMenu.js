import React, { Component } from "react";
import PropTypes from "prop-types";

/* This component represents the 'select' menu accessible from the
 * bottom-left corner of every book list item */
class BookMenu extends Component {
  static propTypes = {
    updateFunction: PropTypes.func.isRequired,
    active: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired
  };
  render() {
    const { updateFunction, active, book } = this.props;

    return (
      <select
        onChange={event => updateFunction(book, event.target.value)}
        value={active}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}

export default BookMenu;

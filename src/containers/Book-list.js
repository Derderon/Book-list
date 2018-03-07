import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/index';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
// it takes application state, whatever is returned will show up as props
// inside of Booklist
  return {
    books: state.books
    // whenever app state changes our BookList will be automatically rerendered
  };
}

// anything returned from this function (mapDispatchToProps) will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
// whenever selectBook is called, the result should be passed
// to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// connect takes function mapStateToProps and BookList component and returns a container
// which returns props which are awailable to BookList component

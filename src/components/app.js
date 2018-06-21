import React, { Component } from 'react';
import BookList from './books-list'
import BookDetails from './book-details'
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />   
        <BookDetails />
      </div>
    );
  }
}

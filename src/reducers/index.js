import { combineReducers } from 'redux';
import booksReducer from './book_reducer'
import activeBookreducer from './active-book-reducer'
const rootReducer = combineReducers({
  books:booksReducer,
  activeBook:activeBookreducer
});

export default rootReducer;

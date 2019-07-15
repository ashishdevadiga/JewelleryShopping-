import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import LibraryReducer from './LibraryReducer';
import CartReducer from './CartReducer';
import CartListReducer from './CartListReducer';
import BookReducer from './BookReducer';
import BookListReducer from './BookListReducer';
import CardReducer from './CardReducer';

export default combineReducers({
    auth: AuthReducer,
    signUp:SignUpReducer,
    libraries: LibraryReducer,
    cart: CartReducer,
    cartList:CartListReducer,
    book: BookReducer,
    bookList:BookListReducer,
    card:CardReducer
 });
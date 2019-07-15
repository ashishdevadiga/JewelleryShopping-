import {
    BOOK_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    image:'',
    name:'',
    price:''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case BOOK_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
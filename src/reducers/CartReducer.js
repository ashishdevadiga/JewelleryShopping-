import {
    CART_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    image:'',
    name:'',
    price:''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CART_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
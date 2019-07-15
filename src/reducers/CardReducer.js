import {
    CARD_CREATE,
    CARD_UPDATE,
    CARD_PAY
} from '../actions/types';

const INITIAL_STATE = {
   cardNumber:'',
   cvv:'',
   loading:false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CARD_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CARD_CREATE:
            return INITIAL_STATE;
        case CARD_PAY:
            return { ...state, loading: true };
        default:
            return state;
    }
};
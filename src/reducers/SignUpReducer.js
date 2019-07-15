import {
    USER_CREATE,
    USER_UPDATE,
    SIGNIN_USER_FAIL,
    SIGNIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    email:'',
    location:'',
    phone: '',
    password: '',
    user:null,
    error:'',
    loading:false,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case USER_CREATE:
            return INITIAL_STATE;
        case SIGNIN_USER:
            return { ...state, loading: true, error:'' };
        case SIGNIN_USER_FAIL:
            return { ...state, error:'Sign In Failed!!!.', loading: false}
        default:
            return state;
    }
};
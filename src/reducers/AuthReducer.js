import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SEND_PASSWORD_SUCCESS,
    SEND_PASSWORD_FAIL
} from '../actions/types';

const INITIAL_STATE ={
    email:'',
    password: '',
    user: null,
    error:'',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error:'' };
        case LOGIN_USER_SUCCESS:
             return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
             return { ...state, error:'Login Failed.', loading: false}
        case SEND_PASSWORD_FAIL:
             return { ...state, error:'No users found.', loading: false}
        case SEND_PASSWORD_SUCCESS:
             return { ...state, ...INITIAL_STATE, user: action.payload };
        default:
            return state;
    }
};
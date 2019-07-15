import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SEND_PASSWORD_FAIL,
    SEND_PASSWORD_SUCCESS
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type:PASSWORD_CHANGED,
        payload:text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password )
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    };
};

export const forgotPassword = ({ email }) => {
    return (dispatch) => {
        dispatch({ type : LOGIN_USER });

        firebase.auth().sendPasswordResetEmail(email)
        .then(user => {
            sendPasswordSuccess(dispatch, user)
            alert('Please check your email...')
        })
        .catch(() => sendPasswordFail(dispatch));
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload:user
    });
    Actions.main();
};

const sendPasswordFail = (dispatch) => {
    dispatch({ type: SEND_PASSWORD_FAIL });
};

const sendPasswordSuccess = (dispatch, user) => {
    dispatch({
        type: SEND_PASSWORD_SUCCESS,
        payload:user
    });
    Actions.login();
};


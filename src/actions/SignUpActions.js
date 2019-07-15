import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    USER_CREATE,
    USER_UPDATE,
    SIGNIN_USER_FAIL,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER
} from './types';

export const userUpdate = ({ prop, value }) => {
    return {
        type: USER_UPDATE,
        payload: { prop, value }
    };
};

export const userCreate = ({ name, email, phone, password }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({type: SIGNIN_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=> {
            firebase.database().ref(`/users/currentUser/userSignIn`)
            .push({ name, email, phone, password  })
            .then(() => {
                dispatch({ type: USER_CREATE });
                Actions.auth({ type: 'reset' });
            })
        })
       .catch(() => signinUserFail(dispatch));
     };
};

const signinUserFail = (dispatch) => {
    dispatch({ type: SIGNIN_USER_FAIL });
};


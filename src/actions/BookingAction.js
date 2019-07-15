import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    BOOK_CREATE,
    BOOK_FETCH_SUCCESS
} from './types';

export const bookCreate = ({ image, name, price }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/book/${currentUser.uid}/bookItem`)
        .push({ image, name, price })
        .then( () => {
            dispatch({ type: BOOK_CREATE });
        });
    };
};

export const bookFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/book/${currentUser.uid}/bookItem`)
        .on('value',snapshot => {
            dispatch({ type: BOOK_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const bookDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/book/${currentUser.uid}/bookItem/${uid}`)
        .remove();
    };
};
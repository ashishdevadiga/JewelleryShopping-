import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    CART_CREATE,
    CART_FETCH_SUCCESS
} from './types';

export const cartCreate = ({ image, name, price }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/cart/${currentUser.uid}/cartItem`)
        .push({ image, name, price })
        .then( () => {
            dispatch({ type: CART_CREATE });
            Actions.cart();
        });
    };
};

export const cartFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/cart/${currentUser.uid}/cartItem`)
        .on('value',snapshot => {
            dispatch({ type: CART_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const cartDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/cart/${currentUser.uid}/cartItem/${uid}`)
        .remove();
    };
};
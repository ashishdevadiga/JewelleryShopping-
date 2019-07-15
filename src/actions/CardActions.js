import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    CARD_CREATE,
    CARD_UPDATE,
    CARD_PAY
} from './types';

export const cardUpdate = ({ prop, value }) => {
    return {
        type: CARD_UPDATE,
        payload: { prop, value }
    };
};

export const cardCreate = ({ cardNumber, cvv }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({type: CARD_PAY });
        firebase.database().ref(`/card/${currentUser.uid}/cardPay`)
        .push({ cardNumber, cvv })
        .then(() => {
           dispatch({ type: CARD_CREATE });
        })
    };
 };


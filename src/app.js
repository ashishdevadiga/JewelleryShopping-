import React, { Component }from 'react';
import { View,Text }from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const Config = {
             apiKey: 'AIzaSyDYzgSlqLvLIYbKl4CkP_gbc6fuZtJkZtY',
             authDomain: 'authentication-8c23a.firebaseapp.com',
             databaseURL: 'https://authentication-8c23a.firebaseio.com',
             projectId: 'authentication-8c23a',
             storageBucket: 'authentication-8c23a.appspot.com',
             messagingSenderId: '417500355625',
             appId: '1:417500355625:web:e73a81854e577835'
        };
        firebase.initializeApp(Config);
    }
     render() {
       const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
       return (
          <Provider store={store}>
              <Router />
          </Provider>
       );
     }
 }
export default App;
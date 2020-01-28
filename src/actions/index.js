import constants from './../constants';
import * as firebase from 'firebase';
import {store} from './../index';
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    console.log('logged in')
    store.dispatch(authUserTrue());
  } else {
    console.log('not logged in')
    store.dispatch(authUserFalse());
  }
})

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

export const authUserTrue = () => ({
  type: types.AUTH_USER_TRUE
})

export const authUserFalse = () => ({
  type: types.AUTH_USER_FALSE
})
import constants from './../constants';
import * as firebase from 'firebase';
import {store} from './../index';
const {types, firebaseConfig} = constants;

console.log(firebaseConfig)

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    store.dispatch(authUserTrue());
  } else {
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
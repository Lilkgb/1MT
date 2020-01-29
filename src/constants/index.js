import * as types from './ActionTypes';
import {initialState, authState, userInformationState} from './InitialState';
import firebaseConfig from './firebaseConfig';

export default {
  initialState: initialState,
  firebaseConfig: firebaseConfig,
  userInformationState: userInformationState,
  authState: authState,
  types: types
}

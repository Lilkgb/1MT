import {combineReducers} from 'redux';
import testReducer from './testReducer';
import authReducer from './authReducer';
import userInformationReducer from './userInformationReducer';

const rootReducer = combineReducers({
    testState: testReducer,
    authState: authReducer,
    userInformationState: userInformationReducer,
});

export default rootReducer;

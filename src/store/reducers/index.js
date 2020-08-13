import { combineReducers } from 'redux';

import authReducer from './auth';
import itemReducer from './item';

export default combineReducers({
    auth: authReducer,
    item: itemReducer
 });
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../components/Share/utility';

const initialState = {
    userId : null,
    name : null,
    email : null
}

const userSet = (state, action) => {
    return updateObject(state, {
        userId: action.userId,
        name: action.name,
        email: action.email
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_SET: return userSet(state, action);
        default:
            return state;
    }
}

export default reducer;
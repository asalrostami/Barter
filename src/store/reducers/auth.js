import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../components/Share/utility';


const initialState = {
    token: null,
    userId: null,
    error: null,
    loadind: false,
    isAuthenticated: false,
    authRedirectPath: '/'
}

const authStart = (state, action) => {
    return updateObject(state, {error: null, loadind: true});
};

const authSuccess = (state, action) => {
    return updateObject(state,{
        token: action.idToken,
        userId: action.userId,
        error: null,
        loadind: false,
        isAuthenticated: action.isAuthenticated
    });
}
const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}
const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null, isAuthenticated: false});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}

export default reducer;
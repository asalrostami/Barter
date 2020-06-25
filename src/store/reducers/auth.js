import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../components/Share/utility';


const initialState = {
    token: null,
    userId: null,
    error: null,
    loadind: false,
    isAuthenticated: false,
    authRedirectPath: '/',
    email: null
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
const resetPassworsSuccess = (state, action) => {
    return updateObject(state,{
        email: action.email
    });
}
const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}
const resetPassworsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}
const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null, isAuthenticated: false});
}

const emptyError = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.RESET_SUCCESS: return resetPassworsSuccess(state, action);
        case actionTypes.RESET_ERROR: return resetPassworsFail(state, action);
        case actionTypes.EMPTY_ERROR: return emptyError(state, action);
        default:
            return state;
    }
}

export default reducer;
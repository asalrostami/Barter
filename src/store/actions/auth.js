import * as actionTypes from '../actions/actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS
    };
};

export const authFail = () => {
    return {
        type: actionTypes.AUTH_FAIL
    };
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const auth = () => {

}
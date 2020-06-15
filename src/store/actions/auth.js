import * as actionTypes from '../actions/actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId,isAuthenticated) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        isAuthenticated: isAuthenticated

    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('isAuthenticated');
    return {
        type: actionTypes.AUTH_LOGOUT,
        isAuthenticated: false
    };
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const auth = (email, password, isAuth) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            isAuthenticated: isAuth
        }
        dispatch(authSuccess("response.data.idToken", "response.data.localId", true));
        // let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAClAkB7vnXJv1FkmmE4mR7lVMuACD5Gm0';
        // if(!isSignup) {
        //     url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAClAkB7vnXJv1FkmmE4mR7lVMuACD5Gm0';
        // }
        // axios.post(url, authData)
        //     .then(response => {
        //         // console.log(response);
        //         const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        //         localStorage.setItem('token', response.data.idToken);
        //         localStorage.setItem('expirationDate', expirationDate);
        //         localStorage.setItem('userId', response.data.localId);
        //         dispatch(authSuccess(response.data.idToken, response.data.localId));
        //         dispatch(checkAuthTimeout(response.data.expiresIn));
        //     })
        //     .catch(err => {
        //         dispatch(authFail(err.response.data.error));
        //     })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};
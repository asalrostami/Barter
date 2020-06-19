import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-items';
import * as firebase from '../../Firebase/firebase';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, isAuthenticated) => {
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

export const resetPasswordFail = (error) => {
    return {
        type: actionTypes.RESET_ERROR,
        error: error
    };
}

export const resetPasswordSuccess = (email) => {
    return {
        type: actionTypes.RESET_SUCCESS,
        email: email
    };
};

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

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWCiWatTYGxHyZNw78gr5Gajuq_JZXaOs';
        if(!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWCiWatTYGxHyZNw78gr5Gajuq_JZXaOs';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                dispatch(authSuccess(response.data.idToken, response.data.localId, true));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const resetPassword  = email => {
return (dispatch) => {
      firebase
        .passwordReset(email)
        .then(() =>
          dispatch(resetPasswordSuccess(email))
        )
        .catch(err => {
            dispatch(resetPasswordFail(err.response.data.error));
        })
     }  
  };
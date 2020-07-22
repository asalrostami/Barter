import * as firebase from '../Firebase/firebase';
import axios from '../axios-items';


export const resetPassword = (email) => {
    return firebase
            .passwordReset(email)
            .then(response => response)
            .catch(err => {
                console.log(err);
                throw new Error(err.message);
            }) 
}

export const authenticate = (email, password, isSignup) => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWCiWatTYGxHyZNw78gr5Gajuq_JZXaOs';
        if(!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWCiWatTYGxHyZNw78gr5Gajuq_JZXaOs';
        }
        
    return  axios.post(url, authData)
            .then(response => {
                console.log("responce AuthApi", response);
                
                if(isSignup){
                    // debugger
                    const user = {
                        userId: response.data.localId,
                        email: response.data.email,
                        items : [],
                        requestedItems : []
                    }
                    axios.post('/users.json', user)
                    .then(response => {
                        console.log("item added successfully",response)
                        // response.data.name
                    })
                    .catch(error => {
                        console.log(error.response.data.error);
                        throw new Error(error.response.data.error.message);
                    })
                }

                
                return response;
            })
            .catch(err => {
                console.log(err.response.data.error);
                throw new Error(err.response.data.error.message);
        })  
    
}
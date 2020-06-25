import * as firebase from '../Firebase/firebase';

export const resetPassword = (email) => {
    return firebase
            .passwordReset(email)
            .then(response => response)
            .catch(err => {
                console.log(err);
                throw new Error(err.message);
            }) 
}

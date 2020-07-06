import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'
import { firebaseConfig } from './fbConfig';

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

    // auth
 export const loginWithEmail = (email, password) => {
      return firebase.auth().signInWithEmailAndPassword(email, password)
    }; 
 export const signupWithEmail =  (email, password) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
    };
 export const signOut = () => {
      return firebase.auth().signOut()
    };
export const storage = () => {
  return firebase.storage();
};
export const checkUserAuth = () => {
  const isVarified = true;
  firebase.auth().onAuthStateChanged(authUser => {
    if(authUser.emailVerified){ //This will return true or false
      isVarified = true
      console.log('email is verified')
     }else{
        isVarified = false;
         console.log("firebase",'email not verified')     
     }
     return isVarified;
  })
};
 export const passwordReset = email => {
      return firebase.auth().sendPasswordResetEmail(email)
    };
    // firestore
export const createNewUser = userData => {
      return firebase
        .firestore()
        .collection('users')
        .doc(`${userData.uid}`)
        .set(userData)
    }
  
  
  
  
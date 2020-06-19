import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
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
 export const checkUserAuth = user => {
      return firebase.auth().onAuthStateChanged(user)
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
  
  
  
  
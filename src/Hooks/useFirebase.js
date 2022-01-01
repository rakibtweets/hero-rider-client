import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import {
  getAuth,
  //   signInWithPopup,
  //   GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// import swal from 'sweetalert';

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  //   const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  //   const googleProvider = new GoogleAuthProvider();

  // Register new user

  const registerNewUser = (name, email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const newUser = { email, displayName: name };
        // Signed in
        setUser(newUser);

        // save user to database
        saveUser(email, name, 'POST');
        // history.push('/home');
        //Auth Erros
        setAuthError('');

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            // An error occurred
          });
        if (result) {
          //   swal('Registration Successfull', 'Please Login', 'success');
          navigate('/profilePage');
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // save user information to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };

  // watching user behavior
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // userSignOut

  const userLogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    authError,
    isLoading,
    // admin,
    registerNewUser,
    userLogOut,
    signInWithEmailAndPassword,
  };
};

export default useFirebase;

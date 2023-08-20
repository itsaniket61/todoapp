import React, { useEffect, useState } from 'react'
import {auth,firestore} from '../../Services/firebase';
import {signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { doc, setDoc } from 'firebase/firestore';


const provider = new GoogleAuthProvider();

function Login({ updateUserData }) {
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userInfo = {
          userId: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        updateUserData(userInfo);
      } else {
        updateUserData({});
      }
    });
    return unsubscribe;
  }, []);

  const login = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const userInfo = {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };
      const userDoc = doc(firestore, 'users', userInfo.userId);
      setDoc(userDoc, userInfo);
      updateUserData(userInfo);
    });
  };
  return (
    <div
      className='card p-4 mt-2 mx-auto'
      style={{ height: '90%', width: '90%' }}
    >
      <div className='mx-auto' style={{ width: '250px' }}>
        <button className='btn bg-light rounded shadow' onClick={login}>
          <img
            src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'
            style={{ height: '50px', width: '50px' }}
          />
          <b>Login with Google</b>
        </button>
      </div>
    </div>
  );
}



export default Login
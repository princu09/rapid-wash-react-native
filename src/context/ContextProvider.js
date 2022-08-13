import React, {createContext, useContext, useState} from 'react';
import {auth} from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const StateContext = createContext();

export const ContextProvider = ({children}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passShow, setPassShow] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [selectGender, setSelectGender] = useState('Wash + Iron');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(e => {
        setCurrentUser(e);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };
  const handleSignup = () => {
    setCurrentUser('');
    createUserWithEmailAndPassword(auth, email, password)
      .then(e => {
        setCurrentUser(e);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  const handleLogout = () => {
    setCurrentUser('');
    setEmail('');
    setPassword('');
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        passShow,
        setPassShow,
        currentUser,
        setCurrentUser,
        handleLogin,
        handleSignup,
        handleLogout,
        selectGender,
        setSelectGender,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

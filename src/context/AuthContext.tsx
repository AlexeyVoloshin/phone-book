/* eslint-disable no-console */
import React from 'react';
import firebase from 'firebase/app';

const AuthContext = React.createContext<firebase.User | null | boolean>(null)
console.log('AuthContext', AuthContext);


export default AuthContext;
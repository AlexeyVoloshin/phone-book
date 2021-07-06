import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import AuthContext from '../context/AuthContext';

import Auth from '../services/firebase';

const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<firebase.User | null>(null);

	useEffect(() => {
		const auth = Auth()
		const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
			setUser(firebaseUser)
		})
		return unsubscribe;

	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthProvider;
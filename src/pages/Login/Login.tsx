/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import HomePage from '../Home';
import LoginComponent from './LoginComponent';
import Auth from '../../services/firebase';
import AuthContext from '../../context/AuthContext';

const auth = Auth();

const Login = () => {
	const user = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const signIn = async () => {
		try {
			await auth.signInWithEmailAndPassword(
				email,
				password
			).catch((error) => {
				setMessage(error.message);
				setTimeout(() => {
					setMessage('');
				}, 3000)
			})
			
		} catch (error) {
			console.error(error);
		}
	}

	const onFinish = async (data: any): Promise<void> => {
		setEmail(data.email);
		setPassword(data.password);
		await signIn();
	}

	const onFinishFailed = (errorInfo: any): void => {
		console.log('Failed:', errorInfo);
	}

	return (
		<>
		{
			user ? <HomePage/> : <LoginComponent 
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				message={message}
			/> 
		}
		</>
	)
}

export default Login;
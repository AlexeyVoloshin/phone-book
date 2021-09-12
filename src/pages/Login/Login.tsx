/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useContext, useState, ReactElement } from 'react';
import { Redirect, RouteComponentProps, RouteProps } from 'react-router-dom';
import { Route, StaticContext } from 'react-router';
import LoginComponent from './LoginComponent';
import Auth from '../../services/firebase';
import AuthContext from '../../context/AuthContext';
import { LinkEnum } from '../../routes';
import PrivateRouteComponent from '../../components/PrivateRoute';
import HomePage from '../Home';

const auth = Auth();

interface IData {
	email: string
	password: string
}

interface IMessage {
	[key:string]: string
}

interface IValidStat {
	[key:string]: string
}

type LocationState = {
	from: Location;
};

interface IProps {
	history: RouteComponentProps<{}, StaticContext, LocationState>
}

const Login: React.FC<IProps> = ({history}): ReactElement => {
	const user =  useContext(AuthContext);

	console.log('userLoginComponent: ', user);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailValid, setEmailValid] = useState<boolean | null>(false);
	const [passValid, setPassValid] = useState<boolean | null>(false);

	const [message, setMessage] = useState('');
	const [validStat, setValidStat] = useState<IValidStat>({});
	const [formErrors, setFormErrors] = useState<IMessage>({});
	
	const [formValid, setFormValid] = useState(false);


	const signIn = async () => {
		try {
			await auth.signInWithEmailAndPassword(
				email,
				password
			)
			.then((data) => {
				console.log(data)
				console.log('user', user)
			})
			.catch((error) => {
				setMessage(error.message);
				setTimeout(() => {
					setMessage('');
				}, 3000)
			})
			
		} catch (error) {
			console.error(error);
		}
	}

	const onFinish = async (data: IData): Promise<void> => {
		setEmail(data.email);
		setPassword(data.password);
		await signIn();
	}

	const onFinishFailed = (errorInfo: any): void => {
		console.log('Failed:', errorInfo);
	}

	const handleInputField = (event: React.ChangeEvent<HTMLInputElement>): void => {
		validateField(event.target.type, event.target.value)
	}

	const checkValidForm = () =>{

		const result: any = passValid && emailValid;

		if(result) {
			setFormValid(result)
		}
	}

	const validateField = (fieldName: string, value: string) => {
		const fieldValidationErrors: IMessage = {};
		const statusValid: IValidStat = {};

		const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;
		const regexMail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

		switch (fieldName) {
			case "password":
				case "text":
					setPassValid(value.match(regexPass) && value.length >= 8)
				fieldValidationErrors.password = passValid ? '' 
					: ' min 8 symbol and one number and capital letter';
				statusValid.password = passValid ? 'success' : 'warning'
				break;
			case "email":
				setEmailValid(value.match(regexMail) && true)
				// fieldValidationErrors.email = emailValid ? '' : ' is invalid';
				statusValid.email = emailValid ? 'success' : 'warning'
				break;
			default:
				break;
		}

		setValidStat(statusValid)
		setFormErrors(fieldValidationErrors)

		checkValidForm()

	}
	if(user) {
		return (<Redirect to="/home"/>)
	}

	return (
		
		<LoginComponent 
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			message={message}
			handleInputField={handleInputField}
			validateStatus={validStat}
			formError={formErrors}
			formValid={formValid}
		/>
	)
}

export default Login;
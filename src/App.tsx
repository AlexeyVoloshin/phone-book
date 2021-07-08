/* eslint-disable no-console */
import React, { useContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Spin } from 'antd';

import './index.scss';
import s from './App.module.scss';
import AuthContext from './context/AuthContext';
import {  LinkEnum } from './routes';
import PrivateRoute from './components/PrivateRoute';
import Auth from './services/firebase';


const HomePage = lazy(()=> import('./pages/Home'));
const LoginPage = lazy(()=> import('./pages/Login'));

const auth = Auth();


function App() {
	const user = useContext(AuthContext);
	console.log('userApp: ', user);
	
	const signOut = async () => {
		await auth.signOut()
		.catch((erorr) => {
			console.error(erorr);
		})
	}
  return (
	  <div className={s.app}>
		<Router>
				<Suspense fallback={<Spin size="large"/>}>
						<PrivateRoute path="/home" component={HomePage}/>
						
						<PrivateRoute exact path={LinkEnum.HOME} component={HomePage}/>
						<PrivateRoute exact path={LinkEnum.LOGIN} component={LoginPage}/>
						<Route exact path={LinkEnum.SINGOUT} render={
							() => signOut()
						}/>
						<Route path={LinkEnum.LOGIN} component={LoginPage}/>
				</Suspense>
			</Router>
	  </div>
  );
}

export default App;

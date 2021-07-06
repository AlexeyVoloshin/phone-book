import React, { useContext } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Auth from './services/firebase';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';

import './index.scss';
import s from './App.module.scss';
import AuthContext from './context/AuthContext';

const auth = Auth();


function App() {
	const user = useContext(AuthContext);

	const signOut = async () => {
		await auth.signOut();
		return <Redirect to="/login"/>
	}
  return (
    <Router>
		<div className={s.app}>
			<Route path="/login" component={LoginPage}/>
			<Route render={() => {
				return (
					<>
					<Route path="/" exact component={LoginPage}/>
					
					<Route path="/about" component={() => <h1>Немного о себе..</h1>}/>
					<Route path="/singOut" >
						{user ? signOut() : <Redirect to="/login"/>}
					</Route>
					<Route path="/telephone-numbers" exact component={HomePage}/>
					<Route path="/telephone-number/:id" component={
						()=> <h1>Telephone Number</h1>
					}/>
				</>
				)
			}}/>
		</div>
	 	
	 </Router>
  );
}

export default App;

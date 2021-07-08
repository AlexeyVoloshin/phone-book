/* eslint-disable no-console */
import React, { useContext } from "react";
import {  Redirect, Route, RouteProps } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { LinkEnum } from "../../routes";

const PrivateRoute: React.FC<RouteProps> = ({ 
	component: Component, 
	render, 
	...rest
}) => {
	const userIsLoggedIn = useContext(AuthContext);

	return <Route {...rest} render={props => { 
		console.log('0x0x0x');
		console.log('userIsLoggedIn: ', userIsLoggedIn);

		if(props.location.pathname === LinkEnum.SINGOUT) {
			console.log('1x1x1x1');
			
			return !userIsLoggedIn && <Redirect to={LinkEnum.LOGIN}/>
		}
		console.log('3x3x3x');

		return userIsLoggedIn && Component ? <Component {...props}/> : <Redirect to={LinkEnum.LOGIN}/>
	} }/>;
}

export default PrivateRoute;
/* eslint-disable no-shadow */
// import React from "react";
// import HomePage from "./pages/Home";
// import LoginPage from "./pages/Login";

export interface IMenu {
	title: string,
	link: LinkEnum,
	// component: () => JSX.Element
}

export enum LinkEnum {
	HOME = '/',
	LOGIN = '/login',
	SINGOUT = '/singOut',
}

export const GENERAL_MENU: IMenu[] = [
	{
		title: 'Home',
		link: LinkEnum.HOME,
	},
	// {
	// 	title: 'Login',
	// 	link: LinkEnum.LOGIN,
	// 	component: () => <LoginPage/>
	// },
	{
		title: 'SingOut',
		link: LinkEnum.SINGOUT,
	}
]

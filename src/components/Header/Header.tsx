/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';


interface IMenu {
	id: number
	value: string
	link: string
}

const MENU: IMenu[] = [
	{
		id: 1,
		value: 'Home',
		link: '/telephone-numbers',
	},
	{
		id: 2,
		value: 'About',
		link: '/about',
	},
	{
		id: 3,
		value: 'SingOut',
		link: '/singOut',
	},
]

const Header: React.FC = ()  => {
	const [activePage, setActivePage] = useState(false)
	
	return (
		<HeaderComponent 
			MENU={MENU}
			activePage={activePage}
		/>
	)
}

export default Header;
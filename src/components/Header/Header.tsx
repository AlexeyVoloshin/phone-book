/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GENERAL_MENU } from '../../routes';
import HeaderComponent from './HeaderComponent';

const Header: React.FC = ()  => {
	 const path = useLocation()
	console.log('path: ', path);
	
	return (
		<HeaderComponent 
			MENU={GENERAL_MENU}
			path={path.pathname}
		/>
	)
}

export default Header;
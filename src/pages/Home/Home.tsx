import React, { useEffect, useState } from 'react';

import HomeComponent from './HomeComponent';

const Home: React.FC = ()  => {
	
	// const [data, setData] = useState(null);
	const [isBusy, setBusy] = useState(false);
	
	const getData = () => {
		// сделать запрос на сервер
		setBusy(false)
	}

	useEffect(() => {
		
		// setBusy(true)
		return getData

	}, []);

	const RenderLoading = () => {
		return <h1>Loading...</h1>
	}

	return (
		<>
			{
				isBusy ? <RenderLoading /> : <HomeComponent />
			}
		</>
		
		
	)
}

export default Home;
import React from 'react';
import Header from '../../components/Header';

import s from './Home.module.scss';

const HomeComponent = () => {
	return (
		<div className={s.home}>
			<Header />
			<div className='home__wrap'>
				<header>
					<div className='home__title'>
						<h1>Телефонная книга</h1>
					</div>
				</header>
				<main className='home__list'>
					<p>Список телефонов</p>
				</main>
			</div>
		</div>
	)
}

export default HomeComponent;
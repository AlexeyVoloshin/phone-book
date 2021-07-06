import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import s from './Header.module.scss';

interface IMenu {
	id: number
	value: string
	link: string
}

interface IProps {
	activePage: boolean
	MENU: IMenu[]
}

const HeaderComponent: React.FC<IProps> = ({MENU, activePage}) => {
	return (
		<header className={s.header}>
			<div className={s.header__wrap}>
				<div className={s.header__logo}>
					Logo
				</div>
				<nav className={cn(s.menuWrap)}>
					{
						MENU.map(({id, value, link }) => (
							<Link key={id} to={link} className={cn(
								s.menuWrap__menulink,{
								[s.activeLinck]: activePage })}>
									{value}
							</Link>
						))
					}
				</nav>
			</div>
		</header>
	)
}

export default HeaderComponent;
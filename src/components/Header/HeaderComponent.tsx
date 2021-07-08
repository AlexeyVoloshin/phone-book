import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import s from './Header.module.scss';
import { IMenu } from '../../routes';

interface IProps {
	path: string
	MENU: IMenu[]
}

const HeaderComponent: React.FC<IProps> = ({MENU, path}) => {
	return (
		<header className={s.header}>
			<div className={s.header__wrap}>
				<div className={s.header__logo}>
					Logo
				</div>
				<nav className={cn(s.menuWrap)}>
					{
						MENU.map(({ title, link }) => (
							<Link key={title} to={link} className={cn(
								s.menuWrap__menulink,{
								[s.activeLinck]: link === path })}>
									{title}
							</Link>
						))
					}
				</nav>
			</div>
		</header>
	)
}

export default HeaderComponent;
import React from 'react';

import s from './Button.module.scss';

interface IProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<IProps> = ({children, onClick}) => {
	return (
		<button
			type="button"
			className={s.button}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button;
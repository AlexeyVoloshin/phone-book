import React from 'react';
import cn from 'classnames';

import s from './Message.module.scss';

interface IProps {
	color: string
}

const MessageComponent: React.FC<IProps> = ({children, color}) => {

	const colorClass: string = s[(color || 'success') as keyof typeof s];
	return (
		<div className={cn(s.message, colorClass)}>
			<div className={s.message__wrap}>
				{children}
			</div>
		</div>
	)
}

export default MessageComponent;
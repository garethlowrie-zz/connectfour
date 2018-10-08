import * as React from 'react';
import styles from './styles.less';
import classNames from 'classnames';

interface IPropTypes {
	isDisabled: boolean;
	className?: string;
	title?: string;
	children: any;
	onClick: React.MouseEventHandler<any>;
}

const Button: React.SFC<IPropTypes> = ({
	isDisabled,
	className,
	...props
}) => {
	const buttonClassName = classNames(styles.button, className, {
		[styles.isDisabled]: isDisabled
	});

	return <div {...props} className={buttonClassName}>Start</div>
};

export default Button;

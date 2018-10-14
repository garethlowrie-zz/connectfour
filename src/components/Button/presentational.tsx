import * as React from 'react';
import styles from './styles.less';
import classNames from 'classnames';
import LANG from 'src/constants/lang';

interface IPropTypes {
	isDisabled: boolean;
	className?: string;
	title?: string;
	children: any;
	onClick: React.MouseEventHandler<any>;
	onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const Button: React.SFC<IPropTypes> = ({
	isDisabled,
	className,
	onKeyPress,
	...props
}) => {
	const buttonClassName = classNames(styles.button, className, {
		[styles.isDisabled]: isDisabled
	});

	return <div {...props} className={buttonClassName} onKeyPress={onKeyPress}>{LANG.start}</div>
};

export default Button;

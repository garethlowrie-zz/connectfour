import * as React from 'react';
import styles from './styles.less';
import classNames from 'classnames';

interface IPropTypes {
	value: string;
	id?: string;
	name?: string;
	type?: string;
	placeholder?: string;
	spellCheck?: boolean;
	className?: string;
}

const Input: React.SFC<IPropTypes> = ({
	className,
	...props
}) => {
	const inputClassName = classNames(styles.input, className);

	return <input {...props} className={inputClassName} />
};

export default Input;

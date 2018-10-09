import * as React from 'react';
import styles from './styles.less';
import Teams from 'enums/Teams';
import classNames from 'classnames';

interface IPropTypes {
	variant?: Teams;
}

const GameDisc: React.SFC<IPropTypes> = ({
	variant
}) => {
	const discClassName = classNames(styles.disc, {
		[styles.isRed]: variant === Teams.Red,
		[styles.isYellow]: variant === Teams.Yellow,
	});

	return (
		<div className={styles.container}>
			<div className={discClassName}>
				<div className={classNames(styles.disc, styles.frontCircle)} />
			</div>
		</div>
	);
};

export default GameDisc;

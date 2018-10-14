import * as React from 'react';
import styles from './styles.less';
import Teams from 'src/enums/Teams';
import classNames from 'classnames';
import posed from 'react-pose';

interface IPropTypes {
	row?: number;
	outsidePosition: number;
	variant?: Teams;
}

const Disc = posed.div({
	outside: {
		y: ({ outsidePosition }: any) => outsidePosition
	  },
	  inside: {
		y: 0,
		transition: {
		  duration: 300
		}
	  }
});

const GameDisc: React.SFC<IPropTypes> = ({
	outsidePosition,
	variant
}) => {
	const discClassName = classNames(styles.disc, {
		[styles.isRed]: variant === Teams.Red,
		[styles.isYellow]: variant === Teams.Yellow,
	});

	return (
		<div className={styles.container}>
			<Disc pose={variant ? 'inside' : 'outside'} outsidePosition={outsidePosition} className={discClassName}>
				<div className={classNames(styles.disc, styles.frontCircle)} />
			</Disc>
		</div>
	);
};

export default GameDisc;

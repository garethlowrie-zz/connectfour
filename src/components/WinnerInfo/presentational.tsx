import * as React from 'react';
import styles from './styles.less';
import LANG from 'src/constants/lang';

interface IPropTypes {
	name: string,
	score: number,
}

const WinnerInfo: React.SFC<IPropTypes> = ({
	name,
	score
}) => {
	return (
		<div>
			<div className={styles.winningScoreContainer}>
				<div className={styles.winningScore}>
					<div className={styles.text}>{score}</div>
				</div>
			</div>
			<div className={styles.winner}>
				<span className={styles.winnerName}>{name}</span> {LANG.winsThisRound}
			</div>
		</div>
	)
};

export default WinnerInfo;

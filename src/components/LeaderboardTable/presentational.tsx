import * as React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import Loader from 'src/components/Loader/container';
import logo from 'images/logo.png';
import styles from './styles.less';
import LANG from 'src/constants/lang';

interface IPropTypes {
	isLoading: boolean,
	isErrored: boolean,
	data: any[];
}

const LeaderboardTable: React.SFC<IPropTypes> = ({
	isLoading,
	isErrored,
	data
}) => {
	const isData = data && data.length > 0;
	return (
		<Flex column full className={styles.container}>
			{isLoading && (
				<Flex column center full>
					<FlexItem>
						<Loader />
					</FlexItem>
				</Flex>
			)}
			{isErrored && (
				<FlexItem className={styles.errorContainer}>
					<img src={logo} />
					<p className={styles.error}>{LANG.couldntFindLeaderboard}<br />{LANG.beSureToTryAgain}</p>
				</FlexItem>
			)}
			{!isLoading && !isData && (
				<FlexItem>
					{LANG.leaderboardNoScores}
				</FlexItem>
			)}
			{isData &&
				<FlexItem>
					<Flex key="header" className={styles.header}>
						<FlexItem grow={1}>{LANG.playerName}</FlexItem>
						<FlexItem>{LANG.score}</FlexItem>
					</Flex>
					{data.map(({ name, score }: any) => (
						<Flex key={`${name}-${score}`} className={styles.row}>
							<FlexItem grow={1}>{name}</FlexItem>
							<FlexItem>{score}</FlexItem>
						</Flex>
					))}
				</FlexItem>
			}
		</Flex>
	)
};

export default LeaderboardTable;

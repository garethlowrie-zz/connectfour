import * as React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import Loader from 'src/components/Loader/container';
import logo from 'images/logo.png';
import styles from './styles.less';

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
				<div className={styles.errorContainer}>
					<img src={logo} />
					<p className={styles.error}>Whoops we couldn't find the leaderboard <br />Be sure to try again later</p>
				</div>
			)}
			{isData &&
				<>
					<Flex key="header" className={styles.header}>
						<FlexItem grow={1}>Player Name</FlexItem>
						<FlexItem >Score</FlexItem>
					</Flex>
					{data.map(({ name, score }: any) => (
						<Flex key={`${name}-${score}`} className={styles.row}>
							<FlexItem grow={1} className={styles.name}>{name}</FlexItem>
							<FlexItem className={styles.score}>{score}</FlexItem>
						</Flex>
					))}
				</>
			}
		</Flex>
	)
};

export default LeaderboardTable;
import * as React from 'react';
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';
import SetupPlayers from 'components/SetupPlayers/container';
import RootGame from 'components/RootGame/container';
import Leaderboard from 'components/Leaderboard/container';
import { IGridSquare } from 'constants/setup';
import logo from 'images/logo.png';

interface IPropTypes {
	data: IGridSquare[];
	winner?: string;
	activeTeam: string;
	currentPlayer: string;
	isPlaying: boolean;
	isLeaderboardVisible: boolean;
	onLeaderboardClose: React.MouseEventHandler<any>;
	onStart: React.MouseEventHandler<any>;
	onPlayerTakesTurn: React.MouseEventHandler<any>;
}

const Start: React.SFC<IPropTypes> = ({
	data,
	winner,
	activeTeam,
	currentPlayer,
	isPlaying,
	isLeaderboardVisible,
	onStart,
	onPlayerTakesTurn,
	onLeaderboardClose
}) => {
	return (
		<Flex justifyCenter alignCenter className={styles.container} >
			<FlexItem>
				<img src={logo} className={styles.logo} />

				{!isPlaying && <SetupPlayers onStart={onStart} />}
				{isPlaying && <RootGame data={data} activeTeam={activeTeam} currentPlayer={currentPlayer} onClick={onPlayerTakesTurn} />}
				{isLeaderboardVisible && <Leaderboard winner={winner} onClose={onLeaderboardClose} />}
			</FlexItem>
		</Flex>
	)
};

export default Start;

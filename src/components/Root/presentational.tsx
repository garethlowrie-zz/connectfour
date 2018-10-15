import * as React from 'react';
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';
import RootSetup from 'src/components/RootSetup/container';
import RootGame from 'src/components/RootGame/container';
import RootLeaderboard from 'src/components/RootLeaderboard/container';
import RootGameOver from 'src/components/RootGameOver/presentational';
import { IGridSquare } from 'src/constants/setup';
import { PoseGroup } from 'react-pose';

interface IPropTypes {
	data: IGridSquare[];
	winner?: string;
	activeTeam: string;
	currentPlayer: string;
	isPlaying: boolean;
	isLeaderboardVisible: boolean;
	isGameOver: boolean;
	onStart: React.MouseEventHandler<any>;
	onPlayerTakesTurn: React.MouseEventHandler<any>;
	onLeaderboardClose: React.MouseEventHandler<any>;
	onGameOverClose: React.MouseEventHandler<any>;
}

const Root: React.SFC<IPropTypes> = ({
	data,
	winner,
	activeTeam,
	currentPlayer,
	isPlaying,
	isLeaderboardVisible,
	isGameOver,
	onStart,
	onPlayerTakesTurn,
	onLeaderboardClose,
	onGameOverClose
}) => {
	return (
		<Flex justifyCenter alignCenter className={styles.container} >
			<FlexItem>
				<PoseGroup animateOnMount={true}>
					{
						[
							!isPlaying && <RootSetup key="setup" onStart={onStart} />,
							isPlaying && <RootGame key="game" data={data} activeTeam={activeTeam} currentPlayer={currentPlayer} onPlayerTakesTurn={onPlayerTakesTurn} />,
							isLeaderboardVisible && <RootLeaderboard key="leaderboard" winner={winner} onClose={onLeaderboardClose} />,
							isGameOver && <RootGameOver key="gameOver" onClose={onGameOverClose} />
						] as any
					}
				</PoseGroup>
			</FlexItem>
		</Flex>
	)
};

export default Root;

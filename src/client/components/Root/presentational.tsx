import * as React from 'react';
import styles from './styles.less';
import Flex, { FlexItem } from 'styled-flex-component';
import RootSetup from 'client/components/RootSetup/container';
import RootGame from 'client/components/RootGame/container';
import RootLeaderboard from 'client/components/RootLeaderboard/container';
import { IGridSquare } from 'client/constants/setup';
import { PoseGroup } from 'react-pose';
//import logo from 'images/logo.png';

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

const Root: React.SFC<IPropTypes> = ({
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
				{//<img src={logo} className={styles.logo} />
				}
				<PoseGroup animateOnMount={true}>
					{
						[
							!isPlaying && <RootSetup key="setup" onStart={onStart} />,
							isPlaying && <RootGame key="game" data={data} activeTeam={activeTeam} currentPlayer={currentPlayer} onPlayerTakesTurn={onPlayerTakesTurn} />,
							isLeaderboardVisible && <RootLeaderboard key="leaderboard" winner={winner} onClose={onLeaderboardClose} />
						] as any
					}
				</PoseGroup>
			</FlexItem>
		</Flex>
	)
};

export default Root;

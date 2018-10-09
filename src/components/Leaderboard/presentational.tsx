import * as React from 'react';
import Dialog from 'components/Dialog/presentational';

interface IPropTypes {
	winner: string;
	onClose: React.MouseEventHandler<any>;
}

const Leaderboard: React.SFC<IPropTypes> = ({
	winner,
	onClose
}) => {
	return (
		<Dialog title="Leaderboard" onClose={onClose}>{winner} is the winner!!!!!!!!</Dialog>
	)
};

export default Leaderboard;

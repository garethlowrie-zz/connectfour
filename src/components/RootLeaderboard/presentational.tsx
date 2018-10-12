import * as React from 'react';
import Dialog from 'components/Dialog/presentational';
import posed from 'react-pose';

interface IPropTypes {
	winner: string;
	onClose: React.MouseEventHandler<any>;
}

const Container = posed.div({
	exit: {
		opacity: 0
	},
	enter: {
		opacity: 1,
		delay: 300
	}
});

const Leaderboard: React.SFC<IPropTypes> = ({
	winner,
	onClose,
	...props
}) => {
	return (
		<Container {...props}>
			<Dialog title="🏆 Leaderboard" onClose={onClose}>{winner} is the winner!!!!!!!!</Dialog>
		</Container>
	)
};

export default Leaderboard;

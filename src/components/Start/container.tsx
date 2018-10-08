import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import Start from './presentational';

export default compose(
	withState('isPlaying', 'setIsPlaying', false),
	withHandlers({
		onStart: ({ setIsPlaying }: any) => (playerOneName: string, playerTwoName: string) => {
			console.log('Player 1...', playerOneName, 'Player 2...', playerTwoName);
			setIsPlaying(true);
		}
	})
)(Start);

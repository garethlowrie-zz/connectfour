import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import withPropsOnChange from 'recompose/withPropsOnChange';
import SetupPlayers from './presentational';

export default compose(
	withState('playerOneName', 'setPlayerOneName', ''),
	withState('playerTwoName', 'setPlayerTwoName', ''),
	withPropsOnChange(['playerOneName', 'playerTwoName'], ({ playerOneName, playerTwoName }: any) => ({
		isStartDisabled: playerOneName.length === 0 || playerTwoName.length === 0
	})),
	withHandlers({
		onPlayerOneChange: ({ setPlayerOneName }: any) => (value: string) =>
			setPlayerOneName(value),

		onPlayerTwoChange: ({ setPlayerTwoName }: any) => (value: string) =>
			setPlayerTwoName(value),

		onStart: ({ isStartDisabled, onStart, playerOneName, playerTwoName }: any) => () => {
			if (isStartDisabled || !onStart) {
				return;
			}

			onStart(playerOneName, playerTwoName);
		}
	})
)(SetupPlayers);

import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import withPropsOnChange from 'recompose/withPropsOnChange';
import RootSetup from './presentational';
import LANG from 'src/constants/lang';

export default compose(
	withState('playerOneName', 'setPlayerOneName', ''),
	withState('playerTwoName', 'setPlayerTwoName', ''),
	withPropsOnChange(['playerOneName', 'playerTwoName'], ({ playerOneName, playerTwoName }: any) => {
		const isIncomplete = playerOneName.length === 0 || playerTwoName.length === 0;
		const isNameMatch = playerOneName === playerTwoName;

		return {
			isStartDisabled: isIncomplete || isNameMatch,
			startButtonTitle: isIncomplete ? LANG.youMustEnterNames : isNameMatch ? LANG.playersCantBeTheSame : ''
		}
	}),
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
)(RootSetup);

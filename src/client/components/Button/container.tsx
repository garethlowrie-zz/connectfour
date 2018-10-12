import withHandlers from 'recompose/withHandlers';
import Button from './presentational';

export default withHandlers({
	onClick: ({ onClick, isDisabled }: any) => (event: React.MouseEventHandler<any>) => {
		if (isDisabled || !onClick) {
			return;
		}

		onClick(event);
	},
	onKeyPress: ({ onClick, isDisabled }: any) => (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (isDisabled || !onClick) {
			return;
		}

		if (event.key === 'Enter') {
			onClick(event);
		}
	},
})(Button);

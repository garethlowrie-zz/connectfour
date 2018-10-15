import withHandlers from 'recompose/withHandlers';
import GameColumn from './presentational';
import compose from 'recompose/compose';
import withState from 'recompose/withState';

export default compose(
	withState('isHovering', 'setIsHovering', false),
	withHandlers({
		onClick: ({ id, onClick }: any) => () => {
			if (!onClick) {
				return;
			}

			onClick(id);
		},

		onColumnEnter: ({ setIsHovering }: any) => () =>
			setIsHovering(true),

		onColumnLeave: ({ setIsHovering }: any) => () =>
			setIsHovering(false)
	})
)
(GameColumn);

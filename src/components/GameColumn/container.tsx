import withHandlers from 'recompose/withHandlers';
import GameColumn from './presentational';
import compose from 'recompose/compose';
import withState from 'recompose/withState';

const GRID_SQUARE_HEIGHT = 90;

export default compose(
	withState('isHovering', 'setIsHovering', false),
	withState('top', 'setTop'),
	withHandlers({
		onClick: ({ id, onClick }: any) => () => {
			if (!onClick) {
				return;
			}

			onClick(id);
		},

		onColumnEnter: ({ id, setTop, setIsHovering }: any) => () => {
			setIsHovering(true);
			const column = id + 1;
			const discTopPosition = column * GRID_SQUARE_HEIGHT;

			setTop(discTopPosition);
		},

		onColumnLeave: ({ setTop, setIsHovering }: any) => () => {
			setIsHovering(false);
			setTop(null);
		}
	})
)
(GameColumn);

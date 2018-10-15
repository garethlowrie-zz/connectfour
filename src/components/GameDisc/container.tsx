import GameDisc from './presentational';
import compose from 'recompose/compose';
import withPropsOnChange from 'recompose/withPropsOnChange';

const DISC_HEIGHT = 90;

export default compose(
	withPropsOnChange(['row', 'variant'], ({ row, variant }: any) => ({
		// Calculate the absolute position for the game disc
		outsidePosition: !variant && row ? -Math.abs((row + 1) * DISC_HEIGHT) : 0
	}))
)
(GameDisc);

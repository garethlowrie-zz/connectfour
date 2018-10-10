import GameDisc from './presentational';
import compose from 'recompose/compose';
import withPropsOnChange from 'recompose/withPropsOnChange';

export default compose(
	withPropsOnChange(['row', 'variant'], ({ row, variant }: any) => ({
		// Calculate the absolut position for the game disc
		outsidePosition: !variant && row ? -Math.abs((row + 1) * 90) : 0
	}))
)
(GameDisc);

import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import Header from './presentational';

export default compose(
	withState('name', 'setName', 'dd'),
	withHandlers({
		onChange: ({ setName }: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setName(event.target.value);
		}
	})
)(Header);

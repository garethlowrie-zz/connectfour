import withHandlers from 'recompose/withHandlers';
import Input from './presentational';

export default withHandlers({
	onChange: ({ onChange }: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!onChange) {
			return;
		}

		onChange(event.target.value);
	}
})(Input);

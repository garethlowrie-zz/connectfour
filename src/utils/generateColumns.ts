import { IGridSquare } from 'constants/setup';
import range from 'lodash-es/range';
import getColumn from './getColumn';

export default (data: IGridSquare[], cols: number) =>
	range(cols).map((id) => getColumn(data, id));

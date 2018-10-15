import { IGridSquare } from 'src/constants/setup';

export default (data: IGridSquare[]): boolean => data.find(({ color }) => color == null) === undefined;

import { IGridSquare } from 'client/constants/setup';

export default (data: IGridSquare[], column: number): IGridSquare[] => data.filter(({ x }: IGridSquare) => x === column);

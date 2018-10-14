import { IGridSquare } from 'src/constants/setup';

export default (data: IGridSquare[], column: number): IGridSquare[] => data.filter(({ x }: IGridSquare) => x === column);

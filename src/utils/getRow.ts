import { IGridSquare } from 'constants/setup';

export default (data: IGridSquare[], row: number): IGridSquare[] => data.filter(({ y }: IGridSquare) => y === row)

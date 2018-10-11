import { MAX_ROWS, MAX_COLUMNS } from "constants/setup";
import { range } from 'lodash-es';

export default (rows: number = MAX_ROWS, cols: number = MAX_COLUMNS) => range(rows * cols).map(() => 0)

export default (data: IGridSquare[], column: number) => {
	return data.filter(({ x }: IGridSquare) => x === column)
}

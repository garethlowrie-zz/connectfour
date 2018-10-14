export const createPlayer = (root: any, args: any, context: any, info: any) => {
    return context.db.mutation.createPlayer({
      data: {
        name: args.name,
        score: args.score
      },
    }, info)
};
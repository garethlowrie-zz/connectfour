export const players = (root: any, args: any, context: any, info: any) => 
    context.db.query.players({}, info);
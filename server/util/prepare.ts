export default (o: any) => {
    if(o && o._id) {
        o._id = o._id.toString()
    }
    return o
};
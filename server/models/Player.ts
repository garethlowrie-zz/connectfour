import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface IPlayer {
	name: String,
	score: Number
}

const PlayerSchema = new Schema({
	name: String,
	score: Number
});

export default mongoose.model('Item', PlayerSchema);

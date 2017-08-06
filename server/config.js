import bluebird from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = bluebird;
mongoose.connect('mongodb://localhost:27017/kitchenFox');

export default mongoose;

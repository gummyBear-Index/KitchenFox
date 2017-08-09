import bluebird from 'bluebird';
import mongoose from 'mongoose';
import { dbURL } from '../../config';

mongoose.Promise = bluebird;
mongoose.connect(dbURL);

export default mongoose;

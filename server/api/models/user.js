import { Schema } from 'mongoose';
import mongoose from '../../config';

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model('user', userSchema);

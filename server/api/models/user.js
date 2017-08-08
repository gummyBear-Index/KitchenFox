import mongoose from '../../config';
// import { Schema } from '../../config';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';


const User = new Schema({
  inventory: Schema.Types.Mixed,
  first_name: String,
  last_name: String,
});

User.plugin(passportLocalMongoose, {
  usernameUnique: true,
});

export default mongoose.model('User', User);

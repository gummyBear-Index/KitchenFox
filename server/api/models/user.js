import mongoose from '../../config';
import { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';


const User = new Schema({});

User.plugin(passportLocalMongoose, {
  usernameUnique: true,
});


export default mongoose.model('User', User);

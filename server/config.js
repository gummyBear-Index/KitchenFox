import bluebird from 'bluebird';
import mongoose from 'mongoose';

const production = true;

// const dbURL = production ? 'mongodb://<dbuser>:<dbpassword>@ds129143.mlab.com:29143/kitchenfox' :

mongoose.Promise = bluebird;
mongoose.connect('mongodb://admin:appacad@ds129143.mlab.com:29143/kitchenfox');

export default mongoose;

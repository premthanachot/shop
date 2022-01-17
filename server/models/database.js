const mongoose = require('mongoose');
const { defaultMaxListeners } = require('mongoose/lib/cursor/ChangeStream');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true,});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Connected')
});
// Models
require('./Category');
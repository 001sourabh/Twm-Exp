const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TWM_EXP', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function() {
    console.log('succesfully connected to database');
})
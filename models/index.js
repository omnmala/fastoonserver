const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect('mongodb://localhost:27017/fastoon', {
            useNewUrlParser: true,
            dbName: 'fastoon'
        }, (error) => {
            if (error) {
                console.log('Connect to MongoDB Error!!!', error);
            } else {
                console.log('Connect to MongoDB Success!!!');
            }
        });
        mongoose.set('useCreateIndex', true);
    };    
    connect();
    mongoose.connection.on('error', (error) => {
        console.log('Connect to MongoDB Error!!!', error);
    });
    mongoose.connection.on('disconnected', () => {
        console.error('Disconnected to MongoDB. Try to reconnecting to MongoDB');
        connect();
    });
    require('./user');
    require('./post');
    require('./series');
    require('./tag');
};

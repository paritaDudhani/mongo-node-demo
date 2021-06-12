const db = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.DB_URL;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

(() => {
    db.connect(dbUrl, options).then(() => {
        console.log('Database connection established');
    }).catch(err => {
        console.log('Mongo connection error: ', err);
    })
})();

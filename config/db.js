const mongoose = require('mongoose');

const connectDb = async() =>{
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log('Mongodb connected '.cyan + (await conn).connection.host.cyan);
}

module.exports = connectDb;
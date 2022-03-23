const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps'); // route files
const morgan  = require('morgan'); // logger
const errorHandler = require('./middleware/error');
const connectDb = require('./config/db');
const colors = require('colors');

dotenv.config({path:'./config/config.env'}); // load env 

const PORT = process.env.PORT || 5000;
const app = express();

connectDb();

// use morgan in dev env
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
}

// body-parser
app.use(express.json());
// Mount routs
app.use('/api/v1/bootcamps',bootcamps);
app.use(errorHandler);
const sever = app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT} in environmen ${process.env.NODE_ENV}`.green.bold);
})


// handle rejections :
process.on('unhandledRejection',(err,promise)=>{

    console.log(`error : ${err}`.red.bold);
    sever.close(()=> process.exit(1));
});




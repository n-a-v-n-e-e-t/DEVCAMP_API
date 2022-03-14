const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps'); // route files
dotenv.config({path:'./config/config.env'}); // load env 

const PORT = process.env.PORT || 5000;
const app = express();

// Mount routs
app.use('/api/v1/bootcamps',bootcamps);

app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT} in environmen ${process.env.NODE_ENV}`);
})
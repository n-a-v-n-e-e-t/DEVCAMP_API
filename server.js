const express = require('express');
const dotenv = require('dotenv');

// load env 
dotenv.config({path:'./config/config.env'});
const PORT = process.env.PORT || 5000;

const app = express();
console.log('woring');

app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT} in environmen ${process.env.NODE_ENV}`);
})
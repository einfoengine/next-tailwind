import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from "./db.js";
dotenv.config();
// import cors from 'cors'
// const morgan = require('morgan');
connectDB();
const app = express();

app.get('/',(req,res)=>{
    res.send('This is running!')
})


const port = process.env.PORT || 5000;
let server = app.listen(port, () => {
    console.log(`The pakhi bhai server is running at port ${port}`);
});

process.on('SIGINT', function() {
    console.log('Do something useful here.');
    server.close();
    process.exit()
});
import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import connectDB from "./db.js";

import biodata from './routs/api/biodata.js';
import users from './routs/api/users.js';
// import User from ''

dotenv.config(); // Function invocation
import cors from 'cors'
// const morgan = require('morgan');

connectDB(); 
const app = express();

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Router
// ===
app.get('/',(req,res)=>{
    res.send('This is running!')
})
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use('/api/users', jsonParser, biodata);
app.use('/api/users', jsonParser, users);


// Listining
// ===
const port = process.env.PORT || 5000;
let server = app.listen(port, () => {
    console.log(`The pakhi bhai server is running at port ${port}`);
});

process.on('SIGINT', function() {
    console.log('Do something useful here.');
    server.close();
    process.exit()
});
// const express = require('express')
import express from 'express';
// import cors from 'cors'

// const morgan = require('morgan');
require("dotenv").config();

const app = express();

app.get('/',(req,res)=>{
    res.send('This is running!')
})


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`The pakhi bhai server is running at port ${port}`);
})
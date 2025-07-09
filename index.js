const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

const app = express();
dotenv.config();
const PORT = process.env.PORT;
connectDB();

app.use(express.json());

app.get('/', (req, res)=>{
    console.log("base api called");
});

app.listen(PORT, ()=>{
    console.log('server started');
})
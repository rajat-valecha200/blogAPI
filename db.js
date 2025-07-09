const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DBURL;

const connectDB = async () => {
    try{
        await mongoose.connect(DB_URL);
        console.log("Connection successful");
    } catch(error){
        console.error("Connection error", error);
        process.exit(1);
    }
};

module.exports = connectDB;
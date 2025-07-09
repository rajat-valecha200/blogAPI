const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DBURL;
// const DB_URL = "mongodb+srv://rajatvalecha200:yF7veunWJYCPN8K0@cluster0.fhfsgf3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
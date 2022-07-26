import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB, {});
        console.log(`Successful: DB connection.`);
    }catch(err){
        console.log(`Error: DB connection - ${err}`);
    }
}

// module.exports = connectDB
export default connectDB
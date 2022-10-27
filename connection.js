import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const CON = process.env.MONGO_URI
// ||"mongodb://127.0.0.1:27017/asdm"
mongoose.connect(CON, { useNewUrlParser: true, useUnifiedTopology: true })

export const connection = mongoose.connection
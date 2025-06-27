import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.URI || ""

export const connection = async () => {
    return await mongoose.connect(URI)
}
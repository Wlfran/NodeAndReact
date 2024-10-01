import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb/localhost:27017/nodedb');
        console.log("Console is connected")
    } catch (error) {
        console.log(error)
    }
}
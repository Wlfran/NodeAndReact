import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

export default mongo.model('User', userSchema);
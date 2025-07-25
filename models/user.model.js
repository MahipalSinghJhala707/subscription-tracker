import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
        trim: true,
        minLength: 2,
        maxLength: 50,

    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 5,
        maxLength: 255,
        match: [/\S+@\S+\.\S+/, "Please fill a valid email address like abc@example.com"],

    },
    password: {
        type: String,
        required: [true, "User password is required"],
        minLength: 6,
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;